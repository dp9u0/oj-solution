/*
 * @lc app=leetcode id=1546 lang=javascript
 *
 * [1546] Maximum Number of Non-Overlapping Subarrays With Sum Equals Target
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maxNonOverlapping = function(nums, target) {
    let count = 0, prefixSum = 0;
    let seen = new Set([0]);
    for (let x of nums) {
        prefixSum += x;
        if (seen.has(prefixSum - target)) {
            count++;
            seen = new Set([0]);
            prefixSum = 0;
        } else {
            seen.add(prefixSum);
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(maxNonOverlapping([1,1,1,1,1], 2)); // 2
console.log(maxNonOverlapping([-1,3,5,1,4,2,-9], 6)); // 2
