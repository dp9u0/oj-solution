/*
 * @lc app=leetcode id=1963 lang=javascript
 *
 * [1963] Minimum Number of Swaps to Make the String Balanced
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let balance = 0, minBalance = 0;
    for (const c of s) {
        balance += c === '[' ? 1 : -1;
        minBalance = Math.min(minBalance, balance);
    }
    return (-minBalance + 1) >> 1;
};
// @lc code=end

// TEST:
console.log(minSwaps("][]["));  // 1
console.log(minSwaps("]]][[[")); // 2
console.log(minSwaps("[]"));     // 0
