/*
 * @lc app=leetcode id=2595 lang=javascript
 *
 * [2595] Number of Even and Odd Bits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function(n) {
    const popcount = (x) => x.toString(2).replace(/0/g, '').length;
    return [popcount(n & 0x5555), popcount(n & 0xAAAA)];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(evenOddBit(50))); // [1,2]
console.log(JSON.stringify(evenOddBit(2))); // [0,1]
