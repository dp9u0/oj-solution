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
} else {
  let problem = common.getCurrent();
  let jsPath = common.getJsPath(problem);
  let markdownPath = common.getMdPath(problem);
  let targetDir = common.getTargetDir(problem);
  let jsPathTarget = common.getTargetJsPath(problem);
  let markdownPathTarget = common.getTargetMdPath(problem);

  // 获取题目信息
  const { title, level } = common.parseCurrent();

  // save first
  common.saveCurrent(problem);

  if (!fs.existsSync(targetDir)) {
    // mkdir 
    fs.mkdirSync(targetDir, {
      recursive: true
    });
  }

  // copy file
  fs.copyFileSync(jsPath, jsPathTarget);
  fs.copyFileSync(markdownPath, markdownPathTarget);

  // clean up
  fs.unlinkSync(jsPath);
  fs.unlinkSync(markdownPath);
  common.removeCurrent();

  // update readme
  common.updateReadme({ problem, title, level, topics, status: ':o:', remark });
  setTimeout(() => {
    execSync('git add .', {
      stdio: 'inherit'
    });
    execSync('git commit -m ' + `"#${problem}"`, {
      stdio: 'inherit'
    });
  }, 1000);
  if (remark === ':+1:') {
    execSync(`leetcode star ${problem}`, {
      stdio: 'inherit'
    });
  }
}