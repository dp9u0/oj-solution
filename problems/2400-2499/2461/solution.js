/*
 * @lc app=leetcode id=2461 lang=javascript
 *
 * [2461] Maximum Sum of Distinct Subarrays With Length K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    const count = new Map();
    let sum = 0;
    let dupCount = 0;
    let maxSum = 0;

    for (let i = 0; i < nums.length; i++) {
        // add current element
        sum += nums[i];
        const c = (count.get(nums[i]) || 0) + 1;
        count.set(nums[i], c);
        if (c === 2) dupCount++;

        // remove element leaving window
        if (i >= k) {
            const left = nums[i - k];
            sum -= left;
            const cl = count.get(left);
            if (cl === 2) dupCount--;
            if (cl === 1) {
                count.delete(left);
            } else {
                count.set(left, cl - 1);
            }
        }

        // check window
        if (i >= k - 1 && dupCount === 0) {
            maxSum = Math.max(maxSum, sum);
        }
    }

    return maxSum;
};
// @lc code=end

// TEST:
console.log(maximumSubarraySum([1,5,4,2,9,9,9], 3));  // 15
console.log(maximumSubarraySum([4,4,4], 3));           // 0
console.log(maximumSubarraySum([1,2,3,4,5], 2));       // 9
console.log(maximumSubarraySum([1], 1));                // 1
