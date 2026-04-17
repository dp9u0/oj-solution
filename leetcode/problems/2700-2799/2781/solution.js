/*
 * @lc app=leetcode id=2781 lang=javascript
 *
 * [2781] Length of the Longest Valid Substring
 */

// @lc code=start
/**
 * @param {string} word
 * @param {string[]} forbidden
 * @return {number}
 */
var longestValidSubstring = function(word, forbidden) {
    const forbid = new Set(forbidden);
    const n = word.length;
    let left = 0, ans = 0;

    for (let right = 0; right < n; right++) {
        for (let len = 1; len <= Math.min(10, right - left + 1); len++) {
            if (forbid.has(word.substring(right - len + 1, right + 1))) {
                left = Math.max(left, right - len + 2);
            }
        }
        ans = Math.max(ans, right - left + 1);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(longestValidSubstring("cbaaaabc", ["aaa","cb"]));        // 4
console.log(longestValidSubstring("leetcode", ["de","le","e"]));     // 4
console.log(longestValidSubstring("abc", ["a","b","c"]));             // 0
console.log(longestValidSubstring("aaaaaa", ["aaa"]));                // 2
console.log(longestValidSubstring("bac", ["ab"]));                    // 3
