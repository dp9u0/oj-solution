let fs = require('fs');
let common = require('./common');
let execSync = require('child_process').execSync;
let topics = process.argv[2] || '[none]';
let remark = process.argv[3];

if (remark === '+1') {
  remark = ':+1:'
}

if (!common.checkStarted()) {
  console.error('not started a problem,use npm run start {problem no} first.');
  return;
}

let problem = common.getCurrent();
let targetDir = common.getTargetDir(problem);
let jsPathTarget = common.getTargetJsPath(problem);
let markdownPathTarget = common.getTargetMdPath(problem);

if (!fs.existsSync(targetDir)) {
  // mkdir 
  fs.mkdirSync(targetDir, {
    recursive: true
  });
}

// 获取题目信息
const { title, level } = common.parseCurrent();

// copy file
fs.copyFileSync(common.SOLUTION_JS_PATH, jsPathTarget);
fs.copyFileSync(common.SOLUTION_MD_PATH, markdownPathTarget);

// clean up
common.removeCurrent();
fs.unlinkSync(common.SOLUTION_JS_PATH);
fs.unlinkSync(common.SOLUTION_MD_PATH);

// update readme
common.updateReadme({ problem, title, level, topics, status: ':o:', remark });
setTimeout(() => {
  // execSync('git add .', {
  //   stdio: 'inherit'
  // });
  // execSync('git commit -m ' + `"#${problem}"`, {
  //   stdio: 'inherit'
  // });
}, 1000);

if (remark === ':+1:') {
  execSync(`leetcode star ${problem}`, {
    stdio: 'inherit'
  });
}
