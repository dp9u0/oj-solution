/*
 * @lc app=leetcode id=995 lang=javascript
 *
 * [995] Minimum Number of K Consecutive Bit Flips
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function (nums, k) {
  const n = nums.length;
  let result = 0;
  let currentFlipCount = 0;

  for (let i = 0; i < n; i++) {
    // 滑窗左边界移出的翻转：减去 i-k 处发起的翻转
    if (i >= k && nums[i - k] >= 2) {
      currentFlipCount--;
    }

    // 当前值为 0：必须在此处发起翻转
    if ((nums[i] + currentFlipCount) % 2 === 0) {
      if (i + k > n) return -1;
      nums[i] += 2; // 原地标记：此处发起过翻转，% 2 仍为原值
      currentFlipCount++;
      result++;
    }
  }

  return result;
};
// @lc code=end

// TEST:
console.log(minKBitFlips([0, 1, 0], 1)); // 2
console.log(minKBitFlips([1, 1, 0], 2)); // -1
console.log(minKBitFlips([0, 0, 0, 1, 0, 1, 1, 0], 3)); // 3
console.log(minKBitFlips([0, 0, 0], 3)); // 1 (翻转整个数组)
console.log(minKBitFlips([1, 1, 1], 2)); // 0 (无需翻转)
console.log(minKBitFlips([0, 0, 0, 0], 2)); // 2
