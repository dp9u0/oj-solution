/*
 * @lc app=leetcode.cn id=422 lang=javascript
 *
 * [422] 有效的单词方块
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {boolean}
 */
var validWordSquare = function(words) {
    const n = words.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (j >= n || i >= words[j].length || words[i][j] !== words[j][i]) {
                return false;
            }
        }
    }
    return true;
};
// @lc code=end

// TEST:
console.log(validWordSquare(["abcd", "bnrt", "crmy", "dtye"])); // true
console.log(validWordSquare(["abcd", "bnrt", "crm", "dtye"])); // true (ragged but symmetric)
console.log(validWordSquare(["ball", "area", "read", "lady"])); // false
console.log(validWordSquare(["abc"])); // false (row 1 doesn't exist)
console.log(validWordSquare(["a"])); // true
