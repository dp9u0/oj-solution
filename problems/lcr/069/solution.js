/*
 * @lc app=leetcode.cn id=LCR 069 lang=javascript
 *
 * [LCR 069] 山脉数组的峰顶索引
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
  let lo = 0;
  let hi = arr.length - 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (arr[mid] < arr[mid + 1]) lo = mid + 1;
    else hi = mid;
  }
  return lo;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(peakIndexInMountainArray([0, 1, 0]), 1);
assert.strictEqual(peakIndexInMountainArray([1, 3, 5, 4, 2]), 2);
assert.strictEqual(peakIndexInMountainArray([0, 10, 5, 2]), 1);
assert.strictEqual(peakIndexInMountainArray([3, 4, 5, 1]), 2);
assert.strictEqual(peakIndexInMountainArray([24, 69, 100, 99, 79, 78, 67, 36, 26, 19]), 2);
assert.strictEqual(peakIndexInMountainArray([1, 2, 3]), 2);
assert.strictEqual(peakIndexInMountainArray([3, 2, 1]), 0);

console.log('All tests passed!');
console.log('peakIndexInMountainArray([1,3,5,4,2]) =', peakIndexInMountainArray([1, 3, 5, 4, 2]));
