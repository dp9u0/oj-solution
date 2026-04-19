/*
 * @lc app=leetcode id=3233 lang=javascript
 *
 * [3233] Find the Count of Numbers Which Are Not Special
 */

// @lc code=start
/**
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var nonSpecialCount = function(l, r) {
  const limit = Math.floor(Math.sqrt(r));
  const isPrime = new Array(limit + 1).fill(true);
  isPrime[0] = isPrime[1] = false;
  for (let i = 2; i * i <= limit; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= limit; j += i) {
        isPrime[j] = false;
      }
    }
  }
  let special = 0;
  for (let i = 2; i <= limit; i++) {
    if (isPrime[i]) {
      const sq = i * i;
      if (sq >= l && sq <= r) special++;
    }
  }
  return r - l + 1 - special;
};
// @lc code=end

// TEST:
console.log(nonSpecialCount(5, 7)); // 3
console.log(nonSpecialCount(4, 16)); // 11
console.log(nonSpecialCount(1, 4)); // 3 (only 4=2^2 is special)
