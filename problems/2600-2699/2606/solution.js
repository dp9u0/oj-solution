/*
 * @lc app=leetcode id=2606 lang=javascript
 *
 * [2606] Find the Substring With Maximum Cost
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} chars
 * @param {number[]} vals
 * @return {number}
 */
var maximumCostSubstring = function(s, chars, vals) {
    const valMap = {};
    for (let i = 0; i < 26; i++) {
        valMap[String.fromCharCode(97 + i)] = i + 1;
    }
    for (let i = 0; i < chars.length; i++) {
        valMap[chars[i]] = vals[i];
    }

    let maxSum = 0, curSum = 0;
    for (const ch of s) {
        curSum = Math.max(0, curSum + valMap[ch]);
        maxSum = Math.max(maxSum, curSum);
    }
    return maxSum;
};
// @lc code=end

// TEST:
console.log(maximumCostSubstring('adaa', 'd', [-1000]));       // 2
console.log(maximumCostSubstring('abc', 'abc', [-1, -1, -1])); // 0
