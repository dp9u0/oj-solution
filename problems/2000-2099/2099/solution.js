/*
 * @lc app=leetcode id=2099 lang=javascript
 *
 * [2099] Find Subsequence of Length K With the Largest Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    const indexed = nums.map((val, idx) => [val, idx]);
    indexed.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
    const topK = indexed.slice(0, k);
    topK.sort((a, b) => a[1] - b[1]);
    return topK.map(([val]) => val);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(maxSubsequence([2,1,3,3], 2))); // [3,3]
console.log(JSON.stringify(maxSubsequence([-1,-2,3,4], 3))); // [-1,3,4]
console.log(JSON.stringify(maxSubsequence([3,4,3,3], 2))); // [3,4]
