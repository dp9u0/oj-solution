/*
 * @lc app=leetcode id=2824 lang=javascript
 *
 * [2824] Count Pairs Whose Sum is Less than Target
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    nums.sort((a, b) => a - b);
    let count = 0, left = 0, right = nums.length - 1;
    while (left < right) {
        if (nums[left] + nums[right] < target) {
            count += right - left;
            left++;
        } else {
            right--;
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(countPairs([-1,1,2,3,1], 2));
console.log(countPairs([-6,2,5,-2,-7,-1,3], -2));
