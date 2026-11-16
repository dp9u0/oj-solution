/*
 * @lc app=leetcode.cn id=734 lang=javascript
 *
 * [734] 句子相似性
 */

// @lc code=start
/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2, similarPairs) {
    if (sentence1.length !== sentence2.length) return false;

    const pairs = new Set();
    for (const [a, b] of similarPairs) {
        pairs.add(a + '|' + b);
        pairs.add(b + '|' + a);
    }
    for (let i = 0; i < sentence1.length; i++) {
        const a = sentence1[i], b = sentence2[i];
        if (a !== b && !pairs.has(a + '|' + b)) return false;
    }
    return true;
};
// @lc code=end

// TEST:
console.log(areSentencesSimilar(["great", "acting", "skills"], ["fine", "drama", "talent"],
    [["great", "fine"], ["drama", "acting"], ["skills", "talent"]])); // true
console.log(areSentencesSimilar(["great"], ["great"], [])); // true (equal words need no pair)
console.log(areSentencesSimilar(["great"], ["doubleplus", "great"], [])); // false (length mismatch)
console.log(areSentencesSimilar(["fine"], ["great"], [["fine", "great"]])); // true (symmetric)
console.log(areSentencesSimilar(["a", "b"], ["b", "a"], [["a", "b"]])); // true
console.log(areSentencesSimilar(["one", "two"], ["two", "three"], [["one", "two"]])); // false
