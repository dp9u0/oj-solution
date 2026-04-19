/*
 * @lc app=leetcode id=2762 lang=javascript
 *
 * [2762] Continuous Subarrays
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var continuousSubarrays = function(nums) {
    let maxDq = [], minDq = [];
    let left = 0, count = 0;
    for (let right = 0; right < nums.length; right++) {
        while (maxDq.length && nums[maxDq[maxDq.length - 1]] <= nums[right]) maxDq.pop();
        maxDq.push(right);
        while (minDq.length && nums[minDq[minDq.length - 1]] >= nums[right]) minDq.pop();
        minDq.push(right);
        while (nums[maxDq[0]] - nums[minDq[0]] > 2) {
            left++;
            if (maxDq[0] < left) maxDq.shift();
            if (minDq[0] < left) minDq.shift();
        }
        count += right - left + 1;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(continuousSubarrays([5,4,2,4])); // 8
console.log(continuousSubarrays([1,2,3])); // 6
