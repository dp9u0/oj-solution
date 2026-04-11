/*
 * @lc app=leetcode id=2997 lang=javascript
 *
 * [2997] Minimum Number of Operations to Make Array XOR Equal to K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let xor = 0;
    for (const num of nums) xor ^= num;
    return (xor ^ k).toString(2).replace(/0/g, '').length;
};
// @lc code=end

// TEST:
console.log(minOperations([2,1,3,4], 1)); // 2
console.log(minOperations([2,0,2,0], 0)); // 0
console.log(minOperations([1], 1)); // 0
