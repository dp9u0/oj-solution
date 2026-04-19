/*
 * @lc app=leetcode id=2412 lang=javascript
 *
 * [2412] Minimum Money Required Before Transactions
 */

// @lc code=start
/**
 * @param {number[][]} transactions
 * @return {number}
 */
var minimumMoney = function(transactions) {
    let totalLoss = 0;
    let maxCashbackOfLoss = 0;
    let maxCostOfGain = 0;

    for (const [cost, cashback] of transactions) {
        if (cost > cashback) {
            totalLoss += cost - cashback;
            maxCashbackOfLoss = Math.max(maxCashbackOfLoss, cashback);
        } else {
            maxCostOfGain = Math.max(maxCostOfGain, cost);
        }
    }

    return totalLoss + Math.max(maxCashbackOfLoss, maxCostOfGain);
};
// @lc code=end

// TEST:
console.log(minimumMoney([[2,1],[5,0],[4,2]]));      // 10
console.log(minimumMoney([[3,0],[0,3]]));             // 3
console.log(minimumMoney([[1,1]]));                    // 1
console.log(minimumMoney([[10,5],[5,10]]));            // 10
console.log(minimumMoney([[7,2],[0,10],[4,1]]));      // 10
console.log(minimumMoney([[5,0],[3,0],[2,1]]));       // 10
