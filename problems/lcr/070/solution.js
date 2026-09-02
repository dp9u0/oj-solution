/*
 * @lc app=leetcode.cn id=LCR 070 lang=javascript
 *
 * [LCR 070] 有序数组中的单一元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let lo = 0;
  let hi = nums.length - 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (nums[mid] === nums[mid ^ 1]) lo = mid + 1;
    else hi = mid;
  }
  return nums[lo];
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]), 2);
assert.strictEqual(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]), 10);
assert.strictEqual(singleNonDuplicate([1]), 1);
assert.strictEqual(singleNonDuplicate([1, 1, 2]), 2);
assert.strictEqual(singleNonDuplicate([2, 3, 3]), 2);
assert.strictEqual(singleNonDuplicate([0, 0, 1, 1, 2, 2, 5, 6, 6]), 5);
assert.strictEqual(singleNonDuplicate([5, 5, 7, 7, 8]), 8);

console.log('All tests passed!');
console.log('singleNonDuplicate([1,1,2,3,3,4,4,8,8]) =', singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
