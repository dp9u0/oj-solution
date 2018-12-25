let fs = require('fs');
let common = require('./common');
let execSync = require('child_process').execSync;

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
  execSync('git add .', {
    stdio: 'inherit'
  });
  execSync('git commit -m ' + `"#${problem}"`, {
    stdio: 'inherit'
  });
}