/*
 * @lc app=leetcode id=2100 lang=javascript
 *
 * [2100] Find Good Days to Rob the Bank
 */

// @lc code=start
/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function(security, time) {
  const n = security.length;
  const left = new Array(n).fill(0);
  const right = new Array(n).fill(0);

  for (let i = 1; i < n; i++) {
    if (security[i] <= security[i - 1]) {
      left[i] = left[i - 1] + 1;
    }
  }
  for (let i = n - 2; i >= 0; i--) {
    if (security[i] <= security[i + 1]) {
      right[i] = right[i + 1] + 1;
    }
  }

  const result = [];
  for (let i = 0; i < n; i++) {
    if (left[i] >= time && right[i] >= time) {
      result.push(i);
    }
  }
  return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(goodDaysToRobBank([5, 3, 3, 3, 5, 6, 2], 2))); // [2,3]
console.log(JSON.stringify(goodDaysToRobBank([1, 1, 1, 1, 1], 0))); // [0,1,2,3,4]
console.log(JSON.stringify(goodDaysToRobBank([1, 2, 3, 4, 5, 6], 2))); // []
