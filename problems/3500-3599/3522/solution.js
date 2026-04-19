/*
 * @lc app=leetcode id=3522 lang=javascript
 *
 * [3522] Calculate Score After Performing Instructions
 */

// @lc code=start
/**
 * @param {string[]} instructions
 * @param {number[]} values
 * @return {number}
 */
var calculateScore = function(instructions, values) {
    const n = instructions.length;
    const visited = new Uint8Array(n);
    let score = 0, i = 0;
    while (i >= 0 && i < n && !visited[i]) {
        visited[i] = 1;
        if (instructions[i] === 'add') {
            score += values[i];
            i++;
        } else {
            i += values[i];
        }
    }
    return score;
};
// @lc code=end

// TEST:
console.log(calculateScore(["jump","add","add","jump","add","jump"], [2,1,3,1,-2,-3])); // 1
console.log(calculateScore(["jump","add","add"], [3,1,1])); // 0
console.log(calculateScore(["jump"], [0])); // 0
