/*
 * @lc app=leetcode.cn id=面试题 16.04 lang=javascript
 *
 * [面试题 16.04] 井字游戏
 */

// @lc code=start
/**
 * @param {string[]} board
 * @return {string}
 */
var tictactoe = function(board) {
    const n = board.length;
    // 全等且非空的一串即胜者
    const lineWin = cells => cells.every(c => c !== ' ' && c === cells[0]);
    for (let i = 0; i < n; i++) {
        if (lineWin([...board[i]])) return board[i][0];
        const col = [];
        for (let j = 0; j < n; j++) col.push(board[j][i]);
        if (lineWin(col)) return col[0];
    }
    const d1 = [];
    const d2 = [];
    for (let i = 0; i < n; i++) {
        d1.push(board[i][i]);
        d2.push(board[i][n - 1 - i]);
    }
    if (lineWin(d1)) return d1[0];
    if (lineWin(d2)) return d2[0];
    // 无胜者：有空位则未结束
    for (const row of board) {
        if (row.includes(' ')) return 'Pending';
    }
    return 'Draw';
};
// @lc code=end

// TEST:
console.log(tictactoe(['O X', ' XO', 'X O']) === 'X');
console.log(tictactoe(['OOX', 'XXO', 'OXO']) === 'Draw');
console.log(tictactoe(['OOX', 'XXO', 'OX ']) === 'Pending');
console.log(tictactoe(['X']) === 'X');
console.log(tictactoe([' ']) === 'Pending');
console.log(tictactoe(['OOOO', '    ', '    ', '    ']) === 'O'); // N=4 行胜
