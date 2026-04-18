/*
 * @lc app=leetcode id=2968 lang=javascript
 *
 * [2968] Apply Operations to Maximize Frequency Score
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequencyScore = function(nums, k) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const prefix = [0];
    for (let i = 0; i < n; i++) prefix.push(prefix[i] + nums[i]);

    const cost = (l, r) => {
        const mid = (l + r) >> 1;
        return BigInt(nums[mid]) * BigInt(2 * mid - l - r + 1)
            + BigInt(prefix[r + 1] + prefix[l] - 2 * prefix[mid + 1]);
    };

    let ans = 0, l = 0;
    for (let r = 0; r < n; r++) {
        while (l <= r && cost(l, r) > BigInt(k)) l++;
        ans = Math.max(ans, r - l + 1);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxFrequencyScore([1, 2, 6, 4], 3)); // 3
console.log(maxFrequencyScore([1, 4, 4, 2, 4], 0)); // 3
console.log(maxFrequencyScore([1], 0)); // 1
console.log(maxFrequencyScore([1, 2, 3, 4, 5], 10)); // 5
console.log(maxFrequencyScore([1000000000, 1000000000, 1000000000], 100000000000000)); // 3
