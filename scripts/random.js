const { exec } = require('child_process');

const LIST_COMMAND = 'pnpm run list';

exec(LIST_COMMAND, (err, stdout, stderr) => {
  if (err) {
    if (stderr) {
      console.error(stderr.trim());
    }
    console.error(err.message);
    process.exit(1);
  }

  const lines = stdout.split(/\r?\n/);
  const problems = [];

  for (const line of lines) {
    // 兼容两种题号格式：
    //   纯数字：[ 4041 ] 构造子集和的最少操作次数 II ... Hard
    //   前缀：  [LCP 82] 万灵之树 ... Hard
    // 行首可能有 ★/🔒/✔ 等图标，故不锚定行首。
    const match = line.match(/\[\s*([A-Z]*\s*\d+)\s*\]\s+(.+?)\s{2,}(Easy|Medium|Hard)\b/);
    if (!match) {
      continue;
    }

    const id = match[1].replace(/\s+/g, '');
    // 只保留纯数字题号：LCP/LCR/LCS 等前缀题在 start/ok 归档流程中不兼容
    if (!/^\d+$/.test(id)) {
      continue;
    }

    problems.push({
      id: Number(id),
      title: match[2].trim(),
      difficulty: match[3],
    });
  }

  if (!problems.length) {
    console.error('No problems parsed from list output.');
    process.exit(1);
  }

  const picked = problems[Math.floor(Math.random() * problems.length)];
  console.log(`[${picked.id}] ${picked.title} (${picked.difficulty})`);
});