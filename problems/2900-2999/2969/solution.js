/*
 * @lc app=leetcode.cn id=2969 lang=javascript
 *
 * [2969] 购买水果需要的最少金币数 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var minimumCoins = function(prices) {
    const n = prices.length;
    // v[l] = dp[l-1] + prices[l], 1-indexed
    const v = new Array(n + 1);
    v[1] = prices[0];
    const dp = new Array(n + 1).fill(0);
    const deque = []; // indices with ascending v
    for (let i = 1; i <= n; i++) {
        if (i >= 2) v[i] = dp[i - 1] + prices[i - 1];
        // push index i
        while (deque.length && v[deque[deque.length - 1]] >= v[i]) deque.pop();
        deque.push(i);
        const lo = Math.ceil(i / 2);
        while (deque[0] < lo) deque.shift();
        dp[i] = v[deque[0]];
    }
    return dp[n];
};
// @lc code=end

// TEST:
console.log(minimumCoins([3,1,2])); // 4
console.log(minimumCoins([1,10,1,1])); // 2
console.log(minimumCoins([1])); // 1
console.log(minimumCoins([5,5,5,5,5,5])); // 10
console.log(minimumCoins([1000000,1,1,1,1,1,1])); // 1000002
