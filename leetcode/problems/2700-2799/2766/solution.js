/*
 * @lc app=leetcode id=2766 lang=javascript
 *
 * [2766] Relocate Marbles
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} moveFrom
 * @param {number[]} moveTo
 * @return {number[]}
 */
var relocateMarbles = function(nums, moveFrom, moveTo) {
    const pos = new Set(nums);
    for (let i = 0; i < moveFrom.length; i++) {
        pos.delete(moveFrom[i]);
        pos.add(moveTo[i]);
    }
    return [...pos].sort((a, b) => a - b);
};
// @lc code=end

// TEST:
console.log(relocateMarbles([1,6,7,8], [1,7,2], [2,9,5]));       // [5,6,8,9]
console.log(relocateMarbles([1,1,3,3], [1,3], [2,2]));             // [2]
