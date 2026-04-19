/*
 * @lc app=leetcode id=1456 lang=javascript
 *
 * [1456] Maximum Number of Vowels in a Substring of Given Length
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) count++;
    }
    let result = count;

    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i])) count++;
        if (vowels.has(s[i - k])) count--;
        result = Math.max(result, count);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(maxVowels("abciiidef", 3)); // 3
console.log(maxVowels("aeiou", 2)); // 2
console.log(maxVowels("leetcode", 3)); // 2
