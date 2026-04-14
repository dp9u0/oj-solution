/*
 * @lc app=leetcode id=2472 lang=javascript
 *
 * [2472] Maximum Number of Non-overlapping Palindrome Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPalindromes = function(s, k) {
    const n = s.length;
    const isPal = (start, end) => {
        while (start < end) {
            if (s[start++] !== s[end--]) return false;
        }
        return true;
    };

    let count = 0, lastEnd = -1;
    for (let i = 0; i <= n - k; i++) {
        if (i <= lastEnd) continue;
        if (isPal(i, i + k - 1)) {
            count++;
            lastEnd = i + k - 1;
        } else if (i + k < n && isPal(i, i + k)) {
            count++;
            lastEnd = i + k;
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(maxPalindromes("abaccdbbd", 3));
console.log(maxPalindromes("adbcda", 2));
console.log(maxPalindromes("aaaa", 2));
