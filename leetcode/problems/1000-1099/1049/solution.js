/*
 * @lc app=leetcode id=1049 lang=javascript
 *
 * [1049] Last Stone Weight II
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
  const total = stones.reduce((a, b) => a + b, 0);
  const half = Math.floor(total / 2);

  let dp = 1n; // bitset: bit i means sum i is achievable
  for (const w of stones) {
    dp |= dp << BigInt(w);
  }

  for (let s = half; s >= 0; s--) {
    if ((dp >> BigInt(s)) & 1n) {
      return total - 2 * s;
    }
  }

  return total;
};
// @lc code=end

// TEST:
console.log(lastStoneWeightII([2, 7, 4, 1, 8, 1])); // 1
console.log(lastStoneWeightII([31, 26, 33, 21, 40])); // 5
console.log(lastStoneWeightII([21, 60, 61, 20, 31])); // 9
