/*
 * @lc app=leetcode.cn id=4050 lang=javascript
 *
 * [4050] 得到恰好 N 分的最少天数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var minDays = function(n) {
    // 完全背包：长度 L 的连胜得 tri(L) 分，计费 L+1 天（含其后的跳过日），最后减 1
    const INF = Number.MAX_SAFE_INTEGER;
    const dp = new Array(n + 1).fill(INF);
    dp[0] = 0;
    for (let L = 1; L * (L + 1) / 2 <= n; L++) {
        const v = L * (L + 1) / 2;
        const cost = L + 1;
        for (let s = v; s <= n; s++) {
            if (dp[s - v] + cost < dp[s]) dp[s] = dp[s - v] + cost;
        }
    }
    return dp[n] - 1;
};
// @lc code=end

// TEST:
console.log(minDays(1)); // Expected: 1
console.log(minDays(2)); // Expected: 3
console.log(minDays(3)); // Expected: 2
console.log(minDays(6)); // Expected: 3
console.log(minDays(9)); // Expected: 6
console.log(minDays(12)); // Expected: 7
console.log(minDays(100000) > 0); // Expected: true (valid number)
