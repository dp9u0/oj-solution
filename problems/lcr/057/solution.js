/*
 * @lc app=leetcode.cn id=LCR 057 lang=javascript
 *
 * [LCR 057] 存在重复元素 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  const n = nums.length;
  if (n < 2) return false;
  const bucketSize = t + 1; // could exceed 2^31-1 in JS double but fine for division/map keys as numbers
  const map = new Map(); // bucket -> value

  const bucketOf = (x) => Math.floor(x / bucketSize);

  for (let i = 0; i < n; i++) {
    const b = bucketOf(nums[i]);
    if (map.has(b)) return true;
    if (map.has(b - 1) && Math.abs(nums[i] - map.get(b - 1)) <= t) return true;
    if (map.has(b + 1) && Math.abs(nums[i] - map.get(b + 1)) <= t) return true;
    map.set(b, nums[i]);
    if (i >= k) {
      map.delete(bucketOf(nums[i - k]));
    }
  }
  return false;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0), true);
assert.strictEqual(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2), true);
assert.strictEqual(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3), false);
assert.strictEqual(containsNearbyAlmostDuplicate([], 0, 0), false);
assert.strictEqual(containsNearbyAlmostDuplicate([1], 1, 1), false);
assert.strictEqual(containsNearbyAlmostDuplicate([1, 2], 1, 0), false);
assert.strictEqual(containsNearbyAlmostDuplicate([1, 1], 1, 0), true);
// negatives
assert.strictEqual(containsNearbyAlmostDuplicate([-1, -1], 1, 0), true);
assert.strictEqual(containsNearbyAlmostDuplicate([-1, 1], 1, 2), true);
assert.strictEqual(containsNearbyAlmostDuplicate([-1, 3], 1, 2), false);

console.log('All tests passed!');
console.log('containsNearbyAlmostDuplicate([1,2,3,1], 3, 0) =', containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0));
