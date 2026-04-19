/*
 * @lc app=leetcode id=1695 lang=javascript
 *
 * [1695] Maximum Erasure Value
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    const seen = new Set();
    let left = 0;
    let sum = 0;
    let result = 0;
    for (let right = 0; right < nums.length; right++) {
        while (seen.has(nums[right])) {
            seen.delete(nums[left]);
            sum -= nums[left];
            left++;
        }
        seen.add(nums[right]);
        sum += nums[right];
        result = Math.max(result, sum);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(maximumUniqueSubarray([4,2,4,5,6])); // 17
console.log(maximumUniqueSubarray([5,2,1,2,5,2,1,2,5])); // 8
console.log(maximumUniqueSubarray([1,2,3,4,5])); // 15
