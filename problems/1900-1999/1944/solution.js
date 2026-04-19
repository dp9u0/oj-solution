/*
 * @lc app=leetcode id=1944 lang=javascript
 *
 * [1944] Number of Visible People in a Queue
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function(heights) {
  const n = heights.length;
  const answer = new Array(n).fill(0);
  const stack = [];

  for (let i = n - 1; i >= 0; i--) {
    let count = 0;
    while (stack.length > 0 && stack[stack.length - 1] < heights[i]) {
      stack.pop();
      count++;
    }
    if (stack.length > 0) count++;
    answer[i] = count;
    stack.push(heights[i]);
  }

  return answer;
};
// @lc code=end

// TEST:
console.log(canSeePersonsCount([10, 6, 8, 5, 11, 9])); // [3,1,2,1,1,0]
console.log(canSeePersonsCount([5, 1, 2, 3, 10])); // [4,1,1,1,0]
