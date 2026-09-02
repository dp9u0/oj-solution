/*
 * @lc app=leetcode.cn id=LCR 010 lang=javascript
 *
 * [LCR 010] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  const count = new Map();
  count.set(0, 1);
  let pre = 0;
  let ans = 0;
  for (const num of nums) {
    pre += num;
    ans += count.get(pre - k) || 0;
    count.set(pre, (count.get(pre) || 0) + 1);
  }
  return ans;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(subarraySum([1, 1, 1], 2), 2);
assert.strictEqual(subarraySum([1, 2, 3], 3), 2);
// negative values
assert.strictEqual(subarraySum([1, -1, 0], 0), 3); // [1,-1],[0], [1,-1,0]
assert.strictEqual(subarraySum([-1, -1, 1], 0), 1); // [-1,1]
// whole array
assert.strictEqual(subarraySum([1, 2, 3], 6), 1);
// single matches
assert.strictEqual(subarraySum([1, 2, 3], 2), 1);
assert.strictEqual(subarraySum([0, 0, 0], 0), 6); // every subarray sums to 0: 3+2+1=6
// no match
assert.strictEqual(subarraySum([1, 1, 1], 5), 0);

console.log('All tests passed!');
console.log('subarraySum([1,1,1], 2) =', subarraySum([1, 1, 1], 2));
