let fs = require('fs');
let common = require('./common');

let problem  = common.getCurrent();
common.save(problem)

let jsPath = common.getJsPath(problem);
let markdownPath = common.getMdPath(problem);

let targetDir = common.getTargetDir(problem);
let jsPathTarget = common.getTargetJsPath(problem);
let markdownPathTarget = common.getTargetMdPath(problem);

fs.mkdirSync(targetDir, {
  recursive: true
});

fs.copyFileSync(jsPath, jsPathTarget);
fs.copyFileSync(markdownPath, markdownPathTarget);

fs.unlinkSync(jsPath);
fs.unlinkSync(markdownPath);