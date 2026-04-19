/*
 * @lc app=leetcode id=2080 lang=javascript
 *
 * [2080] Range Frequency Queries
 */

// @lc code=start
/**
 * @param {number[]} arr
 */
var RangeFreqQuery = function(arr) {
  this.pos = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!this.pos.has(arr[i])) this.pos.set(arr[i], []);
    this.pos.get(arr[i]).push(i);
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @param {number} value
 * @return {number}
 */
RangeFreqQuery.prototype.query = function(left, right, value) {
  const idx = this.pos.get(value);
  if (!idx) return 0;

  // lower_bound: first position >= left
  let lo = 0, hi = idx.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (idx[mid] < left) lo = mid + 1;
    else hi = mid;
  }
  const start = lo;

  // upper_bound: first position > right
  hi = idx.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (idx[mid] <= right) lo = mid + 1;
    else hi = mid;
  }

  return lo - start;
};

/**
 * Your RangeFreqQuery object will be instantiated and called as such:
 * var obj = new RangeFreqQuery(arr)
 * var param_1 = obj.query(left,right,value)
 */
// @lc code=end

// TEST:
const rfq = new RangeFreqQuery([12,33,4,56,22,2,34,33,22,12,34,56]);
console.log(rfq.query(1, 2, 4));    // 1
console.log(rfq.query(0, 11, 33));  // 2
console.log(rfq.query(0, 11, 12));  // 2
console.log(rfq.query(0, 0, 12));   // 1
console.log(rfq.query(0, 11, 99));  // 0
console.log(rfq.query(5, 5, 2));    // 1
console.log(rfq.query(5, 5, 33));   // 0
