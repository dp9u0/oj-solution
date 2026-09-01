const fs = require('fs');
const path = require('path');

// 对 problems/lcp.md、lcr.md、lcs.md 表按题号排序
// 这些表由 updateReadme 追加生成,题号顺序与完成顺序一致而非数字顺序,此处修正。
const problemsDir = path.join(__dirname, '..', 'problems');

// 提取行首的题号数字: "| LCP 03 | ..." → 3
function rowSeq(line) {
  const m = line.match(/^\|\s*[A-Z]+\s+(\d+)\s*\|/);
  return m ? Number(m[1]) : null;
}

for (const prefix of ['lcp', 'lcr', 'lcs']) {
  const filePath = path.join(problemsDir, `${prefix}.md`);
  if (!fs.existsSync(filePath)) continue;

  const lines = fs.readFileSync(filePath, 'utf-8').split('\n');

  // 找到表头(含 "| Seq")和分隔线后的数据行
  const headerIdx = lines.findIndex(l => l.includes('| Seq'));
  if (headerIdx === -1) continue;
  const sepIdx = headerIdx + 1; // 分隔行紧跟表头

  const before = lines.slice(0, headerIdx);       // 标题行
  const header = lines.slice(headerIdx, sepIdx + 1); // 表头 + 分隔行

  // 收集数据行(以 | 开头且含题号数字)
  const dataRows = [];
  const after = [];
  let inData = false;
  for (let i = sepIdx + 1; i < lines.length; i++) {
    const line = lines[i];
    const seq = rowSeq(line);
    if (seq !== null) {
      dataRows.push({ seq, line });
      inData = true;
    } else if (inData && line.trim() !== '') {
      after.push(line);
    }
  }

  dataRows.sort((a, b) => a.seq - b.seq);

  const result = [...before, ...header, ...dataRows.map(d => d.line), ...after].join('\n');
  fs.writeFileSync(filePath, result, 'utf-8');
  console.log(`Sorted ${dataRows.length} rows in ${prefix}.md`);
}
