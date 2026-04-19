/*
 * @lc app=leetcode id=2841 lang=javascript
 *
 * [2841] Maximum Sum of Almost Unique Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var maxSum = function(nums, m, k) {
    const freq = new Map();
    let distinct = 0, sum = 0, ans = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
        if (freq.get(nums[i]) === 1) distinct++;
        if (i >= k) {
            const out = nums[i - k];
            sum -= out;
            freq.set(out, freq.get(out) - 1);
            if (freq.get(out) === 0) distinct--;
        }
        if (i >= k - 1 && distinct >= m) ans = Math.max(ans, sum);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxSum([2,6,7,3,1,7], 3, 4));
console.log(maxSum([5,9,9,2,4,5,4], 1, 3));
console.log(maxSum([1,2,1,2,1,2,1], 3, 3));
