/*
 * @lc app=leetcode id=2526 lang=javascript
 *
 * [2526] Find Consecutive Integers from a Data Stream
 */

// @lc code=start
/**
 * @param {number} value
 * @param {number} k
 */
var DataStream = function(value, k) {
    this.value = value;
    this.k = k;
    this.count = 0;
};

/**
 * @param {number} num
 * @return {boolean}
 */
DataStream.prototype.consec = function(num) {
    if (num === this.value) {
        this.count++;
    } else {
        this.count = 0;
    }
    return this.count >= this.k;
};

/**
 * Your DataStream object will be instantiated and called as such:
 * var obj = new DataStream(value, k)
 * var param_1 = obj.consec(num)
 */
// @lc code=end

// TEST:
var ds = new DataStream(4, 3);
console.log(ds.consec(4));  // false
console.log(ds.consec(4));  // false
console.log(ds.consec(4));  // true
console.log(ds.consec(3));  // false
