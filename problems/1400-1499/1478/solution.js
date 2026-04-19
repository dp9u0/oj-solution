/*
 * @lc app=leetcode id=1478 lang=javascript
 *
 * [1478] Allocate Mailboxes
 */

// @lc code=start
/**
 * @param {number[]} houses
 * @param {number} k
 * @return {number}
 */
var minDistance = function(houses, k) {
    houses.sort((a, b) => a - b);
    const n = houses.length;

    // cost[i][j]: min total distance for houses[i..j] with 1 mailbox at median
    const cost = Array.from({ length: n }, () => new Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            const mid = (i + j) >> 1;
            let sum = 0;
            for (let t = i; t <= j; t++) sum += Math.abs(houses[t] - houses[mid]);
            cost[i][j] = sum;
        }
    }

    // dp[i][j]: min distance for first i houses (0-indexed) using j mailboxes
    const dp = Array.from({ length: n }, () => new Array(k + 1).fill(Infinity));
    for (let i = 0; i < n; i++) dp[i][1] = cost[0][i];

    for (let j = 2; j <= k; j++) {
        for (let i = 0; i < n; i++) {
            for (let t = 0; t < i; t++) {
                dp[i][j] = Math.min(dp[i][j], dp[t][j - 1] + cost[t + 1][i]);
            }
        }
    }

    return dp[n - 1][k];
};
// @lc code=end

// TEST:
console.log(minDistance([1, 4, 8, 10, 20], 3)); // 5
console.log(minDistance([2, 3, 5, 12, 18], 2)); // 9
console.log(minDistance([1, 4], 2)); // 0
console.log(minDistance([7], 1)); // 0
console.log(minDistance([1, 4, 8, 10, 20], 5)); // 0
console.log(minDistance([5, 10, 15], 1)); // 10
