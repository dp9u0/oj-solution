/*
 * @lc app=leetcode.cn id=1166 lang=javascript
 *
 * [1166] 设计文件系统
 */

// @lc code=start

var FileSystem = function() {
    this.paths = new Map(); // path -> value
};

/**
 * @param {string} path
 * @param {number} value
 * @return {boolean}
 */
FileSystem.prototype.createPath = function(path, value) {
    if (this.paths.has(path)) return false;
    const slash = path.lastIndexOf('/');
    const parent = path.slice(0, slash); // '' for top-level paths = existing root
    if (parent !== '' && !this.paths.has(parent)) return false;
    this.paths.set(path, value);
    return true;
};

/**
 * @param {string} path
 * @return {number}
 */
FileSystem.prototype.get = function(path) {
    return this.paths.has(path) ? this.paths.get(path) : -1;
};

/**
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.createPath(path,value)
 * var param_2 = obj.get(path)
 */
// @lc code=end

// TEST:
const fs = new FileSystem();
console.log(fs.createPath("/a", 1)); // true
console.log(fs.get("/a")); // 1
const fs2 = new FileSystem();
console.log(fs2.createPath("/leet", 1)); // true
console.log(fs2.createPath("/leet/code", 2)); // true
console.log(fs2.get("/leet/code")); // 2
console.log(fs2.createPath("/c/d", 1)); // false (parent /c missing)
console.log(fs2.get("/c")); // -1
console.log(fs2.createPath("/leet", 3)); // false (already exists)
console.log(fs2.createPath("/a/b/c", 4)); // false (grandparent chain broken)
