/*
 * @lc app=leetcode id=2575 lang=javascript
 *
 * [2575] Find the Divisibility Array of a String
 */

// @lc code=start
/**
 * @param {string} word
 * @param {number} m
 * @return {number[]}
 */
var divisibilityArray = function(word, m) {
    const bigM = BigInt(m);
    let rem = 0n;
    const result = [];
    for (const ch of word) {
        rem = (rem * 10n + BigInt(ch)) % bigM;
        result.push(rem === 0n ? 1 : 0);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(divisibilityArray('998244353', 3)));  // [1,1,0,0,0,1,1,0,0]
console.log(JSON.stringify(divisibilityArray('1010', 10)));     // [0,1,0,1]
console.log(JSON.stringify(divisibilityArray('12', 3)));        // [0,1]
