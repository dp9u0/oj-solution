/*
 * @lc app=leetcode id=900 lang=javascript
 *
 * [900] RLE Iterator
 */

// @lc code=start
/**
 * @param {number[]} encoding
 */
var RLEIterator = function(encoding) {
  this.enc = encoding;
  this.idx = 0;
};

/**
 * @param {number} n
 * @return {number}
 */
RLEIterator.prototype.next = function(n) {
  while (this.idx < this.enc.length) {
    if (this.enc[this.idx] >= n) {
      this.enc[this.idx] -= n;
      return this.enc[this.idx + 1];
    }
    n -= this.enc[this.idx];
    this.idx += 2;
  }
  return -1;
};

/**
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = new RLEIterator(encoding)
 * var param_1 = obj.next(n)
 */
// @lc code=end

// TEST:
const obj = new RLEIterator([3,8,0,9,2,5]);
console.log(obj.next(2)); // 8
console.log(obj.next(1)); // 8
console.log(obj.next(1)); // 5
console.log(obj.next(2)); // -1
