/*
 * @lc app=leetcode id=3254 lang=javascript
 *
 * [3254] Find the Power of K-Size Subarrays I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function(nums, k) {
    const n = nums.length;
    const result = [];
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        if (i > 0 && nums[i] === nums[i - 1] + 1) {
            cnt++;
        } else {
            cnt = 1;
        }
        if (i >= k - 1) {
            result.push(cnt >= k ? nums[i] : -1);
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(resultsArray([1,2,3,4,3,2,5], 3));  // [3,4,-1,-1,-1]
console.log(resultsArray([2,2,2,2,2], 4));       // [-1,-1]
console.log(resultsArray([3,2,3,2,3,2], 2));     // [-1,3,-1,3,-1]
