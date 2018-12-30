let fs = require('fs');
let common = require('./common');
let execSync = require('child_process').execSync;
let topics = process.argv[2] || '[topic]';
let remark = process.argv[3];
if (remark === '+1') {
  remark = ':+1:'
}
if (!common.started()) {
  console.error('not started a problem,use npm run start {problem no} first.');
} else {
  let problem = common.getCurrent();
  let jsPath = common.getJsPath(problem);
  let markdownPath = common.getMdPath(problem);
  let targetDir = common.getTargetDir(problem);
  let jsPathTarget = common.getTargetJsPath(problem);
  let markdownPathTarget = common.getTargetMdPath(problem);

  // save first
  common.save(problem);

  // mkdir 
  fs.mkdirSync(targetDir, {
    recursive: true
  });

  // copy file
  fs.copyFileSync(jsPath, jsPathTarget);
  fs.copyFileSync(markdownPath, markdownPathTarget);

  // clean up
  fs.unlinkSync(jsPath);
  fs.unlinkSync(markdownPath);
  common.removeCurrent();
  common.readme(problem, topics, ':o:', remark, () => {
    execSync('git add .', {
      stdio: 'inherit'
    });
    execSync('git commit -m ' + `"#${problem}"`, {
      stdio: 'inherit'
    });
    execSync('git push ', {
      stdio: 'inherit'
    });
  });
  if (remark === ':+1:') {
    execSync(`leetcode star ${problem}`, {
      stdio: 'inherit'
    });
  }
}