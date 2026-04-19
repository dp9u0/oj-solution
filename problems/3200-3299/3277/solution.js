/*
 * @lc app=leetcode id=3277 lang=javascript
 *
 * [3277] Maximum XOR Score Subarray Queries
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var maximumSubarrayXor = function(nums, queries) {
    const n = nums.length;
    // xor[i][j] = XOR score of subarray nums[i..j]
    const xor = Array.from({ length: n }, () => new Array(n).fill(0));
    const mx = Array.from({ length: n }, () => new Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        xor[i][i] = nums[i];
        mx[i][i] = nums[i];
    }

    for (let len = 2; len <= n; len++) {
        for (let i = 0; i + len - 1 < n; i++) {
            const j = i + len - 1;
            xor[i][j] = xor[i][j - 1] ^ xor[i + 1][j];
            mx[i][j] = Math.max(xor[i][j], mx[i + 1][j], mx[i][j - 1]);
        }
    }

    return queries.map(([l, r]) => mx[l][r]);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(maximumSubarrayXor([2,8,4,32,16,1], [[0,2],[1,4],[0,5]]))); // [12,60,60]
console.log(JSON.stringify(maximumSubarrayXor([0,7,3,2,8,5,1], [[0,3],[1,5],[2,4],[2,6],[5,6]]))); // [7,14,11,14,5]
