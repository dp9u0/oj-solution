/*
 * @lc app=leetcode id=3775 lang=javascript
 *
 * [3775] Reverse Words With Same Vowel Count
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const countVowels = (word) => {
        let c = 0;
        for (const ch of word) if (vowels.has(ch)) c++;
        return c;
    };
    const words = s.split(' ');
    const target = countVowels(words[0]);
    for (let i = 1; i < words.length; i++) {
        if (countVowels(words[i]) === target) {
            words[i] = words[i].split('').reverse().join('');
        }
    }
    return words.join(' ');
};
// @lc code=end

// TEST:
console.log(reverseWords("cat and mice")); // "cat dna mice"
console.log(reverseWords("book is nice")); // "book is ecin"
console.log(reverseWords("banana healthy")); // "banana healthy"
console.log(reverseWords("a")); // "a"
