/*
 * @lc app=leetcode id=1406 lang=javascript
 *
 * [1406] Stone Game III
 */

// @lc code=start
/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function(stoneValue) {
    const n = stoneValue.length;
    const dp = new Int32Array(n + 1); // dp[i] = max score diff from position i

    for (let i = n - 1; i >= 0; i--) {
        let sum = 0, best = -Infinity;
        for (let k = 0; k < 3 && i + k < n; k++) {
            sum += stoneValue[i + k];
            best = Math.max(best, sum - dp[i + k + 1]);
        }
        dp[i] = best;
    }

    return dp[0] > 0 ? 'Alice' : dp[0] < 0 ? 'Bob' : 'Tie';
};
// @lc code=end

// TEST:
console.log(stoneGameIII([1,2,3,7])); // Bob
console.log(stoneGameIII([1,2,3,-9])); // Alice
console.log(stoneGameIII([1,2,3,6])); // Tie
console.log(stoneGameIII([1])); // Alice
console.log(stoneGameIII([-1,-2,-3])); // Alice (takes -1, Bob takes -2+-3=-5, Alice wins)
