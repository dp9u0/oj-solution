/*
 * @lc app=leetcode id=1304 lang=javascript
 *
 * [1304] Find N Unique Integers Sum up to Zero
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  const res = [];
  for (let i = 1; i < n; i++) res.push(i);
  res.push(-n * (n - 1) / 2);
  return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(sumZero(5))); // sum=0, 5 unique
console.log(JSON.stringify(sumZero(3))); // [1,2,-3]
console.log(JSON.stringify(sumZero(1))); // [0]
console.log(JSON.stringify(sumZero(4))); // [1,2,3,-6]
console.log(JSON.stringify(sumZero(2))); // [1,-1]
