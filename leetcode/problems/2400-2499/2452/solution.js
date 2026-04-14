/*
 * @lc app=leetcode id=2452 lang=javascript
 *
 * [2452] Words Within Two Edits of Dictionary
 */

// @lc code=start
/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function(queries, dictionary) {
    const result = [];
    for (const q of queries) {
        for (const d of dictionary) {
            let diff = 0;
            for (let i = 0; i < q.length; i++) {
                if (q[i] !== d[i] && ++diff > 2) break;
            }
            if (diff <= 2) { result.push(q); break; }
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(twoEditWords(["word","note","ants","wood"], ["wood","joke","moat"]));
console.log(twoEditWords(["yes"], ["not"]));
console.log(twoEditWords(["abcd"], ["abcc"]));
