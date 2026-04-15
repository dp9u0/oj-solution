/*
 * @lc app=leetcode id=1859 lang=javascript
 *
 * [1859] Sorting the Sentence
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    return s.split(' ')
        .sort((a, b) => a[a.length - 1] - b[b.length - 1])
        .map(w => w.slice(0, -1))
        .join(' ');
};
// @lc code=end

// TEST:
console.log(sortSentence('is2 sentence4 This1 a3'));   // 'This is a sentence'
console.log(sortSentence('Myself2 Me1 I4 and3'));      // 'Me Myself and I'
