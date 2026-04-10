/*
 * @lc app=leetcode id=1048 lang=javascript
 *
 * [1048] Longest String Chain
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    words.sort((a, b) => a.length - b.length);
    const dp = new Map();
    let maxChain = 1;

    for (const word of words) {
        let best = 1;
        for (let i = 0; i < word.length; i++) {
            const prev = word.slice(0, i) + word.slice(i + 1);
            if (dp.has(prev)) {
                best = Math.max(best, dp.get(prev) + 1);
            }
        }
        dp.set(word, best);
        maxChain = Math.max(maxChain, best);
    }

    return maxChain;
};
// @lc code=end

// TEST:
console.log(longestStrChain(['a','b','ba','bca','bda','bdca']));
console.log(longestStrChain(['xbc','pcxbcf','xb','cxbc','pcxbc']));
console.log(longestStrChain(['abcd','dbqca']));
