/*
 * @lc app=leetcode id=2732 lang=javascript
 *
 * [2732] Find a Good Subset of the Matrix
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var goodSubsetofBinaryMatrix = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const maskMap = new Map();
    for (let i = 0; i < m; i++) {
        let mask = 0;
        for (let j = 0; j < n; j++) if (grid[i][j]) mask |= (1 << j);
        if (!maskMap.has(mask)) maskMap.set(mask, []);
        maskMap.get(mask).push(i);
    }

    // k=1: all-zero row
    if (maskMap.has(0)) return [maskMap.get(0)[0]];

    const masks = [...maskMap.keys()];

    // k=2: AND = 0
    for (let i = 0; i < masks.length; i++) {
        for (let j = i + 1; j < masks.length; j++) {
            if (masks[i] & masks[j]) continue;
            const a = maskMap.get(masks[i])[0], b = maskMap.get(masks[j])[0];
            return a < b ? [a, b] : [b, a];
        }
    }

    // k=4..2n: DFS with memoization (k=3 impossible when k=2 fails)
    for (let k = 4; k <= Math.min(m, 2 * n); k++) {
        const limit = Math.floor(k / 2);
        const colSums = new Array(n).fill(0);
        const memo = new Set();
        const result = [];
        if (solveDfs(0, k, masks, maskMap, colSums, limit, n, result, memo)) {
            return result.sort((a, b) => a - b);
        }
    }

    return [];
};

const solveDfs = (idx, rem, masks, maskMap, colSums, limit, n, result, memo) => {
    if (rem === 0) return true;
    if (idx >= masks.length) return false;

    let key = idx * 1000 + rem;
    for (let j = 0; j < n; j++) key = key * (limit + 2) + colSums[j];
    if (memo.has(key)) return false;

    const mask = masks[idx];
    const rows = maskMap.get(mask);
    let maxUse = Math.min(rows.length, rem);
    for (let j = 0; j < n; j++) {
        if (mask & (1 << j)) maxUse = Math.min(maxUse, limit - colSums[j]);
    }

    for (let cnt = Math.max(0, maxUse); cnt >= 0; cnt--) {
        for (let j = 0; j < n; j++) if (mask & (1 << j)) colSums[j] += cnt;
        const startLen = result.length;
        for (let i = 0; i < cnt; i++) result.push(rows[i]);

        if (solveDfs(idx + 1, rem - cnt, masks, maskMap, colSums, limit, n, result, memo)) return true;

        result.length = startLen;
        for (let j = 0; j < n; j++) if (mask & (1 << j)) colSums[j] -= cnt;
    }

    memo.add(key);
    return false;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(goodSubsetofBinaryMatrix([[0,1,1,0],[0,0,0,1],[1,1,1,1]]))); // [0,1]
console.log(JSON.stringify(goodSubsetofBinaryMatrix([[0]]))); // [0]
console.log(JSON.stringify(goodSubsetofBinaryMatrix([[1,1,1],[1,1,1]]))); // []
console.log(JSON.stringify(goodSubsetofBinaryMatrix([[1,0],[0,1],[1,1]]))); // [0,1]
console.log(JSON.stringify(goodSubsetofBinaryMatrix([[1,1,0],[1,0,1],[0,1,1]]))); // []
