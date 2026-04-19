/*
 * @lc app=leetcode id=1408 lang=javascript
 *
 * [1408] String Matching in an Array
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    words.sort((a, b) => a.length - b.length);
    const ans = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[j].includes(words[i])) {
                ans.push(words[i]);
                break;
            }
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(stringMatching(["mass","as","hero","superhero"]))); // ["as","hero"]
console.log(JSON.stringify(stringMatching(["leetcode","et","code"])));           // ["et","code"]
console.log(JSON.stringify(stringMatching(["blue","green","bu"])));               // []
