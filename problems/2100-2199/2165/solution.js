/*
 * @lc app=leetcode id=2165 lang=javascript
 *
 * [2165] Smallest Value of the Rearranged Number
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var smallestNumber = function(num) {
    if (num === 0) return 0;
    if (num > 0) {
        const digits = String(num).split('').sort();
        let i = 0;
        while (digits[i] === '0') i++;
        [digits[0], digits[i]] = [digits[i], digits[0]];
        return Number(digits.join(''));
    }
    const digits = String(-num).split('').sort((a, b) => b - a);
    return -Number(digits.join(''));
};
// @lc code=end

// TEST:
console.log(smallestNumber(310));
console.log(smallestNumber(-7605));
console.log(smallestNumber(0));
console.log(smallestNumber(102));
