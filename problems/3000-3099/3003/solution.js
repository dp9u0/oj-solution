/*
 * @lc app=leetcode id=3003 lang=javascript
 *
 * [3003] Maximize the Number of Partitions After Operations
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPartitionsAfterOperations = function(s, k) {
  const n = s.length;
  if (k >= 26) return 1;

  const sArr = new Uint8Array(n);
  for (let i = 0; i < n; i++) sArr[i] = s.charCodeAt(i) - 97;

  const popcount = (x) => {
    let c = 0;
    while (x) { c++; x &= x - 1; }
    return c;
  };

  const memo = new Map();

  function dp(i, mask, changed) {
    if (i === n) return mask > 0 ? 1 : 0;

    const key = i * 134217728 + (mask << 1) + changed;
    if (memo.has(key)) return memo.get(key);

    const bit = 1 << sArr[i];
    const newMask = mask | bit;
    let result;

    if (popcount(newMask) <= k) {
      result = dp(i + 1, newMask, changed);
    } else {
      result = 1 + dp(i + 1, bit, changed);
    }

    if (!changed) {
      // Change to char already in mask (mask stays same)
      if (mask > 0) {
        result = Math.max(result, dp(i + 1, mask, 1));
      }

      // Change to char not in mask
      const notMask = (~mask) & 0x3FFFFFF;
      let temp = notMask;
      while (temp) {
        const cbit = temp & (-temp);
        const cmask = mask | cbit;
        if (popcount(cmask) <= k) {
          result = Math.max(result, dp(i + 1, cmask, 1));
        } else {
          result = Math.max(result, 1 + dp(i + 1, cbit, 1));
        }
        temp ^= cbit;
      }
    }

    memo.set(key, result);
    return result;
  }

  return dp(0, 0, 0);
};
// @lc code=end

// TEST:
console.log(maxPartitionsAfterOperations("accca", 2)); // 3
console.log(maxPartitionsAfterOperations("aabaab", 3)); // 1
console.log(maxPartitionsAfterOperations("xxyz", 1)); // 4
console.log(maxPartitionsAfterOperations("a", 1)); // 1
console.log(maxPartitionsAfterOperations("abcdef", 1)); // 6
