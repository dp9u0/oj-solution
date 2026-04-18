/*
 * @lc app=leetcode id=3154 lang=javascript
 *
 * [3154] Find Number of Ways to Reach the K-th Stair
 */

// @lc code=start
/**
 * @param {number} k
 * @return {number}
 */
var waysToReachStair = function(k) {
    const comb = (n, r) => {
        if (r < 0 || r > n) return 0;
        if (r === 0 || r === n) return 1;
        r = Math.min(r, n - r);
        let result = 1;
        for (let i = 0; i < r; i++) {
            result = result * (n - i) / (i + 1);
        }
        return Math.round(result);
    };

    let ans = 0;
    for (let j = 0; j <= 31; j++) {
        const d = (1 << j) - k;
        if (d < 0) continue;
        if (d > j + 1) break;
        ans += comb(j + 1, d);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(waysToReachStair(0)); // 2
console.log(waysToReachStair(1)); // 4
console.log(waysToReachStair(2)); // 4
console.log(waysToReachStair(3)); // 3
console.log(waysToReachStair(1000000000)); // 0
