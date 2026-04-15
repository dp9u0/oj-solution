/*
 * @lc app=leetcode id=3412 lang=javascript
 *
 * [3412] Find Mirror Score of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculateScore = function(s) {
    const stacks = Array.from({length: 26}, () => []);
    let score = 0;
    for (let i = 0; i < s.length; i++) {
        const c = s.charCodeAt(i) - 97;
        const mirror = 25 - c;
        if (stacks[mirror].length) {
            const j = stacks[mirror].pop();
            score += i - j;
        } else {
            stacks[c].push(i);
        }
    }
    return score;
};
// @lc code=end

// TEST:
console.log(calculateScore("aczzx")); // 5
console.log(calculateScore("abcdef")); // 0
