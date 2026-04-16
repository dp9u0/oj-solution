/*
 * @lc app=leetcode id=3364 lang=javascript
 *
 * [3364] Minimum Positive Sum Subarray 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function(nums, l, r) {
    let n = nums.length;
    let prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
    let ans = Infinity;
    for (let len = l; len <= r; len++) {
        for (let i = 0; i + len <= n; i++) {
            let sum = prefix[i + len] - prefix[i];
            if (sum > 0 && sum < ans) ans = sum;
        }
    }
    return ans === Infinity ? -1 : ans;
};
// @lc code=end

// TEST:
console.log(minimumSumSubarray([3,-2,1,4], 2, 3)); // 1
console.log(minimumSumSubarray([-2,2,-3,1], 2, 3)); // -1
console.log(minimumSumSubarray([1,2,3,4], 2, 4)); // 3
