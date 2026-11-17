/*
 * @lc app=leetcode.cn id=244 lang=javascript
 *
 * [244] 最短单词距离 II
 */

// @lc code=start
/**
 * @param {string[]} wordsDict
 */
var WordDistance = function(wordsDict) {
    this.positions = new Map();
    wordsDict.forEach((w, i) => {
        if (!this.positions.has(w)) this.positions.set(w, []);
        this.positions.get(w).push(i);
    });
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
    const a = this.positions.get(word1);
    const b = this.positions.get(word2);
    let best = Infinity;
    let i = 0, j = 0;
    while (i < a.length && j < b.length) {
        best = Math.min(best, Math.abs(a[i] - b[j]));
        if (a[i] < b[j]) i++;
        else j++;
    }
    return best;
};

/** 
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */
// @lc code=end

// TEST:
const wd = new WordDistance(["practice", "makes", "perfect", "coding", "makes"]);
console.log(wd.shortest("coding", "practice")); // 3
console.log(wd.shortest("coding", "makes")); // 1
console.log(wd.shortest("practice", "perfect")); // 2
const wd2 = new WordDistance(["a", "b", "a", "b"]);
console.log(wd2.shortest("a", "b")); // 1
console.log(wd2.shortest("b", "a")); // 1 (symmetric)
