/*
 * @lc app=leetcode.cn id=2393 lang=javascript
 *
 * [2393] 严格递增的子数组个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
    const n = nums.length;
    let total = 0, len = 0;
    for (let i = 0; i < n; i++) {
        if (i > 0 && nums[i] > nums[i - 1]) len++;
        else {
            total += (len * (len + 1)) / 2;
            len = 1;
        }
    }
    total += (len * (len + 1)) / 2;
    return total;
};
// @lc code=end

// TEST:
console.log(countSubarrays([1,3,5,4,4,6])); // 10
console.log(countSubarrays([1,2,3,4,5])); // 15
console.log(countSubarrays([1])); // 1
console.log(countSubarrays([5,4,3])); // 3
console.log(countSubarrays([2,2,2])); // 3
