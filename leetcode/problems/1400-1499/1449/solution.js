/*
 * @lc app=leetcode id=1449 lang=javascript
 *
 * [1449] Form Largest Integer With Digits That Add up to Target
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */
var largestNumber = function(cost, target) {
    const dp = new Int32Array(target + 1).fill(-1);
    dp[0] = 0;

    for (let t = 1; t <= target; t++) {
        for (let d = 0; d < 9; d++) {
            if (cost[d] <= t && dp[t - cost[d]] >= 0) {
                dp[t] = Math.max(dp[t], dp[t - cost[d]] + 1);
            }
        }
    }

    if (dp[target] < 0) return "0";

    let result = "";
    let rem = target;
    const len = dp[target];

    for (let pos = 0; pos < len; pos++) {
        for (let d = 8; d >= 0; d--) {
            if (cost[d] <= rem && dp[rem - cost[d]] === len - pos - 1) {
                result += d + 1;
                rem -= cost[d];
                break;
            }
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(largestNumber([4, 3, 2, 5, 6, 7, 2, 5, 5], 9)); // "7772"
console.log(largestNumber([7, 6, 5, 5, 5, 6, 8, 7, 8], 12)); // "85"
console.log(largestNumber([2, 4, 6, 2, 4, 6, 4, 4, 4], 5)); // "0"
console.log(largestNumber([1, 1, 1, 1, 1, 1, 1, 1, 1], 3)); // "999"
console.log(largestNumber([2, 1, 1, 1, 1, 1, 1, 1, 1], 2)); // "2" (digit 2 costs 1, so "22" costs 2)
