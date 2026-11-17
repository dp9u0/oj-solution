/*
 * @lc app=leetcode.cn id=159 lang=javascript
 *
 * [159] 至多包含两个不同字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    const last = new Map(); // char -> last index within the window
    let left = 0, best = 0;
    for (let i = 0; i < s.length; i++) {
        last.set(s[i], i);
        if (last.size > 2) {
            // evict the char whose last occurrence is leftmost
            let minChar = null, minIdx = Infinity;
            for (const [c, idx] of last) {
                if (idx < minIdx) { minIdx = idx; minChar = c; }
            }
            last.delete(minChar);
            left = minIdx + 1;
        }
        best = Math.max(best, i - left + 1);
    }
    return best;
};
// @lc code=end

// TEST:
console.log(lengthOfLongestSubstringTwoDistinct("eceba")); // 3 ("ece")
console.log(lengthOfLongestSubstringTwoDistinct("ccaabbb")); // 5 ("aabbb")
console.log(lengthOfLongestSubstringTwoDistinct("a")); // 1
console.log(lengthOfLongestSubstringTwoDistinct("abcabcabc")); // 2
console.log(lengthOfLongestSubstringTwoDistinct("aaaa")); // 4
