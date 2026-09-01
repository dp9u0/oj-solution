
let common = require('./common');
// NEED MODIFY HERE
const os = require('os');
const path = require('path');
// 当前使用 CN 站(leetcode.cn)，缓存路径为 leetcode.cn；如切回国际站需改回 leetcode
let problems = require(path.join(os.homedir(), ".lc/leetcode.cn/cache/problems.json"));
let start = Number(process.argv[2] || '2084');
problems = problems.filter(p => p.id >= start).sort((a, b) => a.id - b.id);
let map = new Map();
problems.forEach(p => { map.set(`${p.fid}`, p) });
let last = problems[problems.length - 1].fid;
for (let id = start; id <= last; id++) {
  let p = map.get(`${id}`);
  if (!p) {
    console.warn(`not exist ${id}`);
    p = {
      name: `${id}`,
      level: "Easy",
      category: 'algorithms'
    }
  }
  let status = p.locked ? ":lock:" : (p.category === 'algorithms' ? "" : ":soon:");
  const args = {
    problem: id,
    title: p.name,
    level: p.level,
    status,
  };
  setTimeout(() => {
    console.warn(`writing ${id}`);
    common.updateReadme(args);
  }, 1000 * (id - start));
}
