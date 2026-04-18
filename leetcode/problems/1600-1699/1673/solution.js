/*
 * @lc app=leetcode id=1673 lang=javascript
 *
 * [1673] Find the Most Competitive Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function(nums, k) {
  const stack = [];
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && stack[stack.length - 1] > nums[i] && stack.length + n - i > k) {
      stack.pop();
    }
    if (stack.length < k) stack.push(nums[i]);
  }
  return stack;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(mostCompetitive([3, 5, 2, 6], 2))); // [2,6]
console.log(JSON.stringify(mostCompetitive([2, 4, 3, 3, 5, 4, 9, 6], 4))); // [2,3,3,4]
console.log(JSON.stringify(mostCompetitive([1, 2, 3, 4, 5], 3))); // [1,2,3]
console.log(JSON.stringify(mostCompetitive([5, 4, 3, 2, 1], 3))); // [3,2,1]
console.log(JSON.stringify(mostCompetitive([2, 2, 2, 2], 2))); // [2,2]
