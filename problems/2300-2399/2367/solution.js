/*
 * @lc app=leetcode id=2367 lang=javascript
 *
 * [2367] Number of Arithmetic Triplets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    const set = new Set(nums);
    let count = 0;
    for (const x of nums) {
        if (set.has(x + diff) && set.has(x + 2 * diff)) count++;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(arithmeticTriplets([0,1,4,6,7,10], 3)); // 2
console.log(arithmeticTriplets([4,5,6,7,8,9], 2)); // 2
console.log(arithmeticTriplets([0,1,2], 1)); // 1
console.log(arithmeticTriplets([0,1,4], 2)); // 0
console.log(arithmeticTriplets([0,3,6], 3)); // 1
