let fs = require('fs');

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

module.exports.getTargetJsPath = function (problem) {
  let pre = ~~(Number(problem) / 100);
  return `./problems/${pre}00-${pre}99/${problem}/solution.js`;
}

module.exports.getTargetMdPath = function (problem) {
  let pre = ~~(Number(problem) / 100);
  return `./problems/${pre}00-${pre}99/${problem}/README.md`;
}

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

module.exports.readme = function (problem, topics) {
  let readme = fs.readFileSync(README_PATH, 'utf-8');
  let lines = readme.split(/[\n]+/);
  console.log(lines.length)
  let data = '';
  let reg = new RegExp('\\|\\s+' + problem + '\\s+\\|');
  for (let index = 0; index < lines.length; index++) {
    let line = lines[index];
    if (reg.test(line)) {
      let blocks = line.split(/\s*\|\s*/);
      let newLine = `| ${problem} | ${blocks[2]} | :heavy_check_mark: | ${blocks[4]} | ${topics} |   |\n`;
      data += newLine
    } else {
      data += line;
    }
  }
  fs.writeFileSync('./README.md', data);
}