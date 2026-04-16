/*
 * @lc app=leetcode id=3101 lang=javascript
 *
 * [3101] Count Alternating Subarrays
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countAlternatingSubarrays = function(nums) {
    let ans = 0, len = 1;
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] !== nums[i - 1]) {
            len++;
        } else {
            len = 1;
        }
        ans += len;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(countAlternatingSubarrays([0,1,1,1])); // 5
console.log(countAlternatingSubarrays([1,0,1,0])); // 10
console.log(countAlternatingSubarrays([0,0,0])); // 3
