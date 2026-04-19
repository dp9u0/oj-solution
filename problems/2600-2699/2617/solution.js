/*
 * @lc app=leetcode id=2617 lang=javascript
 *
 * [2617] Minimum Number of Visited Cells in a Grid
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumVisitedCells = function(grid) {
    const m = grid.length, n = grid[0].length;
    if (m === 1 && n === 1) return 1;

    const rowNxt = new Array(m);
    for (let i = 0; i < m; i++) {
        rowNxt[i] = new Array(n + 1);
        for (let j = 0; j <= n; j++) rowNxt[i][j] = j;
    }
    const colNxt = new Array(n);
    for (let j = 0; j < n; j++) {
        colNxt[j] = new Array(m + 1);
        for (let i = 0; i <= m; i++) colNxt[j][i] = i;
    }

    const find = (arr, x) => {
        while (arr[x] !== x) {
            arr[x] = arr[arr[x]];
            x = arr[x];
        }
        return x;
    };

    rowNxt[0][0] = find(rowNxt[0], 1);
    colNxt[0][0] = find(colNxt[0], 1);

    const queue = [[0, 0]];
    let head = 0;
    let dist = 1;

    while (head < queue.length) {
        const tail = queue.length;
        dist++;
        for (; head < tail; head++) {
            const [i, j] = queue[head];
            const v = grid[i][j];
            if (v === 0) continue;

            const colHi = Math.min(n - 1, j + v);
            let k = find(rowNxt[i], j + 1);
            while (k <= colHi) {
                if (i === m - 1 && k === n - 1) return dist;
                queue.push([i, k]);
                rowNxt[i][k] = find(rowNxt[i], k + 1);
                colNxt[k][i] = find(colNxt[k], i + 1);
                k = find(rowNxt[i], k + 1);
            }

            const rowHi = Math.min(m - 1, i + v);
            k = find(colNxt[j], i + 1);
            while (k <= rowHi) {
                if (k === m - 1 && j === n - 1) return dist;
                queue.push([k, j]);
                rowNxt[k][j] = find(rowNxt[k], j + 1);
                colNxt[j][k] = find(colNxt[j], k + 1);
                k = find(colNxt[j], k + 1);
            }
        }
    }

    return -1;
};
// @lc code=end

// TEST:
console.log(minimumVisitedCells([[3,4,2,1],[4,2,3,1],[2,1,0,0],[2,4,0,0]])); // 4
console.log(minimumVisitedCells([[3,4,2,1],[4,2,1,1],[2,1,1,0],[3,4,1,0]])); // 3
console.log(minimumVisitedCells([[2,1,0],[1,0,0]])); // -1
console.log(minimumVisitedCells([[0]])); // 1
console.log(minimumVisitedCells([[1,0]])); // 2
console.log(minimumVisitedCells([[1],[1]])); // 2
