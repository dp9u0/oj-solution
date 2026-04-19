/*
 * @lc app=leetcode id=3509 lang=javascript
 *
 * [3509] Maximum Product of Subsequences With an Alternating Sum Equal to K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} limit
 * @return {number}
 */
var maxProduct = function(nums, k, limit) {
    const n = nums.length;
    const totalSum = nums.reduce((a, b) => a + b, 0);
    if (k > totalSum || k < -totalSum) return -1;

    const off = totalSum;

    // Main DP: (parity, sum) → Set of products ≤ limit
    const dp = [new Map(), new Map()];

    // Sum-only DP to detect product-0 achievability
    const sumReach = [new Set(), new Set()];
    const zeroReach = [new Set(), new Set()];

    for (let i = 0; i < n; i++) {
        const x = nums[i];

        // Update main DP
        const toAdd = [];
        for (let p = 0; p < 2; p++) {
            const newP = 1 - p;
            const delta = p === 0 ? x : -x;
            for (const [s, prods] of dp[p]) {
                const ns = s + delta;
                for (const prod of prods) {
                    const np = prod * x;
                    if (np <= limit) toAdd.push([newP, ns, np]);
                }
            }
        }
        if (x <= limit) toAdd.push([1, x + off, x]);
        for (const [p, s, prod] of toAdd) {
            let prods = dp[p].get(s);
            if (!prods) { prods = new Set(); dp[p].set(s, prods); }
            prods.add(prod);
        }

        // Update sum-only and zero DPs
        const sumToAdd = [[], []];
        const zeroToAdd = [[], []];
        for (let p = 0; p < 2; p++) {
            const newP = 1 - p;
            const delta = p === 0 ? x : -x;
            for (const s of sumReach[p]) sumToAdd[newP].push(s + delta);
            for (const s of zeroReach[p]) zeroToAdd[newP].push(s + delta);
            if (x === 0) {
                for (const s of sumReach[p]) zeroToAdd[newP].push(s + delta);
            }
        }
        sumToAdd[1].push(x + off);
        if (x === 0) zeroToAdd[1].push(x + off);
        for (let p = 0; p < 2; p++) {
            for (const s of sumToAdd[p]) sumReach[p].add(s);
            for (const s of zeroToAdd[p]) zeroReach[p].add(s);
        }
    }

    // Check main DP
    let ans = -1;
    const ks = k + off;
    for (let p = 0; p < 2; p++) {
        const prods = dp[p].get(ks);
        if (prods) for (const prod of prods) ans = Math.max(ans, prod);
    }

    // If no positive answer, check product-0 via zeroReach
    if (ans < 0 && (zeroReach[0].has(ks) || zeroReach[1].has(ks))) ans = 0;

    return ans;
};
// @lc code=end

// TEST:
console.log(maxProduct([1,2,3], 2, 10)); // 6
console.log(maxProduct([0,2,3], -5, 12)); // -1
console.log(maxProduct([2,2,3,3], 0, 9)); // 9
console.log(maxProduct([10,10,9,0], 1, 20)); // 0
