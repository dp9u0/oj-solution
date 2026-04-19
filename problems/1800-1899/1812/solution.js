/*
 * @lc app=leetcode id=1812 lang=javascript
 *
 * [1812] Determine Color of a Chessboard Square
 */

// @lc code=start
/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    let col = coordinates.charCodeAt(0) - 'a'.charCodeAt(0);
    let row = parseInt(coordinates[1]) - 1;
    return (col + row) % 2 === 1;
};
// @lc code=end

// TEST:
console.log(squareIsWhite("a1")); // false
console.log(squareIsWhite("h3")); // true
console.log(squareIsWhite("c7")); // false
console.log(squareIsWhite("a2")); // true
console.log(squareIsWhite("b1")); // true
