/*
 * @lc app=leetcode id=3987 lang=javascript
 *
 * [3987] Minimum Total Cost to Process All Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumCost = function(nums, k) {
    const MOD = 1000000007n;
    let sum = 0n;
    for (const x of nums) sum += BigInt(x);
    // Minimum total operations: m = ceil((sum - k) / k) = floor((sum - 1) / k)
    // Total cost = 1 + 2 + ... + m = m * (m + 1) / 2
    const m = (sum - 1n) / BigInt(k);
    return Number((m * (m + 1n) / 2n) % MOD);
};
// @lc code=end

// TEST:
const run = (nums, k) => minimumCost(nums, k);
console.log(run([1, 2, 3, 4], 4) === 3);                    // Example 1
console.log(run([1, 1, 7, 14], 4) === 15);                  // Example 2
console.log(run([1, 2, 3, 4], 10) === 0);                   // Example 3
console.log(run([5], 4) === 1);                             // S=5>k=4, m=1
console.log(run([3], 5) === 0);                             // S<=k, no ops
console.log(run([2, 2, 2], 3) === 1);                       // S=6,k=3, m=floor(5/3)=1
console.log(run([1000000000], 1) === 28);                   // m=999999999, m(m+1)/2 mod 1e9+7 = 28
console.log(run(new Array(100000).fill(1000000000), 1) >= 0); // perf: n=1e5 large values, BigInt ok
