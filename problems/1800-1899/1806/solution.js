/*
 * @lc app=leetcode id=1806 lang=javascript
 *
 * [1806] Minimum Number of Operations to Reinitialize a Permutation
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var reinitializePermutation = function(n) {
  let pos = 1;
  let ops = 0;
  do {
    if (pos % 2 === 0) {
      pos = pos / 2;
    } else {
      pos = n / 2 + (pos - 1) / 2;
    }
    ops++;
  } while (pos !== 1);
  return ops;
};
// @lc code=end

// TEST:
console.log(reinitializePermutation(2)); // 1
console.log(reinitializePermutation(4)); // 2
console.log(reinitializePermutation(6)); // 4
console.log(reinitializePermutation(8)); // 3
