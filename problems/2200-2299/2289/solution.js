/*
 * @lc app=leetcode id=2289 lang=javascript
 *
 * [2289] Steps to Make Array Non-decreasing
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var totalSteps = function(nums) {
  const stack = [];
  let ans = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    let steps = 0;
    while (stack.length > 0 && stack[stack.length - 1][0] < nums[i]) {
      steps = Math.max(steps + 1, stack.pop()[1]);
    }
    stack.push([nums[i], steps]);
    ans = Math.max(ans, steps);
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(totalSteps([5, 3, 4, 4, 7, 3, 6, 11, 8, 5, 11])); // 3
console.log(totalSteps([4, 5, 7, 7, 13])); // 0
console.log(totalSteps([10, 1, 2, 3, 4, 5, 6, 1, 2, 3])); // 6
console.log(totalSteps([5, 4, 3, 2, 1])); // 4
console.log(totalSteps([1])); // 0
