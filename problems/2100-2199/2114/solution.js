/*
 * @lc app=leetcode id=2114 lang=javascript
 *
 * [2114] Maximum Number of Words Found in Sentences
 */

// @lc code=start
/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxWords = 0;
    for (const s of sentences) {
        let spaces = 0;
        for (const c of s) {
            if (c === ' ') spaces++;
        }
        maxWords = Math.max(maxWords, spaces + 1);
    }
    return maxWords;
};
// @lc code=end

// TEST:
console.log(mostWordsFound(["alice and bob love leetcode","i think so too","this is great thanks very much"])); // 6
console.log(mostWordsFound(["please wait","continue to fight","continue to win"])); // 3
console.log(mostWordsFound(["hello"])); // 1
