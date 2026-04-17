/*
 * @lc app=leetcode id=2506 lang=javascript
 *
 * [2506] Count Pairs Of Similar Strings
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
    const count = new Map();
    for (const word of words) {
        const key = [...new Set(word)].sort().join('');
        count.set(key, (count.get(key) || 0) + 1);
    }
    let result = 0;
    for (const c of count.values()) {
        result += c * (c - 1) / 2;
    }
    return result;
};
// @lc code=end

// TEST:
console.log(similarPairs(["aba","aabb","abcd","bac","aabc"]));  // 2
console.log(similarPairs(["aabb","ab","ba"]));  // 3
console.log(similarPairs(["nba","cba","dba"]));  // 0
console.log(similarPairs(["a"]));  // 0
console.log(similarPairs(["a","a","a"]));  // 3
console.log(similarPairs(["abc","cba","bca","xyz","zyx"]));  // 4
