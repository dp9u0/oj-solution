/*
 * @lc app=leetcode id=921 lang=javascript
 *
 * [921] Minimum Add to Make Parentheses Valid
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let open = 0, result = 0;

    for (const ch of s) {
        if (ch === '(') {
            open++;
        } else {
            if (open > 0) {
                open--;
            } else {
                result++;
            }
        }
    }

    return result + open;
};
// @lc code=end

// TEST:
console.log(minAddToMakeValid('())'));
// Expected: 1

console.log(minAddToMakeValid('((('));
// Expected: 3

console.log(minAddToMakeValid('()))(('));
// Expected: 4
