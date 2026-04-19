/*
 * @lc app=leetcode id=1745 lang=javascript
 *
 * [1745] Palindrome Partitioning IV
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkPartitioning = function(s) {
    const n = s.length;
    const isPal = new Array(n).fill(false).map(() => new Array(n).fill(false));

    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            if (s[i] === s[j] && (j - i < 2 || isPal[i + 1][j - 1])) {
                isPal[i][j] = true;
            }
        }
    }

    for (let i = 1; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (isPal[0][i - 1] && isPal[i][j - 1] && isPal[j][n - 1]) {
                return true;
            }
        }
    }
    return false;
};
// @lc code=end

// TEST:
console.log(checkPartitioning('abcbdd'));  // true
console.log(checkPartitioning('bcbddxy')); // false
console.log(checkPartitioning('aaa'));     // true
