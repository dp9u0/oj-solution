/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const m = board.length;
  const n = board[0].length;
  let changes = [];
  for (let i = 0; i < m; i++) {
    const row = board[i];
    for (let j = 0; j < n; j++) {
      const e = row[j];
      let lives = 0;
      let dies = 0;
      // check eight neighbors
      // up 
      if (i > 0) {
        const rowup = board[i - 1];
        if (j > 0) { lives += rowup[j - 1]; dies += 1 - rowup[j - 1]; }
        lives += rowup[j]; dies += 1 - rowup[j];
        if (j + 1 < n) { lives += rowup[j + 1]; dies += 1 - rowup[j + 1]; }
      }
      // row
      if (j > 0) { lives += row[j - 1]; dies += 1 - row[j - 1]; }
      if (j + 1 < n) { lives += row[j + 1]; dies += 1 - row[j + 1]; }
      // rowdown
      if (i + 1 < m) {
        const rowdown = board[i + 1];
        if (j > 0) { lives += rowdown[j - 1]; dies += 1 - rowdown[j - 1]; }
        lives += rowdown[j]; dies += 1 - rowdown[j];
        if (j + 1 < n) { lives += rowdown[j + 1]; dies += 1 - rowdown[j + 1]; }
      }
      // console.log({ i, j, e, lives, dies })
      if ((e === 1 && lives < 2) || (e === 1 && lives > 3) || (e === 0 && lives === 3)) { changes.push({ i, j }) }
    }
  }
  // console.log(changes)
  changes.forEach(({ i, j }) => {
    board[i][j] = 1 - board[i][j];
  });
};

// TEST:
let board, result;
board = [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]
result = gameOfLife(board)
console.log(board);

board = [[1, 1], [1, 0]]
result = gameOfLife(board)
console.log(board);

board = [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]
result = gameOfLife(board)
console.log(board);