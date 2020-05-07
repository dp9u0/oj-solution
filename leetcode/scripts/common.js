const fs = require('fs');
const readline = require('readline');
const os = require('os');

const SOLUTION_JS_PATH = `./solution.js`;
const SOLUTION_MD_PATH = `./solving.md`;
const README_PATH = `./README.md`;
const CURRENT_FILE = `./current`;

module.exports.SOLUTION_JS_PATH = SOLUTION_JS_PATH;
module.exports.SOLUTION_MD_PATH = SOLUTION_MD_PATH;

module.exports.checkStarted = function () {
  return fs.existsSync(CURRENT_FILE);
}

module.exports.setCurrent = function (problem) {
  fs.writeFileSync(CURRENT_FILE, problem);
}

module.exports.getCurrent = function () {
  return fs.readFileSync(CURRENT_FILE, 'utf-8');
}

module.exports.removeCurrent = function () {
  fs.unlinkSync(CURRENT_FILE);
}

module.exports.parseCurrent = function () {
  // 保存 markdown
  let contentOfMd = fs.readFileSync(SOLUTION_MD_PATH, 'utf-8');
  let lineOfMd = contentOfMd.split("\n");
  let title = lineOfMd[0].replace(/# \[[0-9]+\] /, "");
  let lineLevel = lineOfMd[7];
  let level = lineLevel.indexOf("Easy") !== -1 ? "Easy" : lineLevel.indexOf("Medium") !== -1 ? "Medium" : "Hard";
  return { title, level };
}

module.exports.saveCurrent = function (problem, commentTestCode = true) {
  let jsPath = `./solving/${problem}.js`;
  let mdPath = `./solving/${problem}.md`;
  let linesOfJs = fs.readFileSync(SOLUTION_JS_PATH, 'utf-8');
  if (commentTestCode) {
    // 保存 js 解决方案
    if (linesOfJs.indexOf("\/\/ TEST:") !== -1) {
      linesOfJs = linesOfJs.replace("\/\/ TEST:", "\/**\n\/\/ TEST:");
      linesOfJs += '\n*/'
    }
  }
  fs.writeFileSync(jsPath, linesOfJs);
  // 保存 markdown
  let contentOfMd = fs.readFileSync(SOLUTION_MD_PATH, 'utf-8');
  fs.writeFileSync(mdPath, contentOfMd);
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

module.exports.checkProblemExists = function (problem) {
  let jsPath = `./solving/${problem}.js`;
  return fs.existsSync(jsPath);
}

module.exports.creteMarkdown = function (data) {
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
      if (line.indexOf("* Source Code:") === -1 && line.indexOf("* Total Accepted:") === -1 && line.indexOf("* Total Submissions:") === -1) {
        markdown += `${line.trim()}\n`
      }
    } else if (/^https:\/\/leetcode.com\/problems.+/.test(line)) {
      markdown += `[LeetCode Problem Description](${line.trim()})\n\n`;
    } else {
      if (!startCode) {
        markdown += "\n```md\n";
        startCode = true;
      }
      markdown += line.trim() + '\n';
    }
  }
  markdown += '```\n\n';
  markdown += `## Solution\n\n[SourceCode](./solution.js)`;
  markdown += '\n';
  return markdown;
}

module.exports.updateReadme = function ({ problem, title, level, topics = '', status = '', remark = '', callback }) {
  const MarkdownBakName = README_PATH + '.bak';
  fs.copyFileSync(README_PATH, MarkdownBakName);
  let reader = fs.createReadStream(MarkdownBakName);
  let writer = fs.createWriteStream(README_PATH);
  let lineReader = readline.createInterface({
    input: reader
  });
  let reg = new RegExp('^\\|\\s+' + problem + '\\s+\\|');
  let found = false;
  lineReader.on('line', (line) => {
    let lineOutput;
    if (reg.test(line)) {
      let blocks = line.split(/\s*\|\s*/);
      let oldTitle = blocks[2];
      let oldLevel = blocks[4];
      let newLine = `| ${problem} | ${oldTitle} | ${status} | ${level || oldLevel} | ${topics} | ${remark}  |`;
      lineOutput = newLine;
      found = true;
    } else {
      lineOutput = line;
    }
    writer.write(lineOutput + os.EOL); // 下一行
  });

  lineReader.on('close', () => {
    if (!found) {
      let md = getTargetMdPath(problem);
      let newLine = `| ${problem} | [${title || problem}](${md}) | ${status} | ${level} | ${topics} | ${remark}  |`;
      writer.write(newLine + os.EOL); // 下一行
    }
    writer.end();
    fs.unlinkSync(MarkdownBakName);
    if (callback) {
      callback()
    }
  });
}