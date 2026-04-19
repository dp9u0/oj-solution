/*
 * @lc app=leetcode id=1004 lang=javascript
 *
 * [1004] Max Consecutive Ones III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0, zeros = 0, ans = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) zeros++;
        while (zeros > k) {
            if (nums[left] === 0) zeros--;
            left++;
        }
        ans = Math.max(ans, right - left + 1);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2));
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3));
console.log(longestOnes([1,1,1], 0));
