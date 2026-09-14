// 一次性修复：分块表格中 L 列难度与题目 README 的 "* Easy/Medium/Hard (xx%)" 行不一致的历史错标
// （成因：ok.js 曾固定读 solving.md 第 8 行解析难度，中文站格式行偏移不同导致回退成 Hard）
// 用法: node scripts/fix-levels.js          # 修复并打印变更
//       node scripts/fix-levels.js --dry    # 只审计不修改
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PROBLEMS_DIR = path.join(ROOT, 'problems');
const dry = process.argv.includes('--dry');

// 目录路径归一化（去补零）：分块表链接路径与实际目录统一 key
function normDir(relDir) {
  const m = String(relDir).match(/^([^/]+)\/([^/]+)$/);
  if (!m) return relDir;
  const n = parseInt(m[2], 10);
  return Number.isNaN(n) ? relDir : `${m[1]}/${n}`;
}

// 从题目 README 提取难度（大小写不敏感查找 README）
function levelFromReadme(dirAbs) {
  const name = fs.readdirSync(dirAbs).find(f => /^readme\.md$/i.test(f));
  if (!name) return null;
  const content = fs.readFileSync(path.join(dirAbs, name), 'utf-8');
  const m = content.match(/^\*\s*(Easy|Medium|Hard)\s*\(/m);
  return m ? m[1] : null;
}

// 遍历全部题目目录 → normalizedDir → level
const dirLevels = new Map();
for (const range of fs.readdirSync(PROBLEMS_DIR)) {
  const rangePath = path.join(PROBLEMS_DIR, range);
  if (!fs.statSync(rangePath).isDirectory()) continue;
  if (!/^\d{4}-\d{4}$/.test(range) && !/^(lcp|lcr|lcs)$/.test(range)) continue;
  for (const num of fs.readdirSync(rangePath)) {
    const dirAbs = path.join(rangePath, num);
    if (!fs.statSync(dirAbs).isDirectory()) continue;
    const level = levelFromReadme(dirAbs);
    if (level) dirLevels.set(normDir(`${range}/${num}`), level);
  }
}

// 比对并修复分块表
let fixed = 0, checked = 0;
for (const name of fs.readdirSync(PROBLEMS_DIR)) {
  if (!/^\d{4}-\d{4}\.md$|^(lcp|lcr|lcs)\.md$/.test(name)) continue;
  const full = path.join(PROBLEMS_DIR, name);
  const lines = fs.readFileSync(full, 'utf-8').split('\n');
  let changed = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!/^\s*\|/.test(line)) continue;
    if (!/\|\s*:o:\s*\|/.test(line)) continue; // 只核对已解决行
    const m = line.match(/\]\(\.\/problems\/([^)]+?)\/README\.md\)/i);
    if (!m) continue;
    const level = dirLevels.get(normDir(m[1]));
    if (!level) continue;
    checked++;
    const row = line.replace(/(\|\s*:o:\s*\|\s*)(Easy|Medium|Hard)(\s*\|)/, `$1${level}$3`);
    if (row !== line) {
      console.log(`${name}:${i + 1}  ${RegExp.lastMatch || ''} -> ${level}  |  ${line.slice(0, 80)}`);
      lines[i] = row;
      changed = true;
      fixed++;
    }
  }
  if (changed && !dry) fs.writeFileSync(full, lines.join('\n'));
}
console.log(`\nchecked ${checked} solved rows, ${fixed} mismatched ${dry ? '(dry run, nothing written)' : '-> fixed'}`);
