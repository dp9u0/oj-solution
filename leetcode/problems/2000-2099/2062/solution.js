/*
 * @lc app=leetcode id=2062 lang=javascript
 *
 * [2062] Count Vowel Substrings of a String
 */

// @lc code=start
/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const n = word.length;
    let result = 0;

    for (let i = 0; i < n; i++) {
        const seen = new Set();
        for (let j = i; j < n; j++) {
            if (!vowels.has(word[j])) break;
            seen.add(word[j]);
            if (seen.size === 5) result++;
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(countVowelSubstrings('aeiouu'));       // 2
console.log(countVowelSubstrings('unicornarihan')); // 0
console.log(countVowelSubstrings('cuaieuouac'));    // 7
console.log(countVowelSubstrings('aeiou'));         // 1
