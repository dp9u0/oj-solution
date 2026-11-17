/*
 * @lc app=leetcode.cn id=340 lang=javascript
 *
 * [340] 至多包含 K 个不同字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    const count = new Map(); // char -> count within the window
    let left = 0, best = 0;
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        count.set(c, (count.get(c) || 0) + 1);
        // shrink until at most k distinct chars
        while (count.size > k) {
            const drop = s[left];
            const n = count.get(drop) - 1;
            if (n === 0) count.delete(drop);
            else count.set(drop, n);
            left++;
        }
        best = Math.max(best, i - left + 1);
    }
    return best;
};
// @lc code=end

// TEST:
console.log(lengthOfLongestSubstringKDistinct("eceba", 2)); // 3 ("ece")
console.log(lengthOfLongestSubstringKDistinct("aa", 1)); // 2
console.log(lengthOfLongestSubstringKDistinct("aa", 0)); // 0
console.log(lengthOfLongestSubstringKDistinct("abcabc", 3)); // 6
console.log(lengthOfLongestSubstringKDistinct("aba", 1)); // 1
console.log(lengthOfLongestSubstringKDistinct("", 2)); // 0
