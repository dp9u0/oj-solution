let common = require('./common')
let execSync = require('child_process').execSync;

if (!common.checkStarted()) {
  console.error('not started a problem,use npm run start {problem no} first.');
} else {
  let problem = common.getCurrent();
  let jsPath = common.getJsPath(problem);
  // Save first
  common.saveCurrent(problem);
  // run pusn
  let cmdStr = `leetcode push ${jsPath}`;
  execSync(cmdStr, {
    stdio: 'inherit'
  });
}