let common = require('./common')
let execSync = require('child_process').execSync;

if (!common.checkStarted()) {
  console.error('not started a problem,use npm run start {problem no} first.');
  return;
}

let problem = common.getCurrent();
let jsPath = common.getJsPath(problem);
// save first
common.saveCurrent(problem);
// test（jsPath 可能含空格，如 "LCR 043.js"，需加引号防止 shell 拆词）
let cmdStr = `lc test "${jsPath}"`;
execSync(cmdStr, {
  stdio: 'inherit'
});
