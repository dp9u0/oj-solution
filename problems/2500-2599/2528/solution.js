/*
 * @lc app=leetcode id=2528 lang=javascript
 *
 * [2528] Maximize the Minimum Powered City
 */

// @lc code=start
/**
 * @param {number[]} stations
 * @param {number} r
 * @param {number} k
 * @return {number}
 */
var maxPower = function(stations, r, k) {
  const n = stations.length;
  const prefix = new Float64Array(n + 1);
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + stations[i];
  const power = new Float64Array(n);
  for (let i = 0; i < n; i++) {
    const lo = Math.max(0, i - r), hi = Math.min(n - 1, i + r);
    power[i] = prefix[hi + 1] - prefix[lo];
  }

  const check = (target) => {
    const diff = new Float64Array(n + 1);
    let add = 0, used = 0;
    for (let i = 0; i < n; i++) {
      add += diff[i];
      const cur = power[i] + add;
      if (cur < target) {
        const need = target - cur;
        used += need;
        if (used > k) return false;
        add += need;
        const end = Math.min(i + 2 * r + 1, n);
        diff[end] -= need;
      }
    }
    return used <= k;
  };

  let lo = 0, hi = prefix[n] + k;
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    if (check(mid)) lo = mid;
    else hi = mid - 1;
  }
  return lo;
};
// @lc code=end

// TEST:
console.log(maxPower([1,2,4,5,0], 1, 2) === 5);
console.log(maxPower([4,4,4,4], 0, 3) === 4);
console.log(maxPower([1,1,1,1], 2, 0) === 3);
console.log(maxPower([1], 0, 5) === 6);
console.log(maxPower([0,0,0,0,0], 1, 5) === 2);
console.log(maxPower([2,1,2], 1, 0) === 3);
