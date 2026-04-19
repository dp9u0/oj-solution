/*
 * @lc app=leetcode id=791 lang=javascript
 *
 * [791] Custom Sort String
 */

// @lc code=start
/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    const count = new Array(26).fill(0);
    for (const c of s) {
        count[c.charCodeAt(0) - 97]++;
    }

    let result = '';
    for (const c of order) {
        const idx = c.charCodeAt(0) - 97;
        result += c.repeat(count[idx]);
        count[idx] = 0;
    }

    for (let i = 0; i < 26; i++) {
        if (count[i] > 0) {
            result += String.fromCharCode(i + 97).repeat(count[i]);
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(customSortString("cba", "abcd")); // "cbad"
console.log(customSortString("bcafg", "abcd")); // "bcad"
console.log(customSortString("kqep", "pekeq")); // "kqeep"
