/*
 * @lc app=leetcode.cn id=2567 lang=javascript
 *
 * [2567] 修改两个元素的最小分数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    return Math.min(
        nums[n - 3] - nums[0],
        nums[n - 2] - nums[1],
        nums[n - 1] - nums[2]
    );
};
// @lc code=end

// TEST:
console.log(minimizeSum([1,4,3]));          // 0
console.log(minimizeSum([1,4,7,8,5]));      // 3
console.log(minimizeSum([1,1,1]));          // 0
console.log(minimizeSum([5,5,5,5]));        // 0
console.log(minimizeSum([2,10,14,20]));     // 4
console.log(minimizeSum([3,100,200]));      // 0
console.log(minimizeSum([10,1,53,84,3]));   // 9
