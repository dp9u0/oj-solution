let fs = require('fs');;
let common = require('./common');
let exec = require('child_process').exec;
let problem = process.argv[2] || ~~(Math.random() * 960);
let jsPath = common.getJsPath(problem);
let markdownPath = common.getMdPath(problem);
let existed = false;
let cmdStr = `leetcode show -g ${problem} -o solving`;

if (common.checkStarted()) {
  let problem = common.getCurrent();
  console.warn(`problem [${problem}] already started, auto save.`);
  common.saveCurrent(problem);
}

if (common.checkProblemExists(problem)) {
  cmdStr = `leetcode show ${problem}`;
  existed = true;
}

exec(cmdStr, function (err, stdout, stderr) {
  if (err) {
    console.error(err);
    console.error('error:' + stderr);
  } else {
    let data = stdout;
    // 复制文件
    fs.copyFileSync(jsPath, common.SOLUTION_JS_PATH);
    if (!existed) {
      let markdown = common.creteMarkdown(data);
      fs.writeFileSync(markdownPath, markdown);
    }
    fs.copyFileSync(markdownPath, common.SOLUTION_MD_PATH);
    console.log(fs.readFileSync(common.SOLUTION_MD_PATH, 'utf-8'));
    common.setCurrent(problem);
  }
});