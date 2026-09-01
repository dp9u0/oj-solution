/*
 * @lc app=leetcode id=773 lang=javascript
 *
 * [773] Sliding Puzzle
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
  const start = board[0].join('') + board[1].join('');
  const target = '123450';
  if (start === target) return 0;
  const neighbors = [[1, 3], [0, 2, 4], [1, 5], [0, 4], [1, 3, 5], [2, 4]];
  const visited = new Set([start]);
  let queue = [start];
  let steps = 0;
  while (queue.length) {
    steps++;
    const next = [];
    for (const state of queue) {
      const zero = state.indexOf('0');
      for (const nb of neighbors[zero]) {
        const arr = state.split('');
        [arr[zero], arr[nb]] = [arr[nb], arr[zero]];
        const ns = arr.join('');
        if (ns === target) return steps;
        if (!visited.has(ns)) {
          visited.add(ns);
          next.push(ns);
        }
      }
    }
    queue = next;
  }
  return -1;
};
// @lc code=end

// TEST:
console.log(slidingPuzzle([[1, 2, 3], [4, 0, 5]]) === 1);
console.log(slidingPuzzle([[1, 2, 3], [5, 4, 0]]) === -1);
console.log(slidingPuzzle([[4, 1, 2], [5, 0, 3]]) === 5);
console.log(slidingPuzzle([[1, 2, 3], [4, 5, 0]]) === 0);
console.log(slidingPuzzle([[3, 2, 4], [1, 5, 0]]) === 14);
