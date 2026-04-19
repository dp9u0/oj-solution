/*
 * @lc app=leetcode id=2866 lang=javascript
 *
 * [2866] Beautiful Towers II
 */

// @lc code=start
/**
 * @param {number[]} maxHeights
 * @return {number}
 */
var maximumSumOfHeights = function(maxHeights) {
  const n = maxHeights.length;
  const prefix = new Array(n).fill(0);
  const suffix = new Array(n).fill(0);
  const stack = [];

  let sum = 0;
  for (let i = 0; i < n; i++) {
    let count = 1;
    while (stack.length > 0 && maxHeights[stack[stack.length - 1]] > maxHeights[i]) {
      const j = stack.pop();
      const h = maxHeights[j];
      const span = j - (stack.length > 0 ? stack[stack.length - 1] : -1);
      sum -= h * span;
      count += span;
    }
    sum += maxHeights[i] * count;
    prefix[i] = sum;
    stack.push(i);
  }

  stack.length = 0;
  sum = 0;
  for (let i = n - 1; i >= 0; i--) {
    let count = 1;
    while (stack.length > 0 && maxHeights[stack[stack.length - 1]] > maxHeights[i]) {
      const j = stack.pop();
      const h = maxHeights[j];
      const span = (stack.length > 0 ? stack[stack.length - 1] : n) - j;
      sum -= h * span;
      count += span;
    }
    sum += maxHeights[i] * count;
    suffix[i] = sum;
    stack.push(i);
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, prefix[i] + suffix[i] - maxHeights[i]);
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(maximumSumOfHeights([5,3,4,1,1])); // 13
console.log(maximumSumOfHeights([6,5,3,9,2,7])); // 22
console.log(maximumSumOfHeights([3,2,5,5,2,3])); // 18
console.log(maximumSumOfHeights([1])); // 1
console.log(maximumSumOfHeights([3,3,3])); // 9
