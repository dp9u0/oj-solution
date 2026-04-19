/*
 * @lc app=leetcode id=1030 lang=javascript
 *
 * [1030] Matrix Cells in Distance Order
 */

// @lc code=start
/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    const result = [];
    const visited = Array.from({length: rows}, () => new Uint8Array(cols));
    const queue = [[rCenter, cCenter]];
    visited[rCenter][cCenter] = 1;
    let head = 0;
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    while (head < queue.length) {
        const [r, c] = queue[head++];
        result.push([r, c]);
        for (const [dr, dc] of dirs) {
            const nr = r + dr, nc = c + dc;
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !visited[nr][nc]) {
                visited[nr][nc] = 1;
                queue.push([nr, nc]);
            }
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(allCellsDistOrder(1, 2, 0, 0))); // [[0,0],[0,1]]
console.log(JSON.stringify(allCellsDistOrder(2, 2, 0, 1))); // [[0,1],[0,0],[1,1],[1,0]]
console.log(JSON.stringify(allCellsDistOrder(2, 3, 1, 2))); // [[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]
console.log(JSON.stringify(allCellsDistOrder(1, 1, 0, 0))); // [[0,0]]
console.log(JSON.stringify(allCellsDistOrder(3, 3, 1, 1))); // center
