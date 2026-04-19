/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  let result = 0;
  let { i: bi, j: bj } = scan(board, v => v === 'R');
  // up
  let i = bi - 1;
  while (i > 0 && board[i][bj] === '.') { i--; }
  result = result + (board[i][bj] === 'p' ? 1 : 0);
  // down
  i = bi + 1;
  while (i < 7 && board[i][bj] === '.') { i++; }
  result = result + (board[i][bj] === 'p' ? 1 : 0);
  // left
  let j = bj - 1;
  while (j > 0 && board[bi][j] === '.') { j--; }
  result = result + (board[bi][j] === 'p' ? 1 : 0);
  // right
  j = bj + 1;
  while (j < 7 && board[bi][j] === '.') { j++; }
  result = result + (board[bi][j] === 'p' ? 1 : 0);
  return result;
};
/**
 * @param {character[][]} board
 */
const scan = (board, func) => {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (func(board[i][j], i, j)) { return { i, j } }
    }
  }
  return { i: -1, j: -1 }
}

// TEST:
let board, result;

board = [
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  [".", ".", ".", "R", ".", ".", ".", "p"],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."]
]
result = numRookCaptures(board);
console.log(result);

board = [
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", "p", "p", "p", "p", "p", ".", "."],
  [".", "p", "p", "B", "p", "p", ".", "."],
  [".", "p", "B", "R", "B", "p", ".", "."],
  [".", "p", "p", "B", "p", "p", ".", "."],
  [".", "p", "p", "p", "p", "p", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."]
]
result = numRookCaptures(board);
console.log(result);

board = [
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  ["p", "p", ".", "R", ".", "p", "B", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "B", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."]
]
result = numRookCaptures(board);
console.log(result);