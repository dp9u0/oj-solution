/*
 * @lc app=leetcode id=1663 lang=javascript
 *
 * [1663] Smallest String With A Given Numeric Value
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
    const chars = [];
    for (let i = 0; i < n; i++) {
        const remaining = n - i - 1;
        const val = Math.max(1, k - 26 * remaining);
        chars.push(String.fromCharCode(96 + val));
        k -= val;
    }
    return chars.join('');
};
// @lc code=end

// TEST:
console.log(getSmallestString(3, 27)); // "aay"
console.log(getSmallestString(5, 73)); // "aaszz"
console.log(getSmallestString(1, 1)); // "a"
console.log(getSmallestString(1, 26)); // "z"
console.log(getSmallestString(3, 3)); // "aaa"
