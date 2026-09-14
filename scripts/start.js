let fs = require('fs');;
let common = require('./common');
let exec = require('child_process').exec;
let problem = process.argv[2] || ~~(Math.random() * 4000);
let jsPath = common.getJsPath(problem);
let markdownPath = common.getMdPath(problem);
let existed = false;
// 题号可能带空格(如 "LCR 043")，需加引号防止 shell 拆词；-l 固定 javascript，避免默认语言是 cpp
const quoted = `"${problem}"`;
let cmdStr = `lc show ${quoted} -l javascript -g -o solving`;

if (common.checkStarted()) {
  let problem = common.getCurrent();
  console.warn(`problem [${problem}] already started, auto save.`);
  common.saveCurrent(problem);
}

if (common.checkProblemExists(problem)) {
  cmdStr = `lc show ${quoted}`;
  existed = true;
}

// lc -g 生成的代码文件名带 slug（如 "4051.count-subarrays-with-distant-sums.js"），
// 而工作流约定为 "solving/4051.js"，这里做一次重命名归一化
function normalizeGeneratedJs(problem, jsPath) {
  if (fs.existsSync(jsPath)) return;
  if (!fs.existsSync('./solving')) return;
  const prefix = `${problem}.`;
  const generated = fs.readdirSync('./solving')
    .filter(name => name.startsWith(prefix) && name.endsWith('.js'));
  if (generated.length > 0) {
    fs.renameSync(`./solving/${generated[generated.length - 1]}`, jsPath);
  }
}

exec(cmdStr, function (err, stdout, stderr) {
  if (err) {
    console.error(err);
    console.error('error:' + stderr);
  } else {
    let data = stdout;
    normalizeGeneratedJs(problem, jsPath);
    // 复制文件
    fs.copyFileSync(jsPath, common.SOLUTION_JS_PATH);
    if (!existed) {
      let markdown = common.creteMarkdown(data);
      fs.writeFileSync(markdownPath, markdown);
    }
    fs.copyFileSync(markdownPath, common.SOLUTION_MD_PATH);
    console.log(fs.readFileSync(common.SOLUTION_MD_PATH, 'utf-8'));
    console.log(`Problem Started ${problem}`);
    common.setCurrent(problem);
  }
});