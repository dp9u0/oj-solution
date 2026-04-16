/*
 * @lc app=leetcode id=3038 lang=javascript
 *
 * [3038] Maximum Number of Operations With the Same Score I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {
    const target = nums[0] + nums[1];
    let count = 0;
    for (let i = 0; i + 1 < nums.length; i += 2) {
        if (nums[i] + nums[i + 1] === target) count++;
        else break;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(maxOperations([3,2,1,4,5])); // 2
console.log(maxOperations([1,5,3,3,4,1,3,2,2,3])); // 2
console.log(maxOperations([5,3])); // 1
console.log(maxOperations([1,1,1,1,1,1])); // 3
