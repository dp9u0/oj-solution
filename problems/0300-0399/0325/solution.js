/*
 * @lc app=leetcode.cn id=325 lang=javascript
 *
 * [325] 和等于 k 的最长子数组长度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
    // prefix sum -> earliest index where this sum appears
    const first = new Map([[0, -1]]);
    let sum = 0, best = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        // a subarray (j, i] sums to k iff prefix[j] = sum - k
        const need = sum - k;
        if (first.has(need)) best = Math.max(best, i - first.get(need));
        if (!first.has(sum)) first.set(sum, i); // keep earliest only
    }
    return best;
};
// @lc code=end

// TEST:
console.log(maxSubArrayLen([1, -1, 5, -2, 3], 3)); // 4 ([1,-1,5,-2])
console.log(maxSubArrayLen([-2, -1, 2, 1], 1)); // 2 ([-1,2])
console.log(maxSubArrayLen([1, 0, -1, 3], 0)); // 3 ([1,0,-1])
console.log(maxSubArrayLen([2], 2)); // 1
console.log(maxSubArrayLen([1, 2], 5)); // 0
