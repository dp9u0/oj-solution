/*
 * @lc app=leetcode id=3488 lang=javascript
 *
 * [3488] Closest Equal Element Queries
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var solveQueries = function(nums, queries) {
    const n = nums.length;
    // Group indices by value
    const pos = new Map();
    for (let i = 0; i < n; i++) {
        if (!pos.has(nums[i])) pos.set(nums[i], []);
        pos.get(nums[i]).push(i);
    }

    // Precompute min distance for each index
    const minDist = new Array(n).fill(-1);
    for (const indices of pos.values()) {
        if (indices.length < 2) continue;
        const m = indices.length;
        for (let i = 0; i < m; i++) {
            const prev = indices[(i - 1 + m) % m];
            const next = indices[(i + 1) % m];
            const cur = indices[i];
            const d1 = Math.min(Math.abs(cur - prev), n - Math.abs(cur - prev));
            const d2 = Math.min(Math.abs(cur - next), n - Math.abs(cur - next));
            minDist[cur] = Math.min(d1, d2);
        }
    }

    return queries.map(q => minDist[q]);
};
// @lc code=end

// TEST:
console.log(solveQueries([1,3,1,4,1,3,2], [0,3,5])); // [2,-1,3]
console.log(solveQueries([1,2,3,4], [0,1,2,3])); // [-1,-1,-1,-1]
