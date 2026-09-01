/*
 * @lc app=leetcode id=930 lang=javascript
 *
 * [930] Binary Subarrays With Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    const count = new Map();
    count.set(0, 1);

    let sum = 0, result = 0;
    for (const num of nums) {
        sum += num;
        result += count.get(sum - goal) || 0;
        count.set(sum, (count.get(sum) || 0) + 1);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));
// Expected: 4

console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0));
// Expected: 15

console.log(numSubarraysWithSum([1, 1, 1], 2));
// Expected: 2
