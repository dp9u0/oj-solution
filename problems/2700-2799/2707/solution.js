/*
 * @lc app=leetcode id=2707 lang=javascript
 *
 * [2707] Extra Characters in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {
    const dict = new Set(dictionary);
    const n = s.length;
    const dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i - 1] + 1;
        for (let j = 0; j < i; j++) {
            if (dict.has(s.substring(j, i))) {
                dp[i] = Math.min(dp[i], dp[j]);
            }
        }
    }
    return dp[n];
};
// @lc code=end

// TEST:
console.log(minExtraChar("leetscode", ["leet","code","leetcode"])); // 1
console.log(minExtraChar("sayhelloworld", ["hello","world"]));      // 3
console.log(minExtraChar("abcd", ["a","b","c","d"]));                // 0
