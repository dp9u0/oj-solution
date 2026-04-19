/*
 * @lc app=leetcode id=3352 lang=javascript
 *
 * [3352] Count K-Reducible Numbers Less Than N
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKReducibleNumbers = function(s, k) {
  const MOD = 1e9 + 7;
  const n = s.length;

  // Step 1: Find which popcount values are k-reducible
  const isKReducible = new Set();
  for (let c = 1; c <= n; c++) {
    let steps = 0;
    let val = c;
    while (val !== 1) {
      val = popcount(val);
      steps++;
    }
    if (steps < k) isKReducible.add(c);
  }

  // Step 2: Digit DP - count numbers < s with popcount in isKReducible
  // dp[tight][cnt] = number of ways
  let dp = Array.from({ length: n + 1 }, () => new Array(2).fill(0));
  // Start: before processing any digit, tight=1, cnt=0 → 1 way
  // We'll use 2D: dp[tight][cnt] but cnt dimension is up to n
  // Actually let's use Map or 2D array

  // dp[tight][cnt] = number of ways
  let prev = Array.from({ length: 2 }, () => new Float64Array(n + 1));
  prev[1][0] = 1;

  for (let i = 0; i < n; i++) {
    const cur = Array.from({ length: 2 }, () => new Float64Array(n + 1));
    const digit = parseInt(s[i]);

    for (let tight = 0; tight <= 1; tight++) {
      for (let cnt = 0; cnt <= i; cnt++) {
        const ways = prev[tight][cnt];
        if (ways === 0) continue;

        const maxDigit = tight ? digit : 1;
        for (let d = 0; d <= maxDigit; d++) {
          const newTight = tight && d === digit ? 1 : 0;
          const newCnt = cnt + d;
          cur[newTight][newCnt] = (cur[newTight][newCnt] + ways) % MOD;
        }
      }
    }
    prev = cur;
  }

  // Sum up numbers < n (tight=0 only) with popcount in isKReducible (excluding 0)
  let result = 0;
  for (let cnt = 1; cnt <= n; cnt++) {
    if (isKReducible.has(cnt)) {
      result = (result + prev[0][cnt]) % MOD;
    }
  }

  return result;
};

function popcount(x) {
  let count = 0;
  while (x) {
    count += x & 1;
    x >>= 1;
  }
  return count;
}
// @lc code=end

// TEST:
console.log(countKReducibleNumbers("111", 1)); // 3
console.log(countKReducibleNumbers("1000", 2)); // 6
console.log(countKReducibleNumbers("1", 3)); // 0
