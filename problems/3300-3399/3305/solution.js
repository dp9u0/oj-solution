/*
 * @lc app=leetcode id=3305 lang=javascript
 *
 * [3305] Count of Substrings Containing Every Vowel and K Consonants I
 */

// @lc code=start
/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function(word, k) {
    const n = word.length;
    const isVowel = (c) => 'aeiou'.includes(c);

    const countAtLeast = (K) => {
        let l = 0, consonants = 0, count = 0;
        const vc = { a: 0, e: 0, i: 0, o: 0, u: 0 };
        const allVowels = () => vc.a > 0 && vc.e > 0 && vc.i > 0 && vc.o > 0 && vc.u > 0;

        for (let r = 0; r < n; r++) {
            const c = word[r];
            if (isVowel(c)) vc[c]++;
            else consonants++;

            while (consonants >= K && allVowels()) {
                count += n - r;
                const lc = word[l];
                if (isVowel(lc)) vc[lc]--;
                else consonants--;
                l++;
            }
        }
        return count;
    };

    return countAtLeast(k) - countAtLeast(k + 1);
};
// @lc code=end

// TEST:
console.log(countOfSubstrings('aeioqq', 1) === 0);
console.log(countOfSubstrings('aeiou', 0) === 1);
console.log(countOfSubstrings('ieaouqqieaouqq', 1) === 3);
console.log(countOfSubstrings('aeiou', 1) === 0);
console.log(countOfSubstrings('iqeaouqi', 1) === 2);
