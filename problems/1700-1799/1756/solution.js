/*
 * @lc app=leetcode.cn id=1756 lang=javascript
 *
 * [1756] 设计最近使用（MRU）队列
 */

// @lc code=start
/**
 * @param {number} n
 */
var MRUQueue = function(n) {
    this.arr = Array.from({ length: n }, (_, i) => i + 1);
};

/**
 * @param {number} k
 * @return {number}
 */
MRUQueue.prototype.fetch = function(k) {
    const val = this.arr[k - 1];
    this.arr.splice(k - 1, 1);
    this.arr.push(val);
    return val;
};

/**
 * Your MRUQueue object will be instantiated and called as such:
 * var obj = new MRUQueue(n)
 * var param_1 = obj.fetch(k)
 */
// @lc code=end

// TEST:
const q = new MRUQueue(8);
console.log(q.fetch(3)); // 3
console.log(q.fetch(5)); // 6
console.log(q.fetch(2)); // 2
console.log(q.fetch(8)); // 2
