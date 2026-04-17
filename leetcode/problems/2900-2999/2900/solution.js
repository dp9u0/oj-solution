/*
 * @lc app=leetcode id=2900 lang=javascript
 *
 * [2900] Longest Unequal Adjacent Groups Subsequence I
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
    const result = [words[0]];
    let last = groups[0];
    for (let i = 1; i < words.length; i++) {
        if (groups[i] !== last) {
            result.push(words[i]);
            last = groups[i];
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(getLongestSubsequence(["e","a","b"], [0,0,1]))); // ["e","b"]
console.log(JSON.stringify(getLongestSubsequence(["a","b","c","d"], [1,0,1,1]))); // ["a","b","c"] or ["a","b","d"]
console.log(JSON.stringify(getLongestSubsequence(["c"], [0]))); // ["c"]
console.log(JSON.stringify(getLongestSubsequence(["a","b"], [0,1]))); // ["a","b"]
console.log(JSON.stringify(getLongestSubsequence(["a","b"], [0,0]))); // ["a"]
