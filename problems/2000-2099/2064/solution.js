/*
 * @lc app=leetcode id=2064 lang=javascript
 *
 * [2064] Minimized Maximum of Products Distributed to Any Store
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function(n, quantities) {
    const canDistribute = (x) => {
        let stores = 0;
        for (const q of quantities) {
            stores += Math.ceil(q / x);
        }
        return stores <= n;
    };

    let lo = 1, hi = Math.max(...quantities);
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (canDistribute(mid)) hi = mid;
        else lo = mid + 1;
    }
    return lo;
};
// @lc code=end

// TEST:
console.log(minimizedMaximum(6, [11,6])); // 3
console.log(minimizedMaximum(7, [15,10,10])); // 5
console.log(minimizedMaximum(1, [100000])); // 100000
console.log(minimizedMaximum(2, [1,1])); // 1
console.log(minimizedMaximum(3, [5,5])); // 3
