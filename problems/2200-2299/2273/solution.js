/*
 * @lc app=leetcode id=2273 lang=javascript
 *
 * [2273] Find Resultant Array After Removing Anagrams
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    let result = [words[0]];
    let prev = words[0].split('').sort().join('');
    for (let i = 1; i < words.length; i++) {
        let sorted = words[i].split('').sort().join('');
        if (sorted !== prev) {
            result.push(words[i]);
            prev = sorted;
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(removeAnagrams(["abba","baba","bbaa","cd","cd"]))); // ["abba","cd"]
console.log(JSON.stringify(removeAnagrams(["a","b","c","d","e"]))); // ["a","b","c","d","e"]
