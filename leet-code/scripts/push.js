let common = require('./common')
let execSync = require('child_process').execSync;

if (!common.started()) {
  console.error('not started a problem,use npm run start {problem no} first.');
} else {
  let problem = common.getCurrent();
  let jsPath = common.getJsPath(problem);
  let cmdStr = `leetcode push ${jsPath}`;

  // Save first
  common.save(problem);

  execSync(cmdStr, {
    stdio: 'inherit'
  });
}