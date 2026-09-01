const fs = require('fs');
const path = require('path');

// 一次性迁移脚本：统一 problems/ 目录命名为 4 位数
// 1. 区间目录：000-099 → 0000-0099（与分块文件名一致）
// 2. 题号子目录：0000-0099/61 → 0000-0099/0061
// 3. 更新所有 md 文件中的链接引用
const problemsDir = path.join(__dirname, '..', 'problems');

// 收集 (旧路径片段 → 新路径片段) 映射，用于批量替换 md 引用
const pathMap = [];
const renamed = { ranges: 0, problems: 0 };

// 1. 重命名区间目录（3位 → 4位）
for (const dir of fs.readdirSync(problemsDir)) {
  if (!/^\d{3}-\d{3}$/.test(dir)) continue;
  const [s, e] = dir.split('-');
  const newDir = `${String(Number(s)).padStart(4, '0')}-${String(Number(e)).padStart(4, '0')}`;
  if (newDir === dir) continue;

  const oldPath = path.join(problemsDir, dir);
  const newPath = path.join(problemsDir, newDir);

  // 先重命名子目录（题号 1-3位 → 4位）
  for (const sub of fs.readdirSync(oldPath)) {
    if (!/^\d+$/.test(sub)) continue; // 只处理纯数字子目录
    const padded = String(Number(sub)).padStart(4, '0');
    if (padded === sub) continue;
    const oldSub = path.join(oldPath, sub);
    const newSub = path.join(oldPath, padded);
    fs.renameSync(oldSub, newSub);
    pathMap.push({ old: `./problems/${dir}/${sub}/`, new: `./problems/${newDir}/${padded}/` });
    renamed.problems++;
  }

  // 再重命名区间目录本身
  fs.renameSync(oldPath, newPath);
  pathMap.push({ old: `./problems/${dir}/`, new: `./problems/${newDir}/` });
  renamed.ranges++;
}

// 2. 已有 4 位区间目录中，也补全题号子目录（若存在 1-3 位）
for (const dir of fs.readdirSync(problemsDir)) {
  if (!/^\d{4}-\d{4}$/.test(dir)) continue;
  const dirPath = path.join(problemsDir, dir);
  if (!fs.statSync(dirPath).isDirectory()) continue;
  for (const sub of fs.readdirSync(dirPath)) {
    if (!/^\d+$/.test(sub)) continue;
    const padded = String(Number(sub)).padStart(4, '0');
    if (padded === sub) continue;
    const oldSub = path.join(dirPath, sub);
    const newSub = path.join(dirPath, padded);
    fs.renameSync(oldSub, newSub);
    pathMap.push({ old: `./problems/${dir}/${sub}/`, new: `./problems/${dir}/${padded}/` });
    renamed.problems++;
  }
}

// 3. 更新所有 md 文件引用（problems/ 下的分块文件 + 主 README + 所有归档 README）
const mdFiles = [];
const walk = (p) => {
  for (const f of fs.readdirSync(p)) {
    const fp = path.join(p, f);
    if (fs.statSync(fp).isDirectory()) walk(fp);
    else if (f.endsWith('.md')) mdFiles.push(fp);
  }
};
walk(problemsDir);
if (fs.existsSync(path.join(__dirname, '..', 'README.md'))) {
  mdFiles.push(path.join(__dirname, '..', 'README.md'));
}

let replacedCount = 0;
for (const fp of mdFiles) {
  let content = fs.readFileSync(fp, 'utf-8');
  let changed = false;
  for (const { old, new: nw } of pathMap) {
    if (content.includes(old)) {
      content = content.split(old).join(nw);
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(fp, content);
    replacedCount++;
  }
}

console.log(`Renamed ${renamed.ranges} range dirs, ${renamed.problems} problem dirs.`);
console.log(`Updated ${replacedCount} md files.`);
