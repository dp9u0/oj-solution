/*
 * @lc app=leetcode.cn id=1730 lang=javascript
 *
 * [1730] 获取食物的最短路径
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var getFood = function(grid) {
    const m = grid.length, n = grid[0].length;
    const queue = [];
    let head = 0;
    for (let i = 0; i < m && queue.length === 0; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '*') {
                queue.push([i, j, 0]);
                grid[i][j] = 'X';
                break;
            }
        }
    }
    while (head < queue.length) {
        const [i, j, d] = queue[head++];
        for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
            const ni = i + di, nj = j + dj;
            if (ni < 0 || ni >= m || nj < 0 || nj >= n || grid[ni][nj] === 'X') continue;
            if (grid[ni][nj] === '#') return d + 1;
            grid[ni][nj] = 'X';
            queue.push([ni, nj, d + 1]);
        }
    }
    return -1;
};
// @lc code=end

// TEST:
const g1 = [["X","X","X","X","X","X"],["X","*","O","O","O","X"],["X","O","O","#","O","X"],["X","X","X","X","X","X"]];
const g2 = [["X","X","X","X","X"],["X","*","X","O","X"],["X","O","X","#","X"],["X","X","X","X","X"]];
const g3 = [["X","X","X","X","X","X","X","X"],["X","*","O","X","O","#","O","X"],["X","O","O","X","O","O","X","X"],["X","O","O","O","O","#","O","X"],["X","X","X","X","X","X","X","X"]];
const g4 = [["X","X","X","X","X","X","X","X"],["X","*","O","X","O","#","O","X"],["X","O","O","X","O","O","X","X"],["X","O","O","O","O","#","O","X"],["O","O","O","O","O","O","O","O"]];
console.log(getFood(g1)); // 3
console.log(getFood(g2)); // -1
console.log(getFood(g3)); // 6
console.log(getFood(g4)); // 6 (per this transcription)
