/*
 * @lc app=leetcode id=3733 lang=javascript
 *
 * [3733] Minimum Time to Complete All Deliveries
 */

// @lc code=start
/**
 * @param {number[]} d
 * @param {number[]} r
 * @return {number}
 */
var minimumTime = function(d, r) {
  function gcd(a, b) { while (b) { const t = b; b = a % b; a = t; } return a; }
  const g = gcd(r[0], r[1]);
  const lcm = (r[0] / g) * r[1];
  const d0 = d[0], d1 = d[1], r0 = r[0], r1 = r[1];

  // Binary search for minimum T
  let lo = d0 + d1, hi = 2 * (d0 + d1);
  while (lo < hi) {
    const mid = lo + ((hi - lo) >> 1);
    const a0 = mid - ((mid / r0) | 0);
    const a1 = mid - ((mid / r1) | 0);
    const totalUsable = mid - ((mid / lcm) | 0);
    if (d0 <= a0 && d1 <= a1 && d0 + d1 <= totalUsable) hi = mid;
    else lo = mid + 1;
  }
  return lo;
};
// @lc code=end

// TEST:
console.log(minimumTime([3, 1], [2, 3])); // 5
console.log(minimumTime([1, 3], [2, 2])); // 7
console.log(minimumTime([2, 1], [3, 4])); // 3
console.log(minimumTime([1, 1], [2, 2])); // 3
console.log(minimumTime([1, 1], [3, 4])); // 2
