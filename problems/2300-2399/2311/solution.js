/*
 * @lc app=leetcode id=2311 lang=javascript
 *
 * [2311] Longest Binary Subsequence Less Than or Equal to K
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubsequence = function(s, k) {
    let val = 0;
    let bit = 0;
    let len = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '0') {
            len++;
            bit++;
        } else {
            // Try to include this '1' at position 'bit'
            if (bit < 31 && val + (1 << bit) <= k) {
                val += (1 << bit);
                len++;
                bit++;
            }
            // else skip this '1' (don't increment bit since we didn't take it)
        }
    }

    return len;
};
// @lc code=end

// TEST:
console.log(longestSubsequence("1001010", 5));     // 5
console.log(longestSubsequence("00101001", 1));    // 6
console.log(longestSubsequence("0", 1));            // 1
console.log(longestSubsequence("1", 1));            // 1
