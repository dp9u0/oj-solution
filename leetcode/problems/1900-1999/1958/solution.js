/*
 * @lc app=leetcode id=1958 lang=javascript
 *
 * [1958] Check if Move is Legal
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {number} rMove
 * @param {number} cMove
 * @param {character} color
 * @return {boolean}
 */
var checkMove = function(board, rMove, cMove, color) {
    let dirs = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
    let opp = color === 'B' ? 'W' : 'B';
    for (let [dr, dc] of dirs) {
        let r = rMove + dr, c = cMove + dc;
        let count = 0;
        while (r >= 0 && r < 8 && c >= 0 && c < 8 && board[r][c] === opp) {
            count++;
            r += dr;
            c += dc;
        }
        if (count > 0 && r >= 0 && r < 8 && c >= 0 && c < 8 && board[r][c] === color) {
            return true;
        }
    }
    return false;
};
// @lc code=end

// TEST:
let board1 = [[".",".",".","B",".",".",".","."],[".",".",".","W",".",".",".","."],[".",".",".","W",".",".",".","."],[".",".",".","W",".",".",".","."],["W","B","B",".","W","W","W","B"],[".",".",".","B",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","W",".",".",".","."]];
console.log(checkMove(board1, 4, 3, 'B')); // true

let board2 = [[".",".",".",".",".",".",".","."],[".","B",".",".","W",".",".","."],[".",".","W",".",".",".",".","."],[".",".",".","W","B",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".","B","W",".","."],[".",".",".",".",".","W",".","."],[".",".",".",".",".",".","B","."]];
console.log(checkMove(board2, 4, 4, 'W')); // false
