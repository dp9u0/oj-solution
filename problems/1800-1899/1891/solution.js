/*
 * @lc app=leetcode.cn id=1891 lang=javascript
 *
 * [1891] 割绳子
 */

// @lc code=start
/**
 * @param {number[]} ribbons
 * @param {number} k
 * @return {number}
 */
var maxLength = function(ribbons, k) {
    const pieces = (x) => {
        let c = 0;
        for (const r of ribbons) c += Math.floor(r / x);
        return c;
    };
    if (pieces(1) < k) return 0;
    let lo = 1, hi = Math.max(...ribbons);
    while (lo < hi) {
        const mid = (lo + hi + 1) >> 1;
        if (pieces(mid) >= k) lo = mid;
        else hi = mid - 1;
    }
    return lo;
};
// @lc code=end

// TEST:
console.log(maxLength([9,7,5], 3)); // 5
console.log(maxLength([7,5,9], 4)); // 4
console.log(maxLength([5,7,9], 22)); // 0
console.log(maxLength([4], 4)); // 1
console.log(maxLength([100000], 1)); // 100000
