/*
 * @lc app=leetcode id=2785 lang=javascript
 *
 * [2785] Sort Vowels in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const isVowel = (ch) => 'aeiouAEIOU'.includes(ch);

    const vowels = [...s].filter(isVowel).sort();
    let idx = 0;

    return [...s].map(ch => isVowel(ch) ? vowels[idx++] : ch).join('');
};
// @lc code=end

// TEST:
console.log(sortVowels("lEetcOde")); // "lEOtcede"
console.log(sortVowels("lYmpH")); // "lYmpH"
