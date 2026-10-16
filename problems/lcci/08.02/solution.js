/*
 * @lc app=leetcode.cn id=面试题 08.02 lang=javascript
 *
 * [面试题 08.02] 迷路的机器人
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number[][]}
 */
var pathWithObstacles = function(obstacleGrid) {
    const r = obstacleGrid.length;
    if (r === 0) return [];
    const c = obstacleGrid[0].length;
    // fail[i][j]: 从 (i,j) 无法走到终点，避免重复探索死格
    const fail = Array.from({ length: r }, () => new Uint8Array(c));
    const path = [];
    const dfs = (i, j) => {
        if (i >= r || j >= c || obstacleGrid[i][j] === 1 || fail[i][j]) return false;
        path.push([i, j]);
        if ((i === r - 1 && j === c - 1) || dfs(i, j + 1) || dfs(i + 1, j)) return true;
        fail[i][j] = 1;
        path.pop();
        return false;
    };
    return dfs(0, 0) ? path : [];
};
// @lc code=end

// TEST:
// special judge：只校验路径合法性（起点终点、相邻步进、无障碍、长度 r+c-1）
const validPath = (grid, path) => {
    const r = grid.length, c = grid[0].length;
    if (!path.length) return false;
    if (path[0][0] !== 0 || path[0][1] !== 0) return false;
    const last = path[path.length - 1];
    if (last[0] !== r - 1 || last[1] !== c - 1) return false;
    if (path.length !== r + c - 1) return false;
    for (let k = 0; k < path.length; k++) {
        const [i, j] = path[k];
        if (grid[i][j] === 1) return false;
        if (k > 0) {
            const [pi, pj] = path[k - 1];
            if (pi + pj + 1 !== i + j) return false; // 只能 +1 步进
        }
    }
    return true;
};
const g1 = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
console.log(validPath(g1, pathWithObstacles(g1)));
console.log(JSON.stringify(pathWithObstacles([[0, 1], [1, 0]])) === '[]');
console.log(JSON.stringify(pathWithObstacles([[0]])) === '[[0,0]]');
console.log(JSON.stringify(pathWithObstacles([[1]])) === '[]');
const g5 = [[0, 0, 0]];
console.log(validPath(g5, pathWithObstacles(g5)));
const g6 = Array.from({ length: 100 }, () => new Array(100).fill(0)); // 大网格不爆栈不超时
g6[99][99] = 0;
console.log(validPath(g6, pathWithObstacles(g6)));
