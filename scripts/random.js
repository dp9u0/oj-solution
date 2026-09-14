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

    // 题号格式化：纯数字去空格(4041)，前缀题保留前缀与数字的空格(LCR 052)
    // 因为 lc show 需要 'LCR 052' 这种带空格格式，'LCR052' 无法识别
    let id = match[1].replace(/\s+/g, '');
    const idMatch = id.match(/^([A-Z]+)(\d+)$/);
    if (idMatch) {
      id = `${idMatch[1]} ${idMatch[2]}`;
    }

    problems.push({
      id,
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