/*
 * @lc app=leetcode id=1482 lang=javascript
 *
 * [1482] Minimum Number of Days to Make m Bouquets
 */

// @lc code=start
/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    const n = bloomDay.length;
    if (m * k > n) return -1;

    let lo = Infinity, hi = 0;
    for (const d of bloomDay) {
        lo = Math.min(lo, d);
        hi = Math.max(hi, d);
    }

    const canMake = (day) => {
        let bouquets = 0;
        let adjacent = 0;
        for (const d of bloomDay) {
            if (d <= day) {
                adjacent++;
                if (adjacent === k) {
                    bouquets++;
                    adjacent = 0;
                }
            } else {
                adjacent = 0;
            }
        }
        return bouquets >= m;
    };

    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (canMake(mid)) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }
    return lo;
};
// @lc code=end

// TEST:
console.log(minDays([1,10,3,10,2], 3, 1)); // 3
console.log(minDays([1,10,3,10,2], 3, 2)); // -1
console.log(minDays([7,7,7,7,12,7,7], 2, 3)); // 12
