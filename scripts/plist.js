
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
// 边界取纯数字 fid 的最大值：缓存按内部 id 排序后末位可能是前缀式 fid（如 "LCP 82"），
// 直接拿它当上界会使 id <= "LCP 82" 永为 false，循环静默零次执行
let last = problems.reduce((max, p) => {
  const fid = String(p.fid);
  return /^\d+$/.test(fid) ? Math.max(max, Number(fid)) : max;
}, 0);
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
