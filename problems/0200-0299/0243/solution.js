/*
 * @lc app=leetcode.cn id=243 lang=javascript
 *
 * [243] 最短单词距离
 */

// @lc code=start
/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
    let i1 = -1, i2 = -1, best = Infinity;
    for (let i = 0; i < wordsDict.length; i++) {
        const w = wordsDict[i];
        if (w === word1) {
            i1 = i;
            if (i2 >= 0) best = Math.min(best, i1 - i2);
        } else if (w === word2) {
            i2 = i;
            if (i1 >= 0) best = Math.min(best, i2 - i1);
        }
    }
    return best;
};
// @lc code=end

// TEST:
console.log(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice")); // 3
console.log(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "makes", "coding")); // 1
console.log(shortestDistance(["a", "b", "a"], "a", "b")); // 1
console.log(shortestDistance(["a", "b"], "a", "b")); // 1
console.log(shortestDistance(["x", "y", "z", "y", "x"], "x", "y")); // 1
