// 从本地分块表格随机选取一道未解决的题目（不依赖 lc list 网络查询）
// 候选池：分块表中有链接、状态为空（非 :o: 已解决 / :lock: 会员 / :soon: 预定）的行
const fs = require('fs');
const path = require('path');

const problems = [];

for (const name of fs.readdirSync(path.resolve(__dirname, '../problems'))) {
  if (!/^\d{4}-\d{4}\.md$|^(lcp|lcr|lcs)\.md$/.test(name)) continue;
  const lines = fs.readFileSync(path.resolve(__dirname, '../problems', name), 'utf-8').split('\n');
  for (const line of lines) {
    if (!/^\s*\|/.test(line)) continue;
    const cells = line.split('|').map(s => s.trim());
    // | Seq | Title | S | L | Tags | Remark |
    if (cells.length < 7 || !cells[1] || cells[1] === 'Seq' || /^-+$/.test(cells[1])) continue;
    if (!/\]\(\.\/problems\//.test(cells[2])) continue;
    if (cells[3]) continue; // :o: / :lock: / :soon: 均跳过，只取未刷的空状态行
    const level = /^(Easy|Medium|Hard)/.test(cells[4]) ? cells[4].match(/^(Easy|Medium|Hard)/)[1] : '';
    problems.push({ id: cells[1], title: (cells[2].match(/^\[([^\]]*)\]/) || [, cells[2]])[1], difficulty: level });
  }
}

if (!problems.length) {
  console.error('No unsolved problems found in chunk tables.');
  process.exit(1);
}

const picked = problems[Math.floor(Math.random() * problems.length)];
console.log(`[${picked.id}] ${picked.title} (${picked.difficulty})`);
