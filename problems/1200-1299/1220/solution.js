/*
 * @lc app=leetcode id=1220 lang=javascript
 *
 * [1220] Count Vowels Permutation
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
  const MOD = 1e9 + 7;
  let a = 1, e = 1, i = 1, o = 1, u = 1;

  for (let step = 1; step < n; step++) {
    const na = (e + i + u) % MOD;
    const ne = (a + i) % MOD;
    const ni = (e + o) % MOD;
    const no = i % MOD;
    const nu = (i + o) % MOD;
    a = na; e = ne; i = ni; o = no; u = nu;
  }

  return (a + e + i + o + u) % MOD;
};
// @lc code=end

// TEST:
console.log(countVowelPermutation(1)); // 5
console.log(countVowelPermutation(2)); // 10
console.log(countVowelPermutation(5)); // 68
