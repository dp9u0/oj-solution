/*
 * @lc app=leetcode id=3271 lang=javascript
 *
 * [3271] Hash Divided String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var stringHash = function(s, k) {
    const n = s.length;
    let result = '';
    for (let i = 0; i < n; i += k) {
        let sum = 0;
        for (let j = i; j < i + k; j++) {
            sum += s.charCodeAt(j) - 97;
        }
        result += String.fromCharCode(sum % 26 + 97);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(stringHash("abcd", 2)); // "bf"
console.log(stringHash("mxz", 3)); // "i"
console.log(stringHash("abcdef", 3)); // "do"
