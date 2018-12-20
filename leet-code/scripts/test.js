let common = require('./common')
let execSync = require('child_process').execSync;

let problem = common.getCurrent();
common.save(problem)

let jsPath = common.getJsPath(problem);

let cmdStr = `leetcode test ${jsPath}`;

execSync(cmdStr, {
  stdio: 'inherit'
});