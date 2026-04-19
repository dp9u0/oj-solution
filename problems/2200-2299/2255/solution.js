/*
 * @lc app=leetcode id=2255 lang=javascript
 *
 * [2255] Count Prefixes of a Given String
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    let cnt = 0;
    for (const w of words) {
        if (s.startsWith(w)) cnt++;
    }
    return cnt;
};
// @lc code=end

// TEST:
console.log(countPrefixes(["a","b","c","ab","bc","abc"], "abc")); // 3
console.log(countPrefixes(["a","a"], "aa"));                       // 2
console.log(countPrefixes(["abc"], "a"));                          // 0
