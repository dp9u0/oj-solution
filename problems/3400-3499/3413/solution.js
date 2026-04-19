/*
 * @lc app=leetcode id=3413 lang=javascript
 *
 * [3413] Maximum Coins From K Consecutive Bags
 */

// @lc code=start
/**
 * @param {number[][]} coins
 * @param {number} k
 * @return {number}
 */
var maximumCoins = function(coins, k) {
    coins.sort((a, b) => a[0] - b[0]);
    const n = coins.length;
    const li = coins.map(c => c[0]);
    const ri = coins.map(c => c[1]);
    const ci = coins.map(c => c[2]);

    // Prefix sums (BigInt for precision with large values)
    const prefix = [0n];
    for (let i = 0; i < n; i++) {
        prefix.push(prefix[i] + BigInt(ri[i] - li[i] + 1) * BigInt(ci[i]));
    }

    // Compute coins in window [s, e] using binary search + prefix sums
    const getCoins = (s, e) => {
        // First segment with ri >= s
        let lo = 0, hi = n;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (ri[mid] < s) lo = mid + 1; else hi = mid;
        }
        const L = lo;
        // Last segment with li <= e
        lo = 0; hi = n;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (li[mid] <= e) lo = mid + 1; else hi = mid;
        }
        const R = lo - 1;

        if (L > R) return 0n;
        let total = prefix[R + 1] - prefix[L];
        if (li[L] < s) total -= BigInt(s - li[L]) * BigInt(ci[L]);
        if (ri[R] > e) total -= BigInt(ri[R] - e) * BigInt(ci[R]);
        return total;
    };

    let ans = 0n;
    // Try window starting at each segment's li
    for (let i = 0; i < n; i++) {
        const s = li[i];
        const e = s + k - 1;
        const c = getCoins(s, e);
        if (c > ans) ans = c;
    }
    // Try window ending at each segment's ri
    for (let i = 0; i < n; i++) {
        const e = ri[i];
        const s = e - k + 1;
        const c = getCoins(s, e);
        if (c > ans) ans = c;
    }
    return Number(ans);
};
// @lc code=end

// TEST:
console.log(maximumCoins([[8,10,1],[1,3,2],[5,6,4]], 4));  // 10
console.log(maximumCoins([[1,10,3]], 2));                   // 6
console.log(maximumCoins([[1,5,10]], 3));                   // 30
console.log(maximumCoins([[1,3,1],[5,7,2]], 10));           // 9
console.log(maximumCoins([[1,1,100]], 1));                  // 100
