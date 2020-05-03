
let common = require('./common');
// NEED MODIFY HERE
let problems = require("C:/Users/guodp/.lc/leetcode/cache/problems.json");
let start = Number(process.argv[2] || '992');
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
