/*
 * @lc app=leetcode.cn id=2819 lang=javascript
 *
 * [2819] 购买巧克力后的最小相对损失
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number[][]} queries
 * @return {number[]}
 */
var minimumRelativeLosses = function(prices, queries) {
    const n = prices.length;
    const sorted = prices.slice().sort((a, b) => a - b);
    const pre = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) pre[i + 1] = pre[i] + sorted[i];
    const suf = new Array(n + 1).fill(0);
    for (let i = n - 1; i >= 0; i--) suf[n - i] = suf[n - i - 1] + sorted[i];
    const ans = [];
    for (const [k, m] of queries) {
        // c = count of prices <= k
        let lo = 0, hi = n;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (sorted[mid] <= k) lo = mid + 1;
            else hi = mid;
        }
        const c = lo;
        const xLo = Math.max(0, m - (n - c)), xHi = Math.min(m, c);
        // smallest x in [xLo, xHi] where marginal g(x) >= 0 (or x = xHi)
        let a = xLo, b = xHi;
        while (a < b) {
            const mid = (a + b) >> 1;
            if (mid === b || sorted[mid] + sorted[n - m + mid] - 2 * k >= 0) b = mid;
            else a = mid + 1;
        }
        const x = a;
        ans.push(pre[x] + 2 * k * (m - x) - suf[m - x]);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(minimumRelativeLosses([1,9,22,10,19], [[18,4],[5,2]]))); // [34,-21]
console.log(JSON.stringify(minimumRelativeLosses([1,5,4,3,7,11,9], [[5,4],[5,7],[7,3],[4,5]]))); // [4,16,7,1]
console.log(JSON.stringify(minimumRelativeLosses([5,6,7], [[10,1],[5,3],[3,3]]))); // [5,12,0]
console.log(JSON.stringify(minimumRelativeLosses([3], [[3,1]]))); // [3]
console.log(JSON.stringify(minimumRelativeLosses([1000000000,1000000000], [[1,2]]))); // [2]
