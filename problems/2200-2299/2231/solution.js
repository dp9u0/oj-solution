/*
 * @lc app=leetcode id=2231 lang=javascript
 *
 * [2231] Largest Number After Digit Swaps by Parity
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function(num) {
    const digits = String(num).split('').map(Number);
    const odds = [], evens = [];
    for (const d of digits) {
        if (d % 2 === 0) evens.push(d);
        else odds.push(d);
    }
    odds.sort((a, b) => b - a);
    evens.sort((a, b) => b - a);

    let oi = 0, ei = 0;
    const result = digits.map(d => {
        if (d % 2 === 0) return evens[ei++];
        return odds[oi++];
    });

    return Number(result.join(''));
};
// @lc code=end

// TEST:
console.log(largestInteger(1234)); // 3412
console.log(largestInteger(65875)); // 87655
console.log(largestInteger(1)); // 1
console.log(largestInteger(247)); // 427
console.log(largestInteger(13579)); // 97531
