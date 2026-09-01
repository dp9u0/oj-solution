/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const process = (board, i, j) => {
    if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) return;
    if (board[i][j] != "O") return;
    if (board[i][j] == "O") board[i][j] = "#";
    process(board, i, j + 1);
    process(board, i, j - 1);
    process(board, i + 1, j);
    process(board, i - 1, j);
  }
  if (board.length == 0) return board;
  let innerlength = board[0].length;
  for (let i = 0; i < board.length; i++) {
    if (i == 0 || i == board.length - 1) {
      for (let j = 0; j < innerlength; j++) {
        if (board[i][j] == "O") {
          process(board, i, j);
        }
      }
    } else {
      if (board[i][0] == "O") {
        process(board, i, 0)
      }
      if (board[i][innerlength - 1] == "O") {
        process(board, i, innerlength - 1);
      }
    }
  };
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < innerlength; j++) {
      if (board[i][j] == "O") board[i][j] = "X";
      if (board[i][j] == "#") board[i][j] = "O";
    }
  }
};