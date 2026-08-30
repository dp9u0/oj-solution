/*
 * @lc app=leetcode id=4006 lang=javascript
 *
 * [4006] Count Valid Prefixes
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countValidPrefixes = function(s) {
    let count0 = 0;
    let count1 = 0;
    let result = 0;
    for (const ch of s) {
        if (ch === '0') {
            count0++;
        } else {
            count1++;
        }
        if (Math.abs(count0 - count1) <= 1) {
            result++;
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(countValidPrefixes('00101')); // 3
console.log(countValidPrefixes('101'));   // 3
console.log(countValidPrefixes('0'));     // 1
console.log(countValidPrefixes('00'));    // 1 ("0" valid, "00" diff=2 invalid)
console.log(countValidPrefixes('0000'));  // 1
console.log(countValidPrefixes('010101')); // 6 (all prefixes alternating)
console.log(countValidPrefixes('111000')); // 3 ("1", "11100", "111000" valid)
