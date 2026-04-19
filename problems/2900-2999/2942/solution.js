/*
 * @lc app=leetcode id=2942 lang=javascript
 *
 * [2942] Find Words Containing Character
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    const res = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) res.push(i);
    }
    return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findWordsContaining(["leet","code"], "e")));           // [0,1]
console.log(JSON.stringify(findWordsContaining(["abc","bcd","aaaa","cbc"], "a"))); // [0,2]
console.log(JSON.stringify(findWordsContaining(["abc","bcd","aaaa","cbc"], "z"))); // []
console.log(JSON.stringify(findWordsContaining(["a"], "a")));                      // [0]
