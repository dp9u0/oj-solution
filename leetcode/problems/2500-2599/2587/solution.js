/*
 * @lc app=leetcode id=2587 lang=javascript
 *
 * [2587] Rearrange Array to Maximize Prefix Score
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
  nums.sort((a, b) => b - a);
  let score = 0, sum = 0;
  for (const num of nums) {
    sum += num;
    if (sum > 0) score++;
    else break;
  }
  return score;
};
// @lc code=end

// TEST:
console.log(maxScore([2,-1,0,1,-3,3,-3])); // 6
console.log(maxScore([-2,-3,0])); // 0
