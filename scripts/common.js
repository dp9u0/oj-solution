const fs = require('fs');
const readline = require('readline');
const os = require('os');

const SOLUTION_JS_PATH = `./solution.js`;
const SOLUTION_MD_PATH = `./solving.md`;
const README_PATH = `./README.md`;
const PROBLEMS_DIR = `./problems`;
const CURRENT_FILE = `./current`;

module.exports.SOLUTION_JS_PATH = SOLUTION_JS_PATH;
module.exports.SOLUTION_MD_PATH = SOLUTION_MD_PATH;

module.exports.checkStarted = function () {
  return fs.existsSync(CURRENT_FILE);
}

module.exports.setCurrent = function (problem) {
  fs.writeFileSync(CURRENT_FILE, ""+problem);
}

module.exports.getCurrent = function () {
  return fs.readFileSync(CURRENT_FILE, 'utf-8').trim();
}

module.exports.removeCurrent = function () {
  fs.unlinkSync(CURRENT_FILE);
}

module.exports.parseCurrent = function () {
  // 保存 markdown
  let contentOfMd = fs.readFileSync(SOLUTION_MD_PATH, 'utf-8');
  let lineOfMd = contentOfMd.split("\n");
  let title = lineOfMd[0].replace(/# \[[^\]]+\] /, "");
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

// 解析题号："LCR 043" → { prefix: 'lcr', num: '043' }；纯数字 "4041" → { prefix: null, num: '4041' }
function parseProblemId(problem) {
  const m = String(problem).trim().match(/^([A-Za-z]+)\s+(\d+)$/);
  if (m) return { prefix: m[1].toLowerCase(), num: m[2] };
  return { prefix: null, num: String(problem).trim() };
}

// 归档目录：前缀题(LCP/LCR/LCS) → ./problems/<prefix>/<num>，纯数字 → ./problems/<range>/<num>
function targetPath(problem, file) {
  const { prefix, num } = parseProblemId(problem);
  const dir = prefix
    ? `./problems/${prefix}/${num}`
    : (() => {
        const pre = ~~(Number(num) / 100);
        return `./problems/${pre}00-${pre}99/${num}`;
      })();
  return file ? `${dir}/${file}` : dir;
}

module.exports.getTargetDir = function (problem) {
  return targetPath(problem, '');
}

const getTargetJsPath = function (problem) {
  return targetPath(problem, 'solution.js');
}

module.exports.getTargetJsPath = getTargetJsPath;

const getTargetMdPath = function (problem) {
  return targetPath(problem, 'README.md');
}

module.exports.getTargetMdPath = getTargetMdPath;

module.exports.checkProblemExists = function (problem) {
  let jsPath = `./solving/${problem}.js`;
  return fs.existsSync(jsPath);
}
function customDecodeURIComponent(encodedURI) {
  return encodedURI.replace(/%([0-9A-F]{2})/gi, (match, hex) => {
    return String.fromCharCode(parseInt(hex, 16));
  });
}
module.exports.creteMarkdown = function (data) {
  let lines = data.split(/[\n|\r]+/);
  // 生成 ${problem}.md
  let markdown = '';
  let startCode = false;
  for (let index = 0; index < lines.length; index++) {
    let line = lines[index];
    if (index === 0) {
      if (/\[[^\]]+\].+/.test(line)) {
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
      line = line.trim();
      // strip well-formed html tags only; a bare "<" from decoded math
      // (e.g. "0 <= i < n") must not eat the rest of the line
      line = line.replace(/<\/?[a-zA-Z][^>]*>/g, "");
      try {
        line = decodeURIComponent(line);
      } catch (e) {
        console.error('decodeURIComponent failed', e);
      }
      line = line.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, "").replace(/&quot;/g,"'");
      line = line.trim();
      markdown += line + '\n';
    }
  }
  markdown += '```\n\n';
  markdown += `## Solution\n\n[SourceCode](./solution.js)`;
  markdown += '\n';
  return markdown;
}

function getChunkFilePath(problem) {
  const { prefix, num } = parseProblemId(problem);
  if (prefix) {
    // 前缀题(LCP/LCR/LCS)归档到独立的 problems/<prefix>.md 表
    return `${PROBLEMS_DIR}/${prefix}.md`;
  }
  let pre = ~~(Number(num) / 100);
  let start = String(pre * 100).padStart(4, '0');
  let end = String(pre * 100 + 99).padStart(4, '0');
  return `${PROBLEMS_DIR}/${start}-${end}.md`;
}

module.exports.updateReadme = function ({ problem, title, level, topics = '', status = '', remark = '', callback }) {
  const chunkPath = getChunkFilePath(problem);
  // 分块文件不存在时(如首个前缀题归档)，先创建表头，与现有分块文件格式一致
  if (!fs.existsSync(chunkPath)) {
    const { prefix } = parseProblemId(problem);
    const range = prefix ? prefix.toUpperCase() : '';
    fs.writeFileSync(chunkPath,
      `# Problems ${range}\n\n| Seq  | Title | S | L | Tags |      |\n| ---- | ----- | - | - | ---- | ---- |\n`);
  }
  const tmpFilePath = chunkPath + `.${Date.now()}.tmp`;
  let reader = fs.createReadStream(chunkPath);
  let writer = fs.createWriteStream(tmpFilePath);
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
  });

  writer.on('finish', () => {
    fs.renameSync(tmpFilePath, chunkPath);
    if (callback) {
      callback();
    }
  });
}