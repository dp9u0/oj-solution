/*
 * @lc app=leetcode id=1404 lang=javascript
 *
 * [1404] Number of Steps to Reduce a Number in Binary Representation to One
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    let steps = 0;
    let carry = 0;
    for (let i = s.length - 1; i > 0; i--) {
        let bit = s.charCodeAt(i) - 48 + carry;
        if (bit === 0) {
            steps++; // divide by 2
        } else if (bit === 1) {
            steps += 2; // add 1 then divide by 2
            carry = 1;
        } else {
            steps++; // bit === 2, carry from prev, just divide by 2
        }
    }
    return steps + carry;
};
// @lc code=end

// TEST:
console.log(numSteps('1101')); // 6
console.log(numSteps('10')); // 1
console.log(numSteps('1')); // 0
