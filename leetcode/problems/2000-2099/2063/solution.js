/*
 * @lc app=leetcode id=2063 lang=javascript
 *
 * [2063] Vowels of All Substrings
 */

// @lc code=start
/**
 * @param {string} word
 * @return {number}
 */
var countVowels = function(word) {
    const n = word.length;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let total = 0;
    for (let i = 0; i < n; i++) {
        if (vowels.has(word[i])) {
            total += (i + 1) * (n - i);
        }
    }
    return total;
};
// @lc code=end

// TEST:
console.log(countVowels('aba'));    // 6
console.log(countVowels('abc'));    // 3
console.log(countVowels('ltcd'));   // 0
console.log(countVowels('a'));      // 1
console.log(countVowels('aeiou'));  // 35
