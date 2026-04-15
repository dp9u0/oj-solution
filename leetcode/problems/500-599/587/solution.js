/*
 * @lc app=leetcode id=587 lang=javascript
 *
 * [587] Erect the Fence
 */

// @lc code=start
/**
 * @param {number[][]} trees
 * @return {number[][]}
 */
var outerTrees = function(trees) {
    const n = trees.length;
    if (n <= 1) return trees;

    trees.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    const cross = (O, A, B) => (A[0] - O[0]) * (B[1] - O[1]) - (A[1] - O[1]) * (B[0] - O[0]);

    const lower = [];
    for (const p of trees) {
        while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) < 0) {
            lower.pop();
        }
        lower.push(p);
    }

    const upper = [];
    for (let i = n - 1; i >= 0; i--) {
        const p = trees[i];
        while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p) < 0) {
            upper.pop();
        }
        upper.push(p);
    }

    const seen = new Set();
    const result = [];
    for (const p of [...lower, ...upper]) {
        const key = p[0] * 1000 + p[1];
        if (!seen.has(key)) {
            seen.add(key);
            result.push(p);
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(outerTrees([[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]))); // [[1,1],[2,0],[4,2],[3,3],[2,4]] (any order)
console.log(JSON.stringify(outerTrees([[1,2],[2,2],[4,2]]))); // [[1,2],[2,2],[4,2]] (any order)
