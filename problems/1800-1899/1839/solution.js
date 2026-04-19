/*
 * @lc app=leetcode id=1839 lang=javascript
 *
 * [1839] Longest Substring Of All Vowels in Order
 */

// @lc code=start
/**
 * @param {string} word
 * @return {number}
 */
var longestBeautifulSubstring = function(word) {
    const n = word.length;
    let ans = 0;
    let len = 1, cnt = 1;
    for (let i = 1; i < n; i++) {
        if (word[i] >= word[i - 1]) {
            len++;
            if (word[i] !== word[i - 1]) cnt++;
        } else {
            if (cnt === 5) ans = Math.max(ans, len);
            len = 1;
            cnt = 1;
        }
    }
    if (cnt === 5) ans = Math.max(ans, len);
    return ans;
};
// @lc code=end

// TEST:
console.log(longestBeautifulSubstring("aeiaaioaaaaeiiiiouuuooaauuaeiu")); // 13
console.log(longestBeautifulSubstring("aeeeiiiioooauuuaeiou")); // 5
console.log(longestBeautifulSubstring("a")); // 0
console.log(longestBeautifulSubstring("aeiou")); // 5
