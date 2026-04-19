/*
 * @lc app=leetcode id=1632 lang=javascript
 *
 * [1632] Rank Transform of a Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var matrixRankTransform = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    const cells = [];
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
            cells.push([matrix[i][j], i, j]);
    cells.sort((a, b) => a[0] - b[0]);

    const ans = Array.from({ length: m }, () => new Int32Array(n));
    const maxRow = new Int32Array(m);
    const maxCol = new Int32Array(n);

    // Union-Find
    const parent = new Int32Array(m + n);
    const rank_ = new Int32Array(m + n);
    const find = (x) => {
        while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; }
        return x;
    };
    const union = (a, b) => {
        a = find(a); b = find(b);
        if (a === b) return;
        if (rank_[a] < rank_[b]) [a, b] = [b, a];
        parent[b] = a;
        if (rank_[a] === rank_[b]) rank_[a]++;
    };

    let i = 0;
    while (i < cells.length) {
        const val = cells[i][0];
        const group = [];
        while (i < cells.length && cells[i][0] === val) {
            group.push(cells[i]);
            i++;
        }

        // Reset UF
        const used = new Set();
        for (const [, r, c] of group) {
            const id = r;
            if (!used.has(id)) { parent[id] = id; rank_[id] = 0; used.add(id); }
            const id2 = m + c;
            if (!used.has(id2)) { parent[id2] = id2; rank_[id2] = 0; used.add(id2); }
        }
        // Union same row or column
        for (const [, r, c] of group) {
            union(r, m + c);
        }

        // Group by component, compute rank
        const compMap = new Map();
        for (const [, r, c] of group) {
            const root = find(r);
            if (!compMap.has(root)) compMap.set(root, []);
            compMap.get(root).push([r, c]);
        }

        for (const [, members] of compMap) {
            let r = 0;
            for (const [row, col] of members) {
                r = Math.max(r, maxRow[row], maxCol[col]);
            }
            r++;
            for (const [row, col] of members) {
                ans[row][col] = r;
                maxRow[row] = r;
                maxCol[col] = r;
            }
        }
    }

    return ans;
};
// @lc code=end

// TEST:
const print = (m) => JSON.stringify(m);
console.log(print(matrixRankTransform([[1,2],[3,4]]))); // [[1,2],[2,3]]
console.log(print(matrixRankTransform([[7,7],[7,7]]))); // [[1,1],[1,1]]
console.log(print(matrixRankTransform([[20,-21,14],[-19,4,19],[22,-47,24],[-19,4,19]]))); // [[4,2,3],[1,3,4],[5,1,6],[1,3,4]]
console.log(print(matrixRankTransform([[7,3,6],[1,2,5]]))); // [[5,3,4],[1,2,3]]
console.log(print(matrixRankTransform([[-37]]))); // [[1]]
