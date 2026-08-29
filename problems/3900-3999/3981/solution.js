/*
 * @lc app=leetcode id=3981 lang=javascript
 *
 * [3981] Count Distinct Ways to Form Target from Two Strings
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @param {string} target
 * @return {number}
 */
var interleaveCharacters = function(word1, word2, target) {
  const MOD = 1e9 + 7;
  const n1 = word1.length;
  const n2 = word2.length;
  const T = target.length;

  // dp[i][j] = ways matching target prefix, word1 used indices < i, word2 < j
  let dp = Array.from({ length: n1 + 1 }, () => Array(n2 + 1).fill(0));
  dp[0][0] = 1;
  for (const ch of target) {
    const c = ch.charCodeAt(0) - 97;
    const ndp = Array.from({ length: n1 + 1 }, () => Array(n2 + 1).fill(0));
    // take next char from word1: occurrence p (>= i), ndp[p+1][j] += sum dp[0..p][j]
    for (let j = 0; j <= n2; j++) {
      let pref = 0;
      for (let i = 0; i <= n1; i++) {
        pref = (pref + dp[i][j]) % MOD;
        if (i < n1 && word1.charCodeAt(i) - 97 === c) {
          ndp[i + 1][j] = (ndp[i + 1][j] + pref) % MOD;
        }
      }
    }
    // take next char from word2
    for (let i = 0; i <= n1; i++) {
      let pref = 0;
      for (let j = 0; j <= n2; j++) {
        pref = (pref + dp[i][j]) % MOD;
        if (j < n2 && word2.charCodeAt(j) - 97 === c) {
          ndp[i][j + 1] = (ndp[i][j + 1] + pref) % MOD;
        }
      }
    }
    dp = ndp;
  }
  let total = 0;
  for (const row of dp) {
    for (const v of row) total = (total + v) % MOD;
  }

  // ways using a single string only (classic subsequence count)
  const countSub = (w) => {
    const f = Array(T + 1).fill(0);
    f[0] = 1;
    for (let p = 0; p < w.length; p++) {
      for (let j = T - 1; j >= 0; j--) {
        if (w.charCodeAt(p) === target.charCodeAt(j)) {
          f[j + 1] = (f[j + 1] + f[j]) % MOD;
        }
      }
    }
    return f[T];
  };
  const only1 = countSub(word1);
  const only2 = countSub(word2);
  return ((total - only1 - only2) % MOD + MOD) % MOD;
};
// @lc code=end

// TEST:
console.log(interleaveCharacters('abc', 'bac', 'abc') === 5);
console.log(interleaveCharacters('cd', 'cd', 'ccd') === 4);
console.log(interleaveCharacters('xy', 'xy', 'xyxy') === 2);
console.log(interleaveCharacters('ab', 'cde', 'ace') === 1);
console.log(interleaveCharacters('a', 'b', 'a') === 0);
console.log(interleaveCharacters('a', 'a', 'aa') === 2);
console.log(interleaveCharacters('abc', 'def', 'abc') === 0);
console.log(interleaveCharacters('aa', 'aa', 'aaaa') === 6);
console.log(interleaveCharacters('bb', 'ca', 'ba') === 2);
