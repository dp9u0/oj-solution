/*
 * @lc app=leetcode id=1674 lang=javascript
 *
 * [1674] Minimum Moves to Make Array Complementary
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var minMoves = function(nums, limit) {
    const n = nums.length;
    const diff = new Int32Array(2 * limit + 3);

    for (let i = 0; i < n / 2; i++) {
        const a = nums[i], b = nums[n - 1 - i];
        const lo = Math.min(a, b) + 1;
        const hi = Math.max(a, b) + limit;
        const sum = a + b;

        diff[2] += 2;
        diff[2 * limit + 1] -= 2;
        diff[lo] -= 1;
        diff[hi + 1] += 1;
        diff[sum] -= 1;
        diff[sum + 1] += 1;
    }

    let minCost = Infinity, cur = 0;
    for (let t = 2; t <= 2 * limit; t++) {
        cur += diff[t];
        if (cur < minCost) minCost = cur;
    }
    return minCost;
};
// @lc code=end

// TEST:
console.log(minMoves([1,2,4,3], 4)); // 1
console.log(minMoves([1,2,2,1], 2)); // 2
console.log(minMoves([1,2,1,2], 2)); // 0
console.log(minMoves([1,1], 3)); // 0
console.log(minMoves([1,3,5,7], 7)); // 0
console.log(minMoves([3,3,3,3], 3)); // 0
