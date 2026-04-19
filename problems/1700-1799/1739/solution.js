/*
 * @lc app=leetcode id=1739 lang=javascript
 *
 * [1739] Building Boxes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var minimumBoxes = function(n) {
    if (n <= 0) return 0;

    // Total boxes with k complete layers: k(k+1)(k+2)/6
    // Find max k such that tetra(k) <= n
    let lo = 1, hi = Math.min(n, 2e6);
    while (lo < hi) {
        const mid = lo + ((hi - lo + 1) >> 1);
        const tetra = mid * (mid + 1) * (mid + 2) / 6;
        if (tetra <= n) lo = mid;
        else hi = mid - 1;
    }

    const k = lo;
    const base = k * (k + 1) / 2;
    let extra = n - k * (k + 1) * (k + 2) / 6;

    if (extra === 0) return base;

    // Find min m such that m(m+1)/2 >= extra
    let m = Math.ceil((Math.sqrt(1 + 8 * extra) - 1) / 2);
    return base + m;
};
// @lc code=end

// TEST:
console.log(minimumBoxes(3)); // 3
console.log(minimumBoxes(4)); // 3
console.log(minimumBoxes(10)); // 6
console.log(minimumBoxes(1)); // 1
console.log(minimumBoxes(15)); // 9
