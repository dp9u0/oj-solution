/*
 * @lc app=leetcode id=3804 lang=javascript
 *
 * [3804] Number of Centered Subarrays
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var centeredSubarrays = function(nums) {
    const n = nums.length;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        const seen = new Set();
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += nums[j];
            seen.add(nums[j]);
            if (seen.has(sum)) ans++;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(centeredSubarrays([-1,1,0])); // 5
console.log(centeredSubarrays([2,-3])); // 2
console.log(centeredSubarrays([1])); // 1
console.log(centeredSubarrays([0,0,0])); // 6
