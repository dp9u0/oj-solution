/*
 * @lc app=leetcode id=945 lang=javascript
 *
 * [945] Minimum Increment to Make Array Unique
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
    nums.sort((a, b) => a - b);
    let moves = 0, next = 0;

    for (const n of nums) {
        if (n < next) {
            moves += next - n;
        } else {
            next = n;
        }
        next++;
    }

    return moves;
};
// @lc code=end

// TEST:
console.log(minIncrementForUnique([1,2,2]));
console.log(minIncrementForUnique([3,2,1,2,1,7]));
console.log(minIncrementForUnique([0,0,0]));
