/*
 * @lc app=leetcode id=3232 lang=javascript
 *
 * [3232] Find if Digit Game Can Be Won
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let single = 0, double = 0;
    for (const n of nums) {
        if (n < 10) single += n;
        else double += n;
    }
    return single > double || double > single;
};
// @lc code=end

// TEST:
console.log(canAliceWin([1,2,3,4,10]));
console.log(canAliceWin([1,2,3,4,5,14]));
console.log(canAliceWin([5,5,5,25]));
