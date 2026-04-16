/*
 * @lc app=leetcode id=1016 lang=javascript
 *
 * [1016] Binary String With Substrings Representing 1 To N
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
var queryString = function(s, n) {
    const seen = new Set();
    for (let i = 0; i < s.length; i++) {
        let val = 0;
        for (let j = i; j < s.length && j < i + 31; j++) {
            val = val * 2 + (s.charCodeAt(j) - 48);
            if (val >= 1 && val <= n) seen.add(val);
        }
    }
    return seen.size === n;
};
// @lc code=end

// TEST:
console.log(queryString("0110", 3)); // true
console.log(queryString("0110", 4)); // false
console.log(queryString("1", 1)); // true
console.log(queryString("0", 1)); // false
console.log(queryString("11111111111111111111111111111111", 1000000000)); // false (s length 32, can't cover 10^9 values)
