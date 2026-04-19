/*
 * @lc app=leetcode id=3403 lang=javascript
 *
 * [3403] Find the Lexicographically Largest String From the Box I
 */

// @lc code=start
/**
 * @param {string} word
 * @param {number} numFriends
 * @return {string}
 */
var answerString = function(word, numFriends) {
    let n = word.length;
    if (numFriends === 1) return word;
    let maxLen = n - numFriends + 1;
    let best = '';
    for (let i = 0; i < n; i++) {
        let len = Math.min(maxLen, n - i);
        let sub = word.substring(i, i + len);
        if (sub > best) best = sub;
    }
    return best;
};
// @lc code=end

// TEST:
console.log(answerString('dbca', 2)); // 'dbc'
console.log(answerString('gggg', 4)); // 'g'
console.log(answerString('abc', 3)); // 'c'
