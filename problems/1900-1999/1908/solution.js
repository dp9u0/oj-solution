/*
 * @lc app=leetcode.cn id=1908 lang=javascript
 *
 * [1908] Nim 游戏 II
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @return {boolean}
 */
var nimGame = function(piles) {
    let x = 0;
    for (const p of piles) x ^= p;
    return x !== 0;
};
// @lc code=end

// TEST:
console.log(nimGame([1])); // true
console.log(nimGame([1,1])); // false
console.log(nimGame([1,2,3])); // false
console.log(nimGame([7,7,7])); // true
console.log(nimGame([2,2])); // false
