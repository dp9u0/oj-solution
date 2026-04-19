/*
 * @lc app=leetcode id=2527 lang=javascript
 *
 * [2527] Find Xor-Beauty of Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var xorBeauty = function(nums) {
    let res = 0;
    for (const num of nums) {
        res ^= num;
    }
    return res;
};
// @lc code=end

// TEST:
console.log(xorBeauty([1,4]));                                   // 5
console.log(xorBeauty([15,45,20,2,34,35,5,44,32,30]));          // 34
console.log(xorBeauty([1]));                                     // 1
console.log(xorBeauty([7,7,7,7]));                               // 0
