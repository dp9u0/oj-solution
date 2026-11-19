/*
 * @lc app=leetcode.cn id=711 lang=javascript
 *
 * [711] 不同岛屿的数量 II
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands2 = function(grid) {
    const m = grid.length, n = grid[0].length;
    const seen = new Set();
    const shapes = new Set();
    const dfs = (i, j, cells) => {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] !== 1 || seen.has(i * n + j)) return;
        seen.add(i * n + j);
        cells.push([i, j]);
        dfs(i + 1, j, cells);
        dfs(i - 1, j, cells);
        dfs(i, j + 1, cells);
        dfs(i, j - 1, cells);
    };

    // all rotations + reflections
    const transforms = [
        (x, y) => [x, y], (x, y) => [x, -y], (x, y) => [-x, y], (x, y) => [-x, -y],
        (x, y) => [y, x], (x, y) => [y, -x], (x, y) => [-y, x], (x, y) => [-y, -x],
    ];
    const norm = pts => {
        let minX = Infinity, minY = Infinity;
        for (const [x, y] of pts) {
            if (x < minX) minX = x;
            if (y < minY) minY = y;
        }
        const shifted = pts.map(([x, y]) => [x - minX, y - minY]);
        shifted.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
        return shifted.map(p => p.join(',')).join(';');
    };
    const canon = cells => {
        let best = null;
        for (const t of transforms) {
            const s = norm(cells.map(([x, y]) => t(x, y)));
            if (best === null || s < best) best = s;
        }
        return best;
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1 && !seen.has(i * n + j)) {
                const cells = [];
                dfs(i, j, cells);
                shapes.add(canon(cells));
            }
        }
    }
    return shapes.size;
};
// @lc code=end

// TEST:
console.log(numDistinctIslands2([[1,1,0,0,0],[1,0,0,0,0],[0,0,0,0,1],[0,0,0,1,1]])); // 1 (rot180 equal)
console.log(numDistinctIslands2([[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]])); // 1
console.log(numDistinctIslands2([[1]])); // 1
console.log(numDistinctIslands2([[0]])); // 0
console.log(numDistinctIslands2([[1,0],[1,1]])); // 1 (L vs its mirror)
console.log(numDistinctIslands2([[1,1,1,0,0],[0,1,0,0,0],[1,1,1,0,0],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,0,0]])); // 2 (T vs L)
