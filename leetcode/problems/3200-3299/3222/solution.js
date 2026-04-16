/*
 * @lc app=leetcode id=3222 lang=javascript
 *
 * [3222] Find the Winning Player in Coin Game
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
var winningPlayer = function(x, y) {
    let ops = Math.min(x, Math.floor(y / 4));
    return ops % 2 === 1 ? 'Alice' : 'Bob';
};
// @lc code=end

// TEST:
console.log(winningPlayer(2, 7)); // Alice
console.log(winningPlayer(4, 11)); // Bob
console.log(winningPlayer(1, 4)); // Alice
