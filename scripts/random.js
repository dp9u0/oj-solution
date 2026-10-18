const { exec } = require('child_process');

// 默认从 algorithms 未做题池抽取（含 🔒 会员锁题，list 用 -q D 过滤）；
// 传 "lcci" 时切回面试题池（现已全部 AC，仅作保留）
const LIST_COMMAND = process.argv[2] === 'lcci' ? 'pnpm run listi' : 'pnpm run list';

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
    // 兼容三种题号格式：
    //   纯数字：[ 4041 ] 构造子集和的最少操作次数 II ... Hard
    //   前缀：  [LCP 82] 万灵之树 ... Hard
    //   面试题：[面试题 17.26] 稀疏相似度 ... Hard
    // 行首可能有 ★/🔒/✔ 等图标，故不锚定行首。
    const match = line.match(/\[\s*([^\]]+?)\s*\]\s+(.+?)\s{2,}(Easy|Medium|Hard)\b/);
    if (!match) {
      continue;
    }

    // 题号格式化：去掉方括号内的空白后，纯数字直接用(4041)，
    // 前缀题在前缀与数字间补单个空格('LCR052'→'LCR 052'、'面试题17.26'→'面试题 17.26')
    // 因为 lc show 需要 'LCR 052' 这种带空格格式，'LCR052' 无法识别
    const compact = match[1].replace(/\s+/g, '');
    const idMatch = compact.match(/^([^\d]+)(\d[\d.]*)$/);
    const id = idMatch ? `${idMatch[1]} ${idMatch[2]}` : compact;

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