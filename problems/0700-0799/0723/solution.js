/*
 * @lc app=leetcode.cn id=723 lang=javascript
 *
 * [723] 粉碎糖果
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function(board) {
    const m = board.length, n = board[0].length;
    let changed = true;
    while (changed) {
        changed = false;
        // horizontal runs of 3 -> mark negative (abs keeps cross runs simultaneous)
        for (let i = 0; i < m; i++) {
            for (let j = 0; j + 2 < n; j++) {
                const v = Math.abs(board[i][j]);
                if (v !== 0 && v === Math.abs(board[i][j + 1]) && v === Math.abs(board[i][j + 2])) {
                    board[i][j] = board[i][j + 1] = board[i][j + 2] = -v;
                    changed = true;
                }
            }
        }
        // vertical runs of 3
        for (let i = 0; i + 2 < m; i++) {
            for (let j = 0; j < n; j++) {
                const v = Math.abs(board[i][j]);
                if (v !== 0 && v === Math.abs(board[i + 1][j]) && v === Math.abs(board[i + 2][j])) {
                    board[i][j] = board[i + 1][j] = board[i + 2][j] = -v;
                    changed = true;
                }
            }
        }
        // crush marked cells
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (board[i][j] < 0) board[i][j] = 0;
            }
        }
        // gravity: compact each column downwards
        for (let j = 0; j < n; j++) {
            let write = m - 1;
            for (let i = m - 1; i >= 0; i--) {
                if (board[i][j] !== 0) board[write--][j] = board[i][j];
            }
            while (write >= 0) board[write--][j] = 0;
        }
    }
    return board;
};
// @lc code=end

// TEST:
const b1 = [[110,5,112,113,114],[210,211,5,213,214],[310,311,3,313,314],[410,411,412,5,414],[5,1,512,3,3],[610,4,1,613,614],[710,1,2,713,714],[810,1,2,1,1],[1,1,2,2,2],[4,1,4,4,1014]];
console.log(JSON.stringify(candyCrush(b1)));
// [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[110,0,0,0,114],[210,0,0,0,214],[310,0,0,113,314],[410,0,0,213,414],[610,211,112,313,614],[710,311,412,613,714],[810,411,512,713,1014]]

const b2 = [[1,3,5,5,2],[3,4,3,3,1],[3,2,4,5,2],[2,4,4,5,5],[1,4,4,1,1]];
console.log(JSON.stringify(candyCrush(b2)));
// [[1,3,0,0,0],[3,4,0,5,2],[3,2,0,3,1],[2,4,0,5,2],[1,4,3,1,1]]

const b3 = [[1,2,3],[4,5,6],[7,8,9]];
console.log(JSON.stringify(candyCrush(b3))); // unchanged (stable)

const b4 = [[1,1,1],[2,3,4],[5,6,7]];
console.log(JSON.stringify(candyCrush(b4))); // [[0,0,0],[2,3,4],[5,6,7]]

const b5 = [[1,1],[1,1],[1,1]];
console.log(JSON.stringify(candyCrush(b5))); // [[0,0],[0,0],[0,0]] (vertical 1-1-1 in each column)
