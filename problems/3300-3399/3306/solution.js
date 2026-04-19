/*
 * @lc app=leetcode id=3306 lang=javascript
 *
 * [3306] Count of Substrings Containing Every Vowel and K Consonants II
 */

// @lc code=start
/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function(word, k) {
    const n = word.length;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    function countAtLeast(targetK) {
        let result = 0;
        let consonants = 0;
        const vowelCount = new Map();
        let distinctVowels = 0;
        let right = 0;

        for (let left = 0; left < n; left++) {
            while (right < n && (distinctVowels < 5 || consonants < targetK)) {
                const ch = word[right];
                if (vowels.has(ch)) {
                    const cnt = (vowelCount.get(ch) || 0) + 1;
                    vowelCount.set(ch, cnt);
                    if (cnt === 1) distinctVowels++;
                } else {
                    consonants++;
                }
                right++;
            }

            if (distinctVowels === 5 && consonants >= targetK) {
                result += n - right + 1;
            }

            const ch = word[left];
            if (vowels.has(ch)) {
                const cnt = vowelCount.get(ch) - 1;
                vowelCount.set(ch, cnt);
                if (cnt === 0) distinctVowels--;
            } else {
                consonants--;
            }
        }

        return result;
    }

    return countAtLeast(k) - countAtLeast(k + 1);
};
// @lc code=end

// TEST:
console.log(countOfSubstrings('aeioqq', 1));          // 0
console.log(countOfSubstrings('aeiou', 0));            // 1
console.log(countOfSubstrings('ieaouqqieaouqq', 1));   // 3
