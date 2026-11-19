/*
 * @lc app=leetcode.cn id=656 lang=javascript
 *
 * [656] 成本最小路径
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} maxJump
 * @return {number[]}
 */
var cheapestJump = function(coins, maxJump) {
    const n = coins.length;
    const dp = new Array(n).fill(Infinity); // min cost from i to the end
    const next = new Array(n).fill(-1);
    dp[n - 1] = coins[n - 1] === -1 ? Infinity : coins[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        if (coins[i] === -1) continue;
        let best = Infinity, bestJ = -1;
        for (let k = 1; k <= maxJump && i + k < n; k++) {
            const j = i + k;
            // strictly smaller only -> smallest j wins ties -> lexicographic path
            if (dp[j] < best) { best = dp[j]; bestJ = j; }
        }
        if (bestJ !== -1) {
            dp[i] = coins[i] + best;
            next[i] = bestJ;
        }
    }
    if (dp[0] === Infinity) return [];
    const path = [];
    for (let i = 0; i !== -1; i = next[i]) path.push(i + 1);
    return path;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(cheapestJump([1, 2, 4, -1, 2], 2))); // [1,3,5]
console.log(JSON.stringify(cheapestJump([1, 2, 4, -1, 2], 1))); // []
console.log(JSON.stringify(cheapestJump([1, 2, 2, 4], 3))); // [1,4] (direct jump cost 5 beats detour)
console.log(JSON.stringify(cheapestJump([1, 1, 1, 1], 2))); // [1,2,4] (tie cost 3, smaller index first)
console.log(JSON.stringify(cheapestJump([5], 1))); // [1]
