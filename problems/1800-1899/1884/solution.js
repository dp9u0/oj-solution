/*
 * @lc app=leetcode id=1884 lang=javascript
 *
 * [1884] Egg Drop With 2 Eggs and N Floors
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var twoEggDrop = function(n) {
  // Find minimum m such that m*(m+1)/2 >= n
  let m = Math.ceil((Math.sqrt(8 * n + 1) - 1) / 2);
  // Adjust for floating point errors
  while (m * (m + 1) / 2 < n) m++;
  return m;
};
// @lc code=end

// TEST:
console.log(twoEggDrop(2)); // 2
console.log(twoEggDrop(100)); // 14
console.log(twoEggDrop(1)); // 1
console.log(twoEggDrop(3)); // 2 (1+2=3>=3)
console.log(twoEggDrop(1000)); // 45 (45*46/2=1035>=1000)
