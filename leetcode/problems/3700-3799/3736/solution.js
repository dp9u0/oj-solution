/*
 * @lc app=leetcode id=3736 lang=javascript
 *
 * [3736] Minimum Moves to Equal Array Elements III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    const max = Math.max(...nums);
    let moves = 0;
    for (const x of nums) moves += max - x;
    return moves;
};
// @lc code=end

// TEST:
console.log(minMoves([2,1,3])); // 3
console.log(minMoves([4,4,5])); // 2
console.log(minMoves([1])); // 0
console.log(minMoves([1,1,1])); // 0
