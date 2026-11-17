/*
 * @lc app=leetcode.cn id=245 lang=javascript
 *
 * [245] 最短单词距离 III
 */

// @lc code=start
/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestWordDistance = function(wordsDict, word1, word2) {
    let i1 = -1, i2 = -1, best = Infinity;
    for (let i = 0; i < wordsDict.length; i++) {
        const w = wordsDict[i];
        if (w === word1) {
            if (word1 === word2) {
                // same word: consecutive occurrences pair with each other
                if (i1 >= 0) best = Math.min(best, i - i1);
                i1 = i;
            } else {
                i1 = i;
                if (i2 >= 0) best = Math.min(best, i1 - i2);
            }
        } else if (w === word2) {
            i2 = i;
            if (i1 >= 0) best = Math.min(best, i2 - i1);
        }
    }
    return best;
};
// @lc code=end

// TEST:
const d = ["practice", "makes", "perfect", "coding", "makes"];
console.log(shortestWordDistance(d, "makes", "coding")); // 1
console.log(shortestWordDistance(d, "makes", "makes")); // 3 (positions 1 and 4)
console.log(shortestWordDistance(["a", "b", "a"], "a", "a")); // 2
console.log(shortestWordDistance(["a", "b"], "a", "b")); // 1
console.log(shortestWordDistance(["x", "x"], "x", "x")); // 1
