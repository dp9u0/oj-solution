/*
 * @lc app=leetcode id=3932 lang=javascript
 *
 * [3932] Count K-th Roots in a Range
 */

// @lc code=start
/**
 * @param {number} l
 * @param {number} r
 * @param {number} k
 * @return {number}
 */
var countKthRoots = function (l, r, k) {
  // g(n): [0, n] 内完全 k 次幂的个数（即满足 x^k <= n 的非负整数 x 的个数）
  const countUpTo = (n) => {
    if (n < 0) return 0;
    if (k === 1) return n + 1;
    let cnt = 0;
    for (let x = 0; ; x++) {
      let p = 1;
      let exceeded = false;
      for (let i = 0; i < k; i++) {
        p *= x;
        if (p > n) {
          exceeded = true;
          break;
        }
      }
      if (exceeded) break;
      cnt++;
    }
    return cnt;
  };

  return countUpTo(r) - countUpTo(l - 1);
};
// @lc code=end

// TEST:
console.log(countKthRoots(1, 9, 3)); // 2 (1=1^3, 8=2^3)
console.log(countKthRoots(8, 30, 2)); // 3 (9, 16, 25)
console.log(countKthRoots(0, 0, 5)); // 1 (0=0^5)
console.log(countKthRoots(0, 1000000000, 1)); // 1000000001 (k=1, 全部都是)
console.log(countKthRoots(0, 1000000000, 2)); // 31623 (0..31622 的平方, 31623^2 > 1e9)
console.log(countKthRoots(999999999, 1000000000, 2)); // 0 (31622^2=999950884 < l, 31623^2 > r)
console.log(countKthRoots(2, 3, 30)); // 0 (只有 0^30=0, 1^30=1)
console.log(countKthRoots(1, 1, 30)); // 1 (1=1^30)
