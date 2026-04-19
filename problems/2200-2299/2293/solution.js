/*
 * @lc app=leetcode id=2293 lang=javascript
 *
 * [2293] Min Max Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function(nums) {
    while (nums.length > 1) {
        let n = nums.length / 2;
        let newNums = new Array(n);
        for (let i = 0; i < n; i++) {
            if (i % 2 === 0) newNums[i] = Math.min(nums[2 * i], nums[2 * i + 1]);
            else newNums[i] = Math.max(nums[2 * i], nums[2 * i + 1]);
        }
        nums = newNums;
    }
    return nums[0];
};
// @lc code=end

// TEST:
console.log(minMaxGame([1,3,5,2,4,8,2,2])); // 1
console.log(minMaxGame([3])); // 3
console.log(minMaxGame([1,2,3,4])); // 1
