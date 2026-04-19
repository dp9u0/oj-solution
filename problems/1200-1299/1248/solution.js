/*
 * @lc app=leetcode id=1248 lang=javascript
 *
 * [1248] Count Number of Nice Subarrays
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    const prefixCount = new Map();
    prefixCount.set(0, 1);
    let sum = 0;
    let count = 0;
    for (const num of nums) {
        sum += num % 2;
        if (prefixCount.has(sum - k)) {
            count += prefixCount.get(sum - k);
        }
        prefixCount.set(sum, (prefixCount.get(sum) || 0) + 1);
    }
    return count;
};
// @lc code=end

// TEST:
console.log(numberOfSubarrays([1,1,2,1,1], 3)); // 2
console.log(numberOfSubarrays([2,4,6], 1)); // 0
console.log(numberOfSubarrays([2,2,2,1,2,2,1,2,2,2], 2)); // 16
