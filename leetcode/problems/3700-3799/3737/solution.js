/*
 * @lc app=leetcode id=3737 lang=javascript
 *
 * [3737] Count Subarrays With Majority Element I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function(nums, target) {
    const n = nums.length;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = i; j < n; j++) {
            if (nums[j] === target) count++;
            if (count * 2 > (j - i + 1)) ans++;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(countMajoritySubarrays([1,2,2,3], 2)); // 5
console.log(countMajoritySubarrays([1,1,1,1], 1)); // 10
console.log(countMajoritySubarrays([1,2,3], 4)); // 0
