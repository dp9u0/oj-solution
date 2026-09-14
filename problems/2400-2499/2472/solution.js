/*
 * @lc app=leetcode.cn id=2472 lang=javascript
 *
 * [2472] 不重叠回文子字符串的最大数目
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPalindromes = function(s, k) {
    const n = s.length;
    const isPal = (l, r) => {
        while (l < r) {
            if (s[l] !== s[r]) return false;
            l++;
            r--;
        }
        return true;
    };
    // dp[i]: max count for prefix s[0..i-1]
    // Any palindrome of length >= k+2 can shrink by 2 chars and stay a valid
    // palindrome inside the same span, so only lengths k and k+1 matter.
    const dp = new Array(n + 1).fill(0);
    for (let i = k; i <= n; i++) {
        dp[i] = dp[i - 1];
        if (isPal(i - k, i - 1) && dp[i - k] + 1 > dp[i]) {
            dp[i] = dp[i - k] + 1;
        }
        if (i - k - 1 >= 0 && isPal(i - k - 1, i - 1) && dp[i - k - 1] + 1 > dp[i]) {
            dp[i] = dp[i - k - 1] + 1;
        }
    }
    return dp[n];
};
// @lc code=end

// TEST:
console.log(maxPalindromes("abaccdbbd", 3)); // Expected: 2
console.log(maxPalindromes("adbcda", 2)); // Expected: 0
console.log(maxPalindromes("a", 1)); // Expected: 1
console.log(maxPalindromes("abcabc", 1)); // Expected: 6 (every single char)
console.log(maxPalindromes("aaaa", 2)); // Expected: 2
console.log(maxPalindromes("abbaabba", 4)); // Expected: 2
console.log(maxPalindromes("abacaba", 3)); // Expected: 2
