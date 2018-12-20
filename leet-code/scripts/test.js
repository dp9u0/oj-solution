let common = require('./common')
let execSync = require('child_process').execSync;

let problem = process.argv[2] || '1';
common.save(problem)

let jsPath = common.getJsPath(problem);

let cmdStr = `leetcode test ${jsPath}`;

execSync(cmdStr, {
  stdio: 'inherit'
});