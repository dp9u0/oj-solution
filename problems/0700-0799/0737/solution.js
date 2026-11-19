/*
 * @lc app=leetcode.cn id=737 lang=javascript
 *
 * [737] 句子相似性 II
 */

// @lc code=start
/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var areSentencesSimilarTwo = function(sentence1, sentence2, similarPairs) {
    if (sentence1.length !== sentence2.length) return false;
    const parent = new Map();
    const find = x => {
        if (!parent.has(x)) parent.set(x, x);
        while (parent.get(x) !== x) {
            parent.set(x, parent.get(parent.get(x))); // path halving
            x = parent.get(x);
        }
        return x;
    };
    for (const [a, b] of similarPairs) {
        parent.set(find(a), find(b));
    }
    for (let i = 0; i < sentence1.length; i++) {
        if (find(sentence1[i]) !== find(sentence2[i])) return false;
    }
    return true;
};
// @lc code=end

// TEST:
console.log(areSentencesSimilarTwo(["great","acting","skills"], ["fine","drama","talent"], [["great","good"],["fine","good"],["drama","acting"],["skills","talent"]])); // true
console.log(areSentencesSimilarTwo(["I","love","leetcode"], ["I","love","onepiece"], [["manga","onepiece"],["platform","anime"],["leetcode","platform"],["anime","manga"]])); // true
console.log(areSentencesSimilarTwo(["I","love","leetcode"], ["I","love","onepiece"], [["manga","hunterXhunter"],["platform","anime"],["leetcode","platform"],["anime","manga"]])); // false
console.log(areSentencesSimilarTwo(["a"], ["a"], [])); // true (word similar to itself)
console.log(areSentencesSimilarTwo(["a","b"], ["a"], [])); // false (length mismatch)
console.log(areSentencesSimilarTwo(["a","b"], ["b","a"], [["a","b"]])); // true (each aligned pair is a-b, which is similar)
