/*
 * @lc app=leetcode id=2740 lang=javascript
 *
 * [2740] Find the Value of the Partition
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findValueOfPartition = function(nums) {
    nums.sort((a, b) => a - b);
    let result = Infinity;
    for (let i = 1; i < nums.length; i++) {
        result = Math.min(result, nums[i] - nums[i - 1]);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(findValueOfPartition([1,3,2,4]));    // 1
console.log(findValueOfPartition([100,1,10]));   // 9
console.log(findValueOfPartition([1,2]));         // 1
