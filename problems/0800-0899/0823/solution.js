/*
 * @lc app=leetcode id=823 lang=javascript
 *
 * [823] Binary Trees With Factors
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function(arr) {
  const MOD = 1e9 + 7;
  arr.sort((a, b) => a - b);
  const dp = new Map();
  let total = 0;
  for (const v of arr) {
    let count = 1;
    for (const a of arr) {
      if (a >= v) break;
      if (v % a !== 0) continue;
      const b = v / a;
      if (dp.has(b)) {
        count = (count + dp.get(a) * dp.get(b)) % MOD;
      }
    }
    dp.set(v, count);
    total = (total + count) % MOD;
  }
  return total;
};
// @lc code=end

// TEST:
console.log(numFactoredBinaryTrees([2,4])); // 3
console.log(numFactoredBinaryTrees([2,4,5,10])); // 7
