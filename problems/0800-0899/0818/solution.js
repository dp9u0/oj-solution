/*
 * @lc app=leetcode id=818 lang=javascript
 *
 * [818] Race Car
 */

// @lc code=start
/**
 * @param {number} target
 * @return {number}
 */
var racecar = function(target) {
  const dp = new Array(target + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= target; i++) {
    for (let n = 1; (1 << n) - 1 < 2 * i; n++) {
      const pos = (1 << n) - 1;
      if (pos === i) {
        dp[i] = Math.min(dp[i], n);
      } else if (pos > i) {
        dp[i] = Math.min(dp[i], n + 1 + dp[pos - i]);
      } else {
        for (let j = 0; j < n; j++) {
          const back = (1 << j) - 1;
          dp[i] = Math.min(dp[i], n + 1 + j + 1 + dp[i - pos + back]);
        }
      }
    }
  }
  return dp[target];
};
// @lc code=end

// TEST:
console.log(racecar(3) === 2);
console.log(racecar(6) === 5);
console.log(racecar(1) === 1);
console.log(racecar(2) === 4);
console.log(racecar(4) === 5);
console.log(racecar(5) === 7);
console.log(racecar(8) === 6);
console.log(racecar(10000) >= 45);
