/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      if (backtrace(board, y, x, word, 0)) {
        return true;
      }
    }
  }
  return false;
};


function backtrace(board, y, x, word, i) {
  if (i === word.length) {
    return true;
  }
  if (y < 0 || x < 0 || y === board.length || x === board[y].length || board[y][x] !== word[i]) {
    return false;
  }
  let temp = board[y][x];
  board[y][x] = null;
  let exist = backtrace(board, y, x + 1, word, i + 1) ||
    backtrace(board, y, x - 1, word, i + 1) ||
    backtrace(board, y + 1, x, word, i + 1) ||
    backtrace(board, y - 1, x, word, i + 1);
  board[y][x] = temp;
  return exist;
}


/**
// TEST:
let board, word;

board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
]


console.log(exist(board, 'ABCCED'))
console.log(exist(board, 'SEE'))
console.log(exist(board, 'ABCB'))
*/