/*
 * @lc app=leetcode id=529 lang=javascript
 *
 * [529] Minesweeper
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
  const [cr, cc] = click;
  if (board[cr][cc] === 'M') {
    board[cr][cc] = 'X';
    return board;
  }

  const m = board.length, n = board[0].length;
  const dirs = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];

  const countMines = (r, c) => {
    let count = 0;
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr >= 0 && nr < m && nc >= 0 && nc < n && board[nr][nc] === 'M') count++;
    }
    return count;
  };

  const dfs = (r, c) => {
    if (r < 0 || r >= m || c < 0 || c >= n || board[r][c] !== 'E') return;
    const mines = countMines(r, c);
    if (mines > 0) {
      board[r][c] = String(mines);
    } else {
      board[r][c] = 'B';
      for (const [dr, dc] of dirs) {
        dfs(r + dr, c + dc);
      }
    }
  };

  dfs(cr, cc);
  return board;
};
// @lc code=end

// TEST:
const b1 = [['E','E','E','E','E'],['E','E','M','E','E'],['E','E','E','E','E'],['E','E','E','E','E']];
console.log(JSON.stringify(updateBoard(b1, [3,0])));
// [["B","1","E","1","B"],["B","1","M","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]]

const b2 = [['B','1','E','1','B'],['B','1','M','1','B'],['B','1','1','1','B'],['B','B','B','B','B']];
console.log(JSON.stringify(updateBoard(b2, [1,2])));
// [["B","1","E","1","B"],["B","1","X","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]]
