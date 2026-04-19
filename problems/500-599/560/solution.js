/*
 * @lc app=leetcode id=560 lang=javascript
 *
 * [560] Subarray Sum Equals K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const prefixCount = new Map();
    prefixCount.set(0, 1);
    let sum = 0;
    let count = 0;
    for (const num of nums) {
        sum += num;
        if (prefixCount.has(sum - k)) {
            count += prefixCount.get(sum - k);
        }
        prefixCount.set(sum, (prefixCount.get(sum) || 0) + 1);
    }
    return count;
};
// @lc code=end

// TEST:
console.log(subarraySum([1,1,1], 2)); // 2
console.log(subarraySum([1,2,3], 3)); // 2
console.log(subarraySum([1,-1,0], 0)); // 3
