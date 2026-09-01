/*
 * @lc app=leetcode id=668 lang=javascript
 *
 * [668] Kth Smallest Number in Multiplication Table
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(m, n, k) {
  const count = (x) => {
    let c = 0;
    for (let i = 1; i <= m; i++) {
      c += Math.min(n, Math.floor(x / i));
    }
    return c;
  };
  let lo = 1;
  let hi = m * n;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (count(mid) >= k) hi = mid;
    else lo = mid + 1;
  }
  return lo;
};
// @lc code-end

// TEST:
console.log(findKthNumber(3, 3, 5) === 3);
console.log(findKthNumber(2, 3, 6) === 6);
console.log(findKthNumber(1, 1, 1) === 1);
console.log(findKthNumber(3, 3, 1) === 1);
console.log(findKthNumber(2, 2, 3) === 2);
console.log(findKthNumber(9, 9, 40) === 18);
console.log(findKthNumber(30000, 30000, 1) === 1);
console.log(findKthNumber(1, 30000, 15000) === 15000);
