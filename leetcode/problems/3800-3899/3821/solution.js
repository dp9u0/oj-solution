/*
 * @lc app=leetcode id=3821 lang=javascript
 *
 * [3821] Find Nth Smallest Integer With K One Bits
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var nthSmallest = function(n, k) {
  const C = Array.from({ length: 51 }, () => new Array(51).fill(0));
  for (let i = 0; i <= 50; i++) {
    C[i][0] = 1;
    for (let j = 1; j <= i; j++) C[i][j] = C[i - 1][j - 1] + C[i - 1][j];
  }

  const count = (x) => {
    const bx = BigInt(x);
    let ones = 0, total = 0;
    for (let i = 49; i >= 0; i--) {
      if ((bx >> BigInt(i)) & 1n) {
        const need = k - ones;
        if (need >= 0 && need <= i) total += C[i][need];
        ones++;
        if (ones > k) break;
      }
    }
    if (ones === k) total++;
    return total;
  };

  let lo = 1, hi = Number((1n << 50n) - 1n);
  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (count(mid) >= n) hi = mid;
    else lo = mid + 1;
  }
  return lo;
};
// @lc code=end

// TEST:
console.log(nthSmallest(4, 2) === 9);
console.log(nthSmallest(3, 1) === 4);
console.log(nthSmallest(1, 1) === 1);
console.log(nthSmallest(1, 5) === 31);
console.log(nthSmallest(10, 3) === 28);
