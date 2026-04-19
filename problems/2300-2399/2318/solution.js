/*
 * @lc app=leetcode id=2318 lang=javascript
 *
 * [2318] Number of Distinct Roll Sequences
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var distinctSequences = function(n) {
  const MOD = 1e9 + 7;

  if (n === 1) return 6;

  // Precompute gcd pairs: coprime[a][b] = true if gcd(a,b) == 1
  const coprime = Array.from({ length: 7 }, () => new Uint8Array(7));
  for (let a = 1; a <= 6; a++) {
    for (let b = 1; b <= 6; b++) {
      coprime[a][b] = gcd(a, b) === 1 ? 1 : 0;
    }
  }

  // dp[prev][prevPrev] = number of valid sequences ending with ..., prevPrev, prev
  // prevPrev = 0 means no previous value (first position)
  let dp = Array.from({ length: 7 }, () => new Float64Array(7));

  // Initialize: first roll
  for (let j = 1; j <= 6; j++) {
    dp[j][0] = 1;
  }

  for (let i = 2; i <= n; i++) {
    const next = Array.from({ length: 7 }, () => new Float64Array(7));
    for (let prev = 1; prev <= 6; prev++) {
      for (let prevPrev = 0; prevPrev <= 6; prevPrev++) {
        if (dp[prev][prevPrev] === 0) continue;
        for (let cur = 1; cur <= 6; cur++) {
          // Adjacent must be coprime (also handles cur !== prev for most cases)
          if (!coprime[cur][prev]) continue;
          // cur must differ from prev (gap rule: same values need abs > 2)
          if (cur === prev) continue;
          // cur must differ from prevPrev (gap >= 2)
          if (cur === prevPrev) continue;
          next[cur][prev] = (next[cur][prev] + dp[prev][prevPrev]) % MOD;
        }
      }
    }
    dp = next;
  }

  let ans = 0;
  for (let prev = 1; prev <= 6; prev++) {
    for (let prevPrev = 0; prevPrev <= 6; prevPrev++) {
      ans = (ans + dp[prev][prevPrev]) % MOD;
    }
  }
  return ans;
};

function gcd(a, b) {
  while (b) { [a, b] = [b, a % b]; }
  return a;
}
// @lc code=end

// TEST:
console.log(distinctSequences(4)); // 184
console.log(distinctSequences(2)); // 22
console.log(distinctSequences(1)); // 6
console.log(distinctSequences(3)); // need to verify
