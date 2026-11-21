/*
 * @lc app=leetcode.cn id=2005 lang=javascript
 *
 * [2005] 斐波那契树的移除子树游戏
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var findGameWinner = function(n) {
    return n % 6 !== 1;
};
// @lc code=end

// TEST:
console.log(findGameWinner(1)); // false (Bob wins)
console.log(findGameWinner(2)); // true
console.log(findGameWinner(3)); // true
console.log(findGameWinner(7)); // false (n ≡ 1 mod 6)
console.log(findGameWinner(13)); // false
console.log(findGameWinner(4)); // true
