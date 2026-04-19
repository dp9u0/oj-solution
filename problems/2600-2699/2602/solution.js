/*
 * @lc app=leetcode id=2602 lang=javascript
 *
 * [2602] Minimum Operations to Make All Array Elements Equal
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var minOperations = function(nums, queries) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const pre = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) pre[i + 1] = pre[i] + nums[i];

    const bs = (target) => {
        let lo = 0, hi = n;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (nums[mid] <= target) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    };

    return queries.map(q => {
        const k = bs(q);
        const left = BigInt(q) * BigInt(k) - BigInt(pre[k]);
        const right = BigInt(pre[n] - pre[k]) - BigInt(q) * BigInt(n - k);
        return Number(left + right);
    });
};
// @lc code=end

// TEST:
console.log(JSON.stringify(minOperations([3, 1, 6, 8], [1, 5])));       // [14,10]
console.log(JSON.stringify(minOperations([2, 9, 6, 3], [10])));          // [20]
console.log(JSON.stringify(minOperations([1, 1, 1, 1], [1])));           // [0]
console.log(JSON.stringify(minOperations([1, 2, 3], [2])));              // [2]
console.log(JSON.stringify(minOperations([1], [1000000000])));           // [999999999]
