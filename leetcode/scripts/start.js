let fs = require('fs');;
let common = require('./common');
let exec = require('child_process').exec;

let problem = process.argv[2] || ~~(Math.random() * 960);
let solutionjsPath = common.SOLUTION_JS_PATH;
let jsPath = common.getJsPath(problem);
let markdownPath = common.getMdPath(problem);

fs.mkdirSync('./solving', {
  recursive: true
});

let cmdStr = `leetcode show -g ${problem} -o solving`;

if (common.exists(problem)) {
  cmdStr = `leetcode show ${problem}`;
  existed = true;
}

exec(cmdStr, function (err, stdout, stderr) {
  if (err) {
    console.error(err);
    console.error('error:' + stderr);
  } else {
    let data = stdout;
    console.log(data);
    // 复制文件
    fs.copyFileSync(jsPath, solutionjsPath);
    let markdown = common.markdown(data);
    // console.log(markdown);
    fs.writeFileSync(markdownPath, markdown);
    common.setCurrent(problem);
  }
});