/*
 * @lc app=leetcode.cn id=348 lang=javascript
 *
 * [348] 设计井字棋
 */

// @lc code=start
/**
 * @param {number} n
 */
var TicTacToe = function(n) {
    this.n = n;
    // rows[player][rowIdx]: player's marks in that row (index 0 of player unused)
    this.rows = [0, Array(n).fill(0), Array(n).fill(0)];
    this.cols = [0, Array(n).fill(0), Array(n).fill(0)];
    this.diag = [0, 0, 0];     // per-player marks on the \ diagonal
    this.antiDiag = [0, 0, 0]; // per-player marks on the / diagonal
};

/**
 * @param {number} row
 * @param {number} col
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
    const n = this.n;
    if (++this.rows[player][row] === n) return player;
    if (++this.cols[player][col] === n) return player;
    if (row === col && ++this.diag[player] === n) return player;
    if (row + col === n - 1 && ++this.antiDiag[player] === n) return player;
    return 0;
};

/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */
// @lc code=end
// @lc code=end

// TEST:
const simulate = (n, moves) => {
    const g = new TicTacToe(n);
    return moves.map(([r, c, p]) => g.move(r, c, p));
};
console.log(simulate(3, [[0, 0, 1], [0, 2, 2], [2, 2, 1], [1, 1, 2], [2, 0, 1], [1, 0, 2], [2, 1, 1]]));
// [0,0,0,0,0,0,1] (p1 wins row 2 at the last move)
console.log(simulate(2, [[0, 0, 1], [1, 0, 2], [0, 1, 1]])); // [0,0,1]
console.log(simulate(3, [[0, 0, 1], [1, 1, 2], [0, 1, 1], [2, 2, 2]])); // [0,0,0,2]
console.log(simulate(1, [[0, 0, 1]])); // [1]
