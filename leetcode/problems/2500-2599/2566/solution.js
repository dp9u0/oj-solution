/*
 * @lc app=leetcode id=2566 lang=javascript
 *
 * [2566] Maximum Difference by Remapping a Digit
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function(num) {
    let s = String(num);
    // max: first non-9 digit -> 9
    let maxCh = [...s].find(c => c !== '9');
    let maxVal = maxCh ? parseInt(s.replaceAll(maxCh, '9'), 10) : num;
    // min: first digit -> 0
    let minVal = parseInt(s.replaceAll(s[0], '0'), 10);
    return maxVal - minVal;
};
// @lc code=end

// TEST:
console.log(minMaxDifference(11891)); // 99009
console.log(minMaxDifference(90)); // 99
console.log(minMaxDifference(999)); // 999
