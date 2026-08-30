/*
 * @lc app=leetcode id=3903 lang=javascript
 *
 * [3903] Smallest Stable Index I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function(nums, k) {
    const n = nums.length;
    const suffixMin = new Array(n);
    suffixMin[n - 1] = nums[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        suffixMin[i] = Math.min(nums[i], suffixMin[i + 1]);
    }

    let prefixMax = -Infinity;
    for (let i = 0; i < n; i++) {
        prefixMax = Math.max(prefixMax, nums[i]);
        if (prefixMax - suffixMin[i] <= k) {
            return i;
        }
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(firstStableIndex([5, 0, 1, 4], 3), '=== 3');
console.log(firstStableIndex([3, 2, 1], 1), '=== -1');
console.log(firstStableIndex([0], 0), '=== 0');
console.log(firstStableIndex([1, 2, 3, 4, 5], 0), '=== 0');
console.log(firstStableIndex([5, 4, 3, 2, 1], 0), '=== -1');
console.log(firstStableIndex([5, 0, 1, 4], 4), '=== 2');
console.log(firstStableIndex([2, 2, 2], 0), '=== 0');
console.log(firstStableIndex([1000000000, 0, 1000000000], 1000000000), '=== 0');
