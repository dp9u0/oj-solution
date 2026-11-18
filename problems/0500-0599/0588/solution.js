/*
 * @lc app=leetcode.cn id=588 lang=javascript
 *
 * [588] 设计内存文件系统
 */

// @lc code=start

var FileSystem = function() {
    this.root = { children: new Map(), content: '', isFile: false };
};

FileSystem.prototype.walk = function(path, create) {
    let node = this.root;
    for (const seg of path.split('/').filter(Boolean)) {
        if (!node.children.has(seg)) {
            if (!create) return null;
            node.children.set(seg, { children: new Map(), content: '', isFile: false });
        }
        node = node.children.get(seg);
    }
    return node;
};

/**
 * @param {string} path
 * @return {string[]}
 */
FileSystem.prototype.ls = function(path) {
    const node = this.walk(path, false);
    if (!node) return [];
    if (node.isFile) {
        const segs = path.split('/').filter(Boolean);
        return [segs[segs.length - 1]];
    }
    return [...node.children.keys()].sort();
};

/**
 * @param {string} path
 * @return {void}
 */
FileSystem.prototype.mkdir = function(path) {
    this.walk(path, true);
};

/**
 * @param {string} filePath
 * @param {string} content
 * @return {void}
 */
FileSystem.prototype.addContentToFile = function(filePath, content) {
    const node = this.walk(filePath, true);
    node.isFile = true;
    node.content += content;
};

/**
 * @param {string} filePath
 * @return {string}
 */
FileSystem.prototype.readContentFromFile = function(filePath) {
    return this.walk(filePath, false).content;
};

/**
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.ls(path)
 * obj.mkdir(path)
 * obj.addContentToFile(filePath,content)
 * var param_4 = obj.readContentFromFile(filePath)
 */
// @lc code=end

// TEST:
const fs1 = new FileSystem();
console.log(JSON.stringify(fs1.ls('/'))); // []
fs1.mkdir('/a/b/c');
fs1.addContentToFile('/a/b/c/d', 'hello');
console.log(JSON.stringify(fs1.ls('/a/b/c/d'))); // ["d"]
console.log(fs1.readContentFromFile('/a/b/c/d')); // "hello"

fs1.addContentToFile('/a/b/c/d', ' world'); // append
console.log(fs1.readContentFromFile('/a/b/c/d')); // "hello world"

const fs2 = new FileSystem();
fs2.mkdir('/z');
fs2.mkdir('/a');
fs2.addContentToFile('/m.txt', 'x');
console.log(JSON.stringify(fs2.ls('/'))); // ["a","m.txt","z"] (sorted)
console.log(JSON.stringify(fs2.ls('/a'))); // []
console.log(fs2.readContentFromFile('/m.txt')); // "x"
