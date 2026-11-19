/*
 * @lc app=leetcode.cn id=1102 lang=javascript
 *
 * [1102] 得分最高的路径
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumMinimumPath = function(grid) {
    const m = grid.length, n = grid[0].length;
    const cells = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) cells.push([grid[i][j], i, j]);
    }
    cells.sort((a, b) => b[0] - a[0]); // activate from highest value down

    const parent = Array.from({ length: m * n }, (_, i) => i);
    const find = (x) => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    };

    const active = new Array(m * n).fill(false);
    const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const end = m * n - 1;
    for (const [v, i, j] of cells) {
        const id = i * n + j;
        active[id] = true;
        for (const [di, dj] of DIRS) {
            const ni = i + di, nj = j + dj;
            if (ni < 0 || ni >= m || nj < 0 || nj >= n) continue;
            const nid = ni * n + nj;
            if (!active[nid]) continue;
            const r1 = find(id), r2 = find(nid);
            if (r1 !== r2) parent[r1] = r2;
        }
        if (active[0] && find(0) === find(end)) return v;
    }
    return grid[0][0]; // unreachable for m,n >= 1 (single-cell handled above)
};
// @lc code=end

// TEST:
console.log(maximumMinimumPath([[5,4,5],[1,2,6],[7,4,6]])); // 4
console.log(maximumMinimumPath([[2,2,1,2,2,2],[1,2,2,2,1,2]])); // 2
console.log(maximumMinimumPath([[3,4,6,3,4],[0,2,1,1,7],[8,8,3,2,7],[3,2,4,9,8],[4,1,2,0,0],[4,6,5,4,3]])); // 3
console.log(maximumMinimumPath([[5]])); // 5 (single cell)
console.log(maximumMinimumPath([[0,9],[9,0]])); // 0 (every path crosses a 0)
