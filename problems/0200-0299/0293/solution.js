/*
 * @lc app=leetcode.cn id=293 lang=javascript
 *
 * [293] 翻转游戏
 */

// @lc code=start
/**
 * @param {string} currentState
 * @return {string[]}
 */
var generatePossibleNextMoves = function(currentState) {
    const res = [];
    for (let i = 1; i < currentState.length; i++) {
        if (currentState[i] === '+' && currentState[i - 1] === '+') {
            res.push(currentState.slice(0, i - 1) + '--' + currentState.slice(i + 1));
        }
    }
    return res;
};
// @lc code=end

// TEST:
console.log(generatePossibleNextMoves("++++")); // ["--++", "+--+", "++--"]
console.log(generatePossibleNextMoves("+")); // []
console.log(generatePossibleNextMoves("+-+")); // []
console.log(generatePossibleNextMoves("+++")); // ["--+", "+--"]
console.log(generatePossibleNextMoves("--++--")); // ["----"]
