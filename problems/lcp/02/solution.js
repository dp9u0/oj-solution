/*
 * @lc app=leetcode.cn id=LCP 02 lang=javascript
 *
 * [LCP 02] 分式化简
 */

// @lc code=start
/**
 * @param {number[]} cont
 * @return {number[]}
 */
var fraction = function(cont) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  let num = cont[cont.length - 1];
  let den = 1;
  for (let i = cont.length - 2; i >= 0; i--) {
    const newNum = cont[i] * num + den;
    const newDen = num;
    num = newNum;
    den = newDen;
  }
  const g = gcd(num, den);
  return [num / g, den / g];
};
// @lc code=end

// TEST:
// Example 1
console.log(JSON.stringify(fraction([3, 2, 0, 2])) === JSON.stringify([13, 4]));
// Example 2
console.log(JSON.stringify(fraction([0, 0, 3])) === JSON.stringify([3, 1]));
// Single element
console.log(JSON.stringify(fraction([5])) === JSON.stringify([5, 1]));
// [2, 1, 7]: 2 + 1/(1+1/7) = 2 + 1/(8/7) = 2 + 7/8 = 23/8
console.log(JSON.stringify(fraction([2, 1, 7])) === JSON.stringify([23, 8]));
// [0, 1]: 0 + 1/1 = 1
console.log(JSON.stringify(fraction([0, 1])) === JSON.stringify([1, 1]));
// [1, 0, 2]: 1 + 1/(0 + 1/2) = 1 + 1/(1/2) = 1 + 2 = 3 -> 3/1
console.log(JSON.stringify(fraction([1, 0, 2])) === JSON.stringify([3, 1]));
// [1, 2, 3, 4]: 1 + 1/(2 + 1/(3 + 1/4)) = 1 + 1/(2 + 1/(13/4)) = 1 + 1/(2 + 4/13) = 1 + 1/(30/13) = 1 + 13/30 = 43/30
console.log(JSON.stringify(fraction([1, 2, 3, 4])) === JSON.stringify([43, 30]));
