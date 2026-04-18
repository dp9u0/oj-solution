/*
 * @lc app=leetcode id=2424 lang=javascript
 *
 * [2424] Longest Uploaded Prefix
 */

// @lc code=start
/**
 * @param {number} n
 */
var LUPrefix = function(n) {
    this.uploaded = new Set();
    this.prefixLen = 0;
};

/**
 * @param {number} video
 * @return {void}
 */
LUPrefix.prototype.upload = function(video) {
    this.uploaded.add(video);
    while (this.uploaded.has(this.prefixLen + 1)) {
        this.prefixLen++;
    }
};

/**
 * @return {number}
 */
LUPrefix.prototype.longest = function() {
    return this.prefixLen;
};

/**
 * Your LUPrefix object will be instantiated and called as such:
 * var obj = new LUPrefix(n)
 * obj.upload(video)
 * var param_2 = obj.longest()
 */
// @lc code=end

// TEST:
const server = new LUPrefix(4);
server.upload(3);
console.log(server.longest()); // 0
server.upload(1);
console.log(server.longest()); // 1
server.upload(2);
console.log(server.longest()); // 3

const s2 = new LUPrefix(5);
s2.upload(5);
console.log(s2.longest()); // 0
s2.upload(1);
console.log(s2.longest()); // 1
s2.upload(2);
console.log(s2.longest()); // 2
s2.upload(3);
console.log(s2.longest()); // 3
s2.upload(4);
console.log(s2.longest()); // 5
