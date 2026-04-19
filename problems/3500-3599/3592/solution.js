/*
 * @lc app=leetcode id=3592 lang=javascript
 *
 * [3592] Inverse Coin Change
 */

// @lc code=start
/**
 * @param {number[]} numWays
 * @return {number[]}
 */
var findCoins = function(numWays) {
    const n = numWays.length;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    const coins = [];

    for (let i = 1; i <= n; i++) {
        const expected = numWays[i - 1];
        if (expected === dp[i]) continue;
        if (expected < dp[i]) return []; // can't reduce ways
        // expected > dp[i]: must add coin i
        coins.push(i);
        for (let j = i; j <= n; j++) {
            dp[j] += dp[j - i];
        }
        if (dp[i] !== expected) return [];
    }

    return coins;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findCoins([0,1,0,2,0,3,0,4,0,5]))); // [2,4,6]
console.log(JSON.stringify(findCoins([1,2,2,3,4]))); // [1,2,5]
console.log(JSON.stringify(findCoins([1,2,3,4,15]))); // []
