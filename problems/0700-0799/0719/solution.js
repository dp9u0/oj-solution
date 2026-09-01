/*
 * @lc app=leetcode id=719 lang=javascript
 *
 * [719] Find K-th Smallest Pair Distance
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
  nums.sort((a, b) => a - b);
  const n = nums.length;

  const countPairs = (threshold) => {
    let count = 0;
    let left = 0;
    for (let right = 0; right < n; right++) {
      while (nums[right] - nums[left] > threshold) {
        left++;
      }
      count += right - left;
    }
    return count;
  };

  let lo = 0, hi = nums[n - 1] - nums[0];
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (countPairs(mid) >= k) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  return lo;
};
// @lc code=end

// TEST:
console.log(smallestDistancePair([1, 3, 1], 1)); // 0
console.log(smallestDistancePair([1, 1, 1], 2)); // 0
console.log(smallestDistancePair([1, 6, 1], 3)); // 5
