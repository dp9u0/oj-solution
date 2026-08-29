/*
 * @lc app=leetcode id=3971 lang=javascript
 *
 * [3971] Maximum Total Value
 */

// @lc code=start
/**
 * @param {number[]} value
 * @param {number[]} decay
 * @param {number} m
 * @return {number}
 */
var maxTotalValue = function(value, decay, m) {
  const MOD = 1000000007n;
  const n = value.length;
  const countGE = (x) => {
    let c = 0;
    for (let i = 0; i < n; i++) {
      if (value[i] >= x) c += Math.floor((value[i] - x) / decay[i]) + 1;
    }
    return c;
  };
  let lo = 1;
  let hi = 1000000000;
  if (countGE(1) > m) {
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (countGE(mid) <= m) hi = mid;
      else lo = mid + 1;
    }
  } else {
    lo = 1;
  }
  const T = lo;
  let total = 0n;
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (value[i] >= T) {
      const k = Math.floor((value[i] - T) / decay[i]) + 1;
      cnt += k;
      const kk = BigInt(k);
      total += kk * BigInt(value[i]) - BigInt(decay[i]) * kk * (kk - 1n) / 2n;
    }
  }
  if (T > 1) {
    total += BigInt(m - cnt) * BigInt(T - 1);
  }
  return Number(total % MOD);
};
// @lc code=end

// TEST:
console.log(maxTotalValue([6, 5, 4], [2, 1, 1], 4) === 19);
console.log(maxTotalValue([7, 2, 2], [3, 2, 1], 2) === 11);
console.log(maxTotalValue([4, 3], [5, 4], 5) === 7);
console.log(maxTotalValue([10], [1], 1) === 10);
console.log(maxTotalValue([10], [1], 3) === 27);
console.log(maxTotalValue([10], [1], 100) === 55);
console.log(maxTotalValue([5, 5], [10, 10], 3) === 10);
console.log(maxTotalValue([6, 5, 4], [2, 1, 1], 6) === 26);
