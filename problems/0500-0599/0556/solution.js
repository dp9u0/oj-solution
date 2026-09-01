/*
 * @lc app=leetcode id=556 lang=javascript
 *
 * [556] Next Greater Element III
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
    const digits = String(n).split('').map(Number);
    const len = digits.length;

    // Step 1: find first decreasing position from right
    let i = len - 2;
    while (i >= 0 && digits[i] >= digits[i + 1]) i--;
    if (i < 0) return -1;

    // Step 2: find smallest digit > digits[i] from right
    let j = len - 1;
    while (digits[j] <= digits[i]) j--;

    // Step 3: swap
    [digits[i], digits[j]] = [digits[j], digits[i]];

    // Step 4: reverse suffix after i
    let lo = i + 1, hi = len - 1;
    while (lo < hi) {
        [digits[lo], digits[hi]] = [digits[hi], digits[lo]];
        lo++; hi--;
    }

    const result = parseInt(digits.join(''), 10);
    return result > 0x7FFFFFFF ? -1 : result;
};
// @lc code=end

// TEST:
console.log(nextGreaterElement(12)); // 21
console.log(nextGreaterElement(21)); // -1
console.log(nextGreaterElement(1234)); // 1243
console.log(nextGreaterElement(4321)); // -1
console.log(nextGreaterElement(230241)); // 230412
console.log(nextGreaterElement(2147483647)); // -1 (or check)