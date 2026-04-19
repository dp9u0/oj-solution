/*
 * @lc app=leetcode id=3864 lang=javascript
 *
 * [3864] Minimum Cost to Partition a Binary String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} encCost
 * @param {number} flatCost
 * @return {number}
 */
var minCost = function(s, encCost, flatCost) {
    const n = s.length;
    const pre = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        pre[i + 1] = pre[i] + (s.charCodeAt(i) - 48);
    }

    // Possible segment sizes: n, n/2, n/4, ... until odd or 1
    const sizes = [];
    let sz = n;
    while (true) {
        sizes.push(sz);
        if (sz <= 1 || sz % 2 !== 0) break;
        sz >>= 1;
    }

    let prevDp = null;

    // Process from smallest size to largest
    for (let si = sizes.length - 1; si >= 0; si--) {
        const sz = sizes[si];
        const count = n / sz;
        const dp = new Array(count);

        for (let i = 0; i < count; i++) {
            const l = i * sz;
            const ones = pre[l + sz] - pre[l];
            let cost = ones === 0 ? flatCost : sz * ones * encCost;

            if (prevDp !== null) {
                const splitCost = prevDp[2 * i] + prevDp[2 * i + 1];
                if (splitCost < cost) cost = splitCost;
            }

            dp[i] = cost;
        }

        prevDp = dp;
    }

    return prevDp[0];
};
// @lc code=end

// TEST:
console.log(minCost("1010", 2, 1)); // 6
console.log(minCost("1010", 3, 10)); // 12
console.log(minCost("00", 1, 2)); // 2
console.log(minCost("1", 5, 3)); // 5
console.log(minCost("111", 2, 1)); // 6 (can't split odd length)
console.log(minCost("0000", 5, 3)); // 3 (all zeros, single segment)
