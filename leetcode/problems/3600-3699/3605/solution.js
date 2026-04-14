/*
 * @lc app=leetcode id=3605 lang=javascript
 *
 * [3605] Minimum Stability Factor of Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} maxC
 * @return {number}
 */
var minStable = function(nums, maxC) {
  const n = nums.length;

  const gcd = (a, b) => {
    while (b) { [a, b] = [b, a % b]; }
    return a;
  };

  // Sparse table for range GCD queries
  const LOG = Math.floor(Math.log2(n)) + 1;
  const st = [nums.slice()];
  for (let j = 1; j < LOG; j++) {
    const half = 1 << (j - 1);
    st[j] = new Array(n);
    for (let i = 0; i + (1 << j) <= n; i++) {
      st[j][i] = gcd(st[j - 1][i], st[j - 1][i + half]);
    }
  }

  const rangeGCD = (l, r) => {
    const k = Math.floor(Math.log2(r - l + 1));
    return gcd(st[k][l], st[k][r - (1 << k) + 1]);
  };

  // Check: can we achieve stability factor <= mid with at most maxC changes?
  const check = (mid) => {
    const size = mid + 1;
    if (size > n) return true;
    let changes = 0;
    let i = 0;
    while (i <= n - size) {
      if (rangeGCD(i, i + mid) >= 2) {
        if (++changes > maxC) return false;
        i += size; // change rightmost pos, skip covered windows
      } else {
        i++;
      }
    }
    return true;
  };

  // Binary search for minimum stability factor
  let lo = 0, hi = n;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (check(mid)) hi = mid;
    else lo = mid + 1;
  }
  return lo;
};
// @lc code=end

// TEST:
console.log(minStable([3, 5, 10], 1)); // 1
console.log(minStable([2, 6, 8], 2)); // 1
console.log(minStable([2, 4, 9, 6], 1)); // 2
console.log(minStable([1, 1, 1], 0)); // 0
console.log(minStable([2], 0)); // 1
console.log(minStable([6, 10, 15], 0)); // 2
