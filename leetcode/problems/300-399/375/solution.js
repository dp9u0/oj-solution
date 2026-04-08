/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
    // dp[i][j] represents the minimum money to guarantee a win for range [i, j]
    let dp = Array.from({ length: n + 2 }, () => new Array(n + 2).fill(0));
    
    // Iterate over the length of the range
    for (let len = 2; len <= n; len++) {
        // Iterate over the start point
        for (let i = 1; i <= n - len + 1; i++) {
            let j = i + len - 1;
            let minCost = Infinity;
            
            // Try every possible guess in the range [i, j]
            for (let k = i; k <= j; k++) {
                let cost = k + Math.max(dp[i][k - 1], dp[k + 1][j]);
                minCost = Math.min(minCost, cost);
            }
            
            dp[i][j] = minCost;
        }
    }
    
    return dp[1][n];
};

module.exports = getMoneyAmount;

// TEST:
console.log(getMoneyAmount(10)); // 16
console.log(getMoneyAmount(1)); // 0
console.log(getMoneyAmount(2)); // 1
