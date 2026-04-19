/*
 * @lc app=leetcode id=794 lang=javascript
 *
 * [794] Valid Tic-Tac-Toe State
 */

// @lc code=start
/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function(board) {
    let xCount = 0, oCount = 0;
    for (const row of board) {
        for (const ch of row) {
            if (ch === 'X') xCount++;
            else if (ch === 'O') oCount++;
        }
    }

    if (oCount !== xCount && oCount !== xCount - 1) return false;

    const wins = (c) => {
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === c && board[i][1] === c && board[i][2] === c) return true;
            if (board[0][i] === c && board[1][i] === c && board[2][i] === c) return true;
        }
        if (board[0][0] === c && board[1][1] === c && board[2][2] === c) return true;
        if (board[0][2] === c && board[1][1] === c && board[2][0] === c) return true;
        return false;
    };

    const xWins = wins('X');
    const oWins = wins('O');

    if (xWins && xCount !== oCount + 1) return false;
    if (oWins && xCount !== oCount) return false;

    return true;
};
// @lc code=end

// TEST:
console.log(validTicTacToe(["O  ","   ","   "])); // false
console.log(validTicTacToe(["XOX"," X ","   "])); // false
console.log(validTicTacToe(["XOX","O O","XOX"])); // true
