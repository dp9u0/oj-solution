/*
 * @lc app=leetcode id=3695 lang=javascript
 *
 * [3695] Maximize Alternating Sum Using Swaps
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} swaps
 * @return {number}
 */
var maxAlternatingSum = function(nums, swaps) {
    const n = nums.length;
    const parent = Array.from({ length: n }, (_, i) => i);
    const find = (x) => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    };
    const union = (a, b) => {
        const ra = find(a), rb = find(b);
        if (ra !== rb) parent[ra] = rb;
    };
    for (const [p, q] of swaps) union(p, q);

    // Group indices by component
    const groups = {};
    for (let i = 0; i < n; i++) {
        const r = find(i);
        if (!groups[r]) groups[r] = [];
        groups[r].push(i);
    }

    // For each component, collect values, sort desc
    // Assign largest to even indices, smallest to odd indices
    const result = new Array(n);
    for (const key in groups) {
        const indices = groups[key];
        const vals = indices.map(i => nums[i]).sort((a, b) => b - a);
        const evenIdx = indices.filter(i => i % 2 === 0).sort((a, b) => a - b);
        const oddIdx = indices.filter(i => i % 2 === 1).sort((a, b) => a - b);
        let vi = 0;
        for (const idx of evenIdx) result[idx] = vals[vi++];
        for (const idx of oddIdx) result[idx] = vals[vi++];
    }

    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i % 2 === 0 ? result[i] : -result[i];
    }
    return sum;
};
// @lc code=end

// TEST:
console.log(maxAlternatingSum([1,2,3], [[0,2],[1,2]])); // 4
console.log(maxAlternatingSum([1,2,3], [[1,2]])); // 2
console.log(maxAlternatingSum([1,1000000000,1,1000000000,1,1000000000], [])); // -2999999997
