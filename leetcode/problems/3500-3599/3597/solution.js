/*
 * @lc app=leetcode id=3597 lang=javascript
 *
 * [3597] Partition String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var partitionString = function(s) {
    const seen = new Set();
    const result = [];
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        const seg = s.substring(start, i + 1);
        if (!seen.has(seg)) {
            seen.add(seg);
            result.push(seg);
            start = i + 1;
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(partitionString("abbccccd"))); // ["a","b","bc","c","cc","d"]
console.log(JSON.stringify(partitionString("aaaa")));     // ["a","aa"]
console.log(JSON.stringify(partitionString("abab")));     // ["a","b","ab"]
