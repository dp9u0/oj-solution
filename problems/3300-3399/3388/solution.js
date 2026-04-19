/*
 * @lc app=leetcode id=3388 lang=javascript
 *
 * [3388] Count Beautiful Splits in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var beautifulSplits = function(nums) {
  const n = nums.length;
  const lcp = Array.from({ length: n + 1 }, () => new Uint16Array(n + 1));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      lcp[i][j] = nums[i] === nums[j] ? lcp[i + 1][j + 1] + 1 : 0;
    }
  }

  let count = 0;
  for (let i = 1; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const len1 = i;
      const len2 = j - i;
      if ((len1 <= len2 && lcp[0][i] >= len1) || (lcp[i][j] >= len2)) count++;
    }
  }
  return count;
};
// @lc code=end

// TEST:
console.log(beautifulSplits([1, 1, 2, 1])); // 2
console.log(beautifulSplits([1, 2, 3, 4])); // 0
console.log(beautifulSplits([1, 1, 1, 1])); // 3
console.log(beautifulSplits([0, 0, 0, 0])); // 3
console.log(beautifulSplits([1, 2, 1, 2, 1])); // 3
