const fs = require('fs');
const readline = require('readline');
const os = require('os');

const SOLUTION_JS_PATH = `./solving.js`;
const README_PATH = `./README.md`;

module.exports.SOLUTION_JS_PATH = SOLUTION_JS_PATH;

module.exports.started = function () {
  return fs.existsSync('./solving/current');
}

module.exports.setCurrent = function (problem) {
  fs.writeFileSync('./solving/current', problem)
}

module.exports.getCurrent = function () {
  return fs.readFileSync('./solving/current', 'utf-8')
}
module.exports.removeCurrent = function () {
  fs.unlinkSync('./solving/current')
}

module.exports.save = function (problem) {
  let jsPath = `./solving/${problem}.js`;
  let lines = fs.readFileSync(SOLUTION_JS_PATH, 'utf-8');
  if (lines.indexOf("\/\/ TEST:") !== -1) {
    lines = lines.replace("\/\/ TEST:", "\/**\n\/\/ TEST:");
    lines += '\n*/'
  }
  fs.writeFileSync(jsPath, lines);
}

module.exports.getJsPath = function (problem) {
  let jsPath = `./solving/${problem}.js`;
  return jsPath;
}

module.exports.getMdPath = function (problem) {
  let mdPath = `./solving/${problem}.md`;
  return mdPath;
}

module.exports.getTargetDir = function (problem) {
  let pre = ~~(Number(problem) / 100);
  return `./problems/${pre}00-${pre}99/${problem}`;
}

const getTargetJsPath = function (problem) {
  let pre = ~~(Number(problem) / 100);
  return `./problems/${pre}00-${pre}99/${problem}/solution.js`;
}

module.exports.getTargetJsPath = getTargetJsPath;

const getTargetMdPath = function (problem) {
  let pre = ~~(Number(problem) / 100);
  return `./problems/${pre}00-${pre}99/${problem}/README.md`;
}

module.exports.getTargetMdPath = getTargetMdPath;

module.exports.exists = function (problem) {
  let jsPath = `./solving/${problem}.js`;
  return fs.existsSync(jsPath);
}

module.exports.markdown = function (data) {
  let lines = data.split(/[\n|\r]+/);
  // 生成 ${problem}.md
  let markdown = '';
  let startCode = false;
  for (let index = 0; index < lines.length; index++) {
    let line = lines[index];
    if (index === 0) {
      if (/\[[0-9]+\].+/.test(line)) {
        markdown = `# ${line.trim()}\n\n## Description\n\n`;
      } else {
        console.error('fetch question description failed')
        break;
      }
    } else if (line && line[0] === '*') {
      markdown += `${line}\n`
    } else if (!/^https:\/\/leetcode.com\/problems.+/.test(line)) {
      if (!startCode) {
        markdown += "\n```md\n";
        startCode = true;
      }
      markdown += line + '\n';
    }
  }
  markdown += '```\n\n';
  markdown += `## Solution\n\n[SourceCode](./solution.js)`;
  return markdown;
}

module.exports.readme = function (problem, topics = '', status = '', remark = '',callback) {
  const MarkdownBakName = README_PATH + '.bak.md';
  fs.copyFileSync(README_PATH, MarkdownBakName);
  fs.unlinkSync(README_PATH);
  let reader = fs.createReadStream(MarkdownBakName);
  let writer = fs.createWriteStream(README_PATH);
  let rl = readline.createInterface({
    input: reader
  });
  let reg = new RegExp('^\\|\\s+' + problem + '\\s+\\|');
  let found = false;
  rl.on('line', (line) => {
    let lineOutput;
    if (reg.test(line)) {
      let blocks = line.split(/\s*\|\s*/);
      let newLine = `| ${problem} | ${blocks[2]} | ${status} | ${blocks[4]} | ${topics} | ${remark}  |`;
      lineOutput = newLine;
      found = true;
    } else {
      lineOutput = line;
    }
    writer.write(lineOutput + os.EOL); // 下一行
  });

  rl.on('close', () => {
    if (!found) {
      let md = getTargetMdPath(problem);
      let newLine = `| ${problem} | [${problem}](${md}) | ${status} | Level | ${topics} | ${remark}  |`;
      writer.write(newLine + os.EOL); // 下一行
    }
    if(callback){
      callback()
    }
  });
}