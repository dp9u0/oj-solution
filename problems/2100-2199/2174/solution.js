/*
 * @lc app=leetcode.cn id=2174 lang=javascript
 *
 * [2174] 通过翻转行或列来去除所有的 1 II
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var removeOnes = function(grid) {
    const m = grid.length, n = grid[0].length;
    let full = 0;
    for (let i = 0; i < m * n; i++) {
        if (grid[(i / n) | 0][i % n] === 1) full |= 1 << i;
    }
    const memo = new Map();
    const clearMask = (mask, cell) => {
        const r = (cell / n) | 0, c = cell % n;
        let out = mask;
        for (let i = 0; i < m; i++) out &= ~(1 << (i * n + c));
        for (let j = 0; j < n; j++) out &= ~(1 << (r * n + j));
        return out;
    };
    const dfs = (mask) => {
        if (mask === 0) return 0;
        if (memo.has(mask)) return memo.get(mask);
        let best = Infinity;
        let rest = mask;
        while (rest) {
            const cell = 31 - Math.clz32(rest & (-rest));
            rest &= rest - 1;
            const ops = 1 + dfs(clearMask(mask, cell));
            if (ops < best) best = ops;
        }
        memo.set(mask, best);
        return best;
    };
    return dfs(full);
};
// @lc code=end

// TEST:
console.log(removeOnes([[1,1,1],[1,1,1],[0,1,0]])); // 2
console.log(removeOnes([[0,1,0],[1,0,1],[0,1,0]])); // 2
console.log(removeOnes([[0,0],[0,0]])); // 0
console.log(removeOnes([[1]])); // 1
console.log(removeOnes([[1,0],[0,1]])); // 2 (two disjoint 1s need separate ops)
