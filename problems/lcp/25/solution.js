/*
 * @lc app=leetcode.cn id=LCP 25 lang=javascript
 *
 * [LCP 25] 古董键盘
 */

// @lc code=start
const MOD = 1000000007n;

/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var keyboard = function(k, n) {
  const maxN = n;
  // Pascal triangle C(i, j) mod MOD, i <= maxN
  const C = [];
  for (let i = 0; i <= maxN; i++) {
    C[i] = new Array(maxN + 1).fill(0n);
    C[i][0] = 1n;
    for (let j = 1; j <= i; j++) {
      C[i][j] = (C[i - 1][j - 1] + C[i - 1][j]) % MOD;
    }
  }

  // dp over letter groups. best[m][len] = #distinct strings of `len` positions
  // built from the first `m` letter types, each used at most k times.
  // Use rolling single dimension over letters, iterate letters 1..26.
  // dp[len] after processing current letter set.
  // To add a new letter type used exactly t times (0..min(k,len)):
  //   pick t of len positions (C[len][t]) to hold this letter, fill the rest
  //   with any string over the previous letters.
  // Start: 0 letters -> only empty string.
  let dp = new Array(maxN + 1).fill(0n);
  dp[0] = 1n;
  for (let letter = 1; letter <= 26; letter++) {
    const ndp = new Array(maxN + 1).fill(0n);
    for (let len = 0; len <= maxN; len++) {
      // letter used t times
      const tMax = Math.min(k, len);
      for (let t = 0; t <= tMax; t++) {
        const rest = len - t;
        ndp[len] = (ndp[len] + dp[rest] * C[len][t]) % MOD;
      }
    }
    dp = ndp;
  }
  return Number(dp[n]);
};
// @lc code=end

// TEST:
const assert = require('assert');

// brute force reference: enumerate all length-n strings over A letters,
// each letter used at most k times -> count distinct strings.
function brute(A, k, n) {
  let count = 0;
  const budget = new Array(A).fill(k);
  const rec = (pos, left) => {
    if (left === 0) { count++; return; }
    for (let c = 0; c < A; c++) {
      if (budget[c] > 0) {
        budget[c]--;
        rec(pos + 1, left - 1);
        budget[c]++;
      }
    }
  };
  rec(0, n);
  return count;
}

// same recurrence as keyboard but parameterized by #letters A, for cross-check
function dpFor(A, k, n) {
  const maxN = n;
  const C = [];
  for (let i = 0; i <= maxN; i++) {
    C[i] = new Array(maxN + 1).fill(0n);
    C[i][0] = 1n;
    for (let j = 1; j <= i; j++) C[i][j] = (C[i - 1][j - 1] + C[i - 1][j]) % MOD;
  }
  let dp = new Array(maxN + 1).fill(0n);
  dp[0] = 1n;
  for (let letter = 1; letter <= A; letter++) {
    const ndp = new Array(maxN + 1).fill(0n);
    for (let len = 0; len <= maxN; len++) {
      const tMax = Math.min(k, len);
      for (let t = 0; t <= tMax; t++) {
        ndp[len] = (ndp[len] + dp[len - t] * C[len][t]) % MOD;
      }
    }
    dp = ndp;
  }
  return Number(dp[n]);
}

// LeetCode examples
assert.strictEqual(keyboard(1, 1), 26);
assert.strictEqual(keyboard(1, 2), 650);

// hand checks: k=5 with n=5 -> every string allowed => 26^5
assert.strictEqual(keyboard(5, 5), Math.pow(26, 5) % 1000000007);
// k=1, n=3 -> P(26,3)
assert.strictEqual(keyboard(1, 3), 26 * 25 * 24);
// n = 1 always 26 regardless of k
assert.strictEqual(keyboard(3, 1), 26);

// exhaustive cross-check of the recurrence vs brute force on small alphabets
for (let A = 1; A <= 4; A++) {
  for (let k = 1; k <= 3; k++) {
    for (let n = 1; n <= Math.min(6, A * k); n++) {
      assert.strictEqual(dpFor(A, k, n), brute(A, k, n), `A=${A} k=${k} n=${n}`);
    }
  }
}

console.log('All tests passed!');
console.log('ex1 =', keyboard(1, 1));
console.log('ex2 =', keyboard(1, 2));
console.log('max k=5 n=130 =', keyboard(5, 130));
