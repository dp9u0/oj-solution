const fs = require('fs');
const path = require('path');

const readmePath = path.join(__dirname, '..', 'README.md');
const content = fs.readFileSync(readmePath, 'utf-8');
const lines = content.split('\n');

// Find the table boundaries
const headerLine = '| Seq  | Title';
let tableStart = -1;
let tableEnd = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes(headerLine)) {
    tableStart = i;
    continue;
  }
  // Separator line: | ---- | ...
  if (tableStart !== -1 && tableEnd === -1 && /^\|\s*-{3,}/.test(lines[i])) {
    tableEnd = i;
    break;
  }
}

if (tableStart === -1 || tableEnd === -1) {
  console.error('Could not find table header');
  process.exit(1);
}

// Collect table rows after the separator
const dataLines = [];
let lastTableRow = -1;
for (let i = tableEnd + 1; i < lines.length; i++) {
  const line = lines[i].trim();
  if (line.startsWith('|') && line.endsWith('|') && line !== lines[tableStart] && line !== lines[tableEnd]) {
    // Extract the Seq number from the first cell
    const seqMatch = line.match(/^\|\s*(\d+)\s*\|/);
    if (seqMatch) {
      dataLines.push({ seq: parseInt(seqMatch[1], 10), line: lines[i] });
      lastTableRow = i;
    }
  }
}

// Sort by Seq number
dataLines.sort((a, b) => a.seq - b.seq);

// Rebuild: everything before tableStart is unchanged, then table header + separator + sorted rows + rest
const before = lines.slice(0, tableStart);
const header = lines.slice(tableStart, tableEnd + 1);
const after = lines.slice(lastTableRow + 1);

const result = [...before, ...header, ...dataLines.map(d => d.line), ...after].join('\n');

fs.writeFileSync(readmePath, result, 'utf-8');

console.log(`Sorted ${dataLines.length} problems by Seq number.`);
