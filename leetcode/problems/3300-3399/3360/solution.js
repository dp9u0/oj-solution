/*
 * @lc app=leetcode id=3360 lang=javascript
 *
 * [3360] Stone Removal Game
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function(n) {
    let stones = n;
    let take = 10;
    let aliceTurn = true;
    while (stones >= take && take > 0) {
        stones -= take;
        take--;
        aliceTurn = !aliceTurn;
    }
    return !aliceTurn;
};
// @lc code=end

// TEST:
console.log(canAliceWin(12));
console.log(canAliceWin(1));
console.log(canAliceWin(55));
