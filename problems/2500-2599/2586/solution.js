/*
 * @lc app=leetcode id=2586 lang=javascript
 *
 * [2586] Count the Number of Vowel Strings in Range
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    const vowels = new Set('aeiou');
    let count = 0;
    for (let i = left; i <= right; i++) {
        const w = words[i];
        if (vowels.has(w[0]) && vowels.has(w[w.length - 1])) count++;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(vowelStrings(["are","amy","u"], 0, 2));                    // 2
console.log(vowelStrings(["hey","aeo","mu","ooo","artro"], 1, 4));     // 3
