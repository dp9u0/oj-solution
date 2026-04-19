/*
 * @lc app=leetcode id=2830 lang=javascript
 *
 * [2830] Maximize the Profit as the Salesman
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} offers
 * @return {number}
 */
var maximizeTheProfit = function(n, offers) {
    offers.sort((a, b) => a[1] - b[1]);

    const m = offers.length;
    const dp = new Array(m + 1).fill(0);

    // Binary search: rightmost offer with end < start
    const bisect = (start) => {
        let lo = 0, hi = m - 1, res = -1;
        while (lo <= hi) {
            const mid = (lo + hi) >> 1;
            if (offers[mid][1] < start) {
                res = mid;
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        return res + 1;
    };

    for (let i = 0; i < m; i++) {
        const [start, end, gold] = offers[i];
        const j = bisect(start);
        dp[i + 1] = Math.max(dp[i], gold + dp[j]);
    }

    return dp[m];
};
// @lc code=end

// TEST:
console.log(maximizeTheProfit(5, [[0, 0, 1], [0, 2, 2], [1, 3, 2]])); // 3
console.log(maximizeTheProfit(5, [[0, 0, 1], [0, 2, 10], [1, 3, 2]])); // 10
console.log(maximizeTheProfit(4, [[0, 3, 5], [1, 2, 3]])); // 5
