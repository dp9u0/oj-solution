const fs = require('fs');
const path = require('path');

const problemsDir = path.join(__dirname, '..', 'problems');
const files = fs.readdirSync(problemsDir).filter(f => /^\d{4}-\d{4}\.md$/.test(f));

for (const file of files) {
  const filePath = path.join(problemsDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  const headerLine = '| Seq  | Title';
  let tableStart = -1;
  let tableEnd = -1;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(headerLine)) {
      tableStart = i;
      continue;
    }
    if (tableStart !== -1 && tableEnd === -1 && /^\|\s*-{3,}/.test(lines[i])) {
      tableEnd = i;
      break;
    }
  }

  if (tableStart === -1 || tableEnd === -1) {
    console.error(`Could not find table header in ${file}`);
    continue;
  }

  const dataLines = [];
  let lastTableRow = -1;
  for (let i = tableEnd + 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('|') && line.endsWith('|')) {
      const seqMatch = line.match(/^\|\s*(\d+)\s*\|/);
      if (seqMatch) {
        dataLines.push({ seq: parseInt(seqMatch[1], 10), line: lines[i] });
        lastTableRow = i;
      }
    }
  }

  dataLines.sort((a, b) => a.seq - b.seq);

  const before = lines.slice(0, tableStart);
  const header = lines.slice(tableStart, tableEnd + 1);
  const after = lines.slice(lastTableRow + 1);

  const result = [...before, ...header, ...dataLines.map(d => d.line), ...after].join('\n');
  fs.writeFileSync(filePath, result, 'utf-8');

  console.log(`Sorted ${dataLines.length} problems in ${file}.`);
}
