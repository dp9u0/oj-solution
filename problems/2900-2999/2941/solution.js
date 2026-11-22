/*
 * @lc app=leetcode.cn id=2941 lang=javascript
 *
 * [2941] 子数组的最大 GCD-Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxGcdSum = function(nums, k) {
    const n = nums.length;
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i];
    const gcd = (a, b) => { while (b) { const t = a % b; a = b; b = t; } return a; };
    // list: segments [g, rEnd] for subarrays starting at i (ascending rEnd, distinct g)
    let list = [];
    let best = 0n;
    for (let i = n - 1; i >= 0; i--) {
        const nl = [];
        for (const [g, r] of list) {
            const ng = gcd(nums[i], g);
            if (nl.length && nl[nl.length - 1][0] === ng) nl[nl.length - 1][1] = r;
            else nl.push([ng, r]);
        }
        if (!nl.length || nl[0][0] !== nums[i]) nl.unshift([nums[i], i]);
        // else: single element extends the front segment leftwards; rEnd unchanged
        list = nl;
        for (const [g, r] of list) {
            if (r - i + 1 >= k) {
                const cand = BigInt(prefix[r + 1] - prefix[i]) * BigInt(g);
                if (cand > best) best = cand;
            }
        }
    }
    return Number(best);
};
// @lc code=end

// TEST:
console.log(maxGcdSum([2,1,4,4,4,2], 2)); // 48
console.log(maxGcdSum([7,3,9,4], 1)); // 81
console.log(maxGcdSum([5,3], 2)); // 8
console.log(maxGcdSum([1000000,1000000,1000000], 3)); // 3000000000000
console.log(maxGcdSum([4], 1)); // 16
