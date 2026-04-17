/*
 * @lc app=leetcode id=1754 lang=javascript
 *
 * [1754] Largest Merge Of Two Strings
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var largestMerge = function(word1, word2) {
    let i = 0, j = 0;
    const res = [];
    while (i < word1.length || j < word2.length) {
        if (j === word2.length || (i < word1.length && word1.slice(i) >= word2.slice(j))) {
            res.push(word1[i++]);
        } else {
            res.push(word2[j++]);
        }
    }
    return res.join('');
};
// @lc code=end

// TEST:
console.log(largestMerge('cabaa', 'bcaaa'));       // 'cbcabaaaaa'
console.log(largestMerge('abcabc', 'abdcaba'));     // 'abdcabcabcaba'
console.log(largestMerge('a', 'b'));                // 'ba'
console.log(largestMerge('aaa', 'aa'));             // 'aaaaa'
console.log(largestMerge('abc', 'abd'));            // 'abdabc'
