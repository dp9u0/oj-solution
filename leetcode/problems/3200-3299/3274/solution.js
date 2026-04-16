/*
 * @lc app=leetcode id=3274 lang=javascript
 *
 * [3274] Check if Two Chessboard Squares Have the Same Color
 */

// @lc code=start
/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function(coordinate1, coordinate2) {
    const color = (c) => (c.charCodeAt(0) - 'a'.charCodeAt(0) + parseInt(c[1])) % 2;
    return color(coordinate1) === color(coordinate2);
};
// @lc code=end

// TEST:
console.log(checkTwoChessboards("a1", "c3")); // true
console.log(checkTwoChessboards("a1", "h3")); // false
console.log(checkTwoChessboards("a1", "a2")); // false
console.log(checkTwoChessboards("b2", "d4")); // true
