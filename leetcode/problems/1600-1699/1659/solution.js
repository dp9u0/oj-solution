/*
 * @lc app=leetcode id=1659 lang=javascript
 *
 * [1659] Maximize Grid Happiness
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number} introvertsCount
 * @param {number} extrovertsCount
 * @return {number}
 */
var getMaxGridHappiness = function(m, n, introvertsCount, extrovertsCount) {
  const N = m * n;
  const p3 = [1];
  for (let i = 1; i <= n; i++) p3[i] = p3[i - 1] * 3;
  const P3N = p3[n];
  const baseH = [0, 120, 40];
  const effect = [0, -30, 20];

  const total = 25 * 7 * 7 * P3N;
  const memo = new Int32Array(total).fill(-1);

  const dp = (pos, intro, extro, profile) => {
    if (pos === N) return 0;
    const key = ((pos * 7 + intro) * 7 + extro) * P3N + profile;
    if (memo[key] !== -1) return memo[key];

    const c = pos % n;
    const up = Math.floor(profile / p3[c]) % 3;
    const left = c > 0 ? (Math.floor(profile / p3[c - 1]) % 3) : 0;
    const clear = profile - up * p3[c];

    let best = dp(pos + 1, intro, extro, clear);

    if (intro > 0) {
      const delta = baseH[1]
        + (up > 0 ? effect[1] + effect[up] : 0)
        + (left > 0 ? effect[1] + effect[left] : 0);
      best = Math.max(best, delta + dp(pos + 1, intro - 1, extro, clear + p3[c]));
    }

    if (extro > 0) {
      const delta = baseH[2]
        + (up > 0 ? effect[2] + effect[up] : 0)
        + (left > 0 ? effect[2] + effect[left] : 0);
      best = Math.max(best, delta + dp(pos + 1, intro, extro - 1, clear + 2 * p3[c]));
    }

    memo[key] = best;
    return best;
  };

  return dp(0, introvertsCount, extrovertsCount, 0);
};
// @lc code=end

// TEST:
console.log(getMaxGridHappiness(2, 3, 1, 2) === 240);
console.log(getMaxGridHappiness(3, 1, 2, 1) === 260);
console.log(getMaxGridHappiness(2, 2, 4, 0) === 240);
console.log(getMaxGridHappiness(1, 1, 1, 1) === 120);
console.log(getMaxGridHappiness(1, 2, 1, 1) === 150);
console.log(getMaxGridHappiness(5, 5, 6, 6) > 0);
