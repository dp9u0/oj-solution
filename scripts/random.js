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
    const match = line.match(/^\s*\[(\d+)\]\s+(.+?)\s{2,}(Hard)\b/);
    if (!match) {
      continue;
    }

    problems.push({
      id: Number(match[1]),
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