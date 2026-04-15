/*
 * @lc app=leetcode id=2326 lang=javascript
 *
 * [2326] Spiral Matrix IV
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function(m, n, head) {
  const matrix = Array.from({ length: m }, () => Array(n).fill(-1));
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let d = 0, r = 0, c = 0;

  while (head) {
    matrix[r][c] = head.val;
    head = head.next;
    if (!head) break;
    let nr = r + dirs[d][0], nc = c + dirs[d][1];
    if (nr < 0 || nr >= m || nc < 0 || nc >= n || matrix[nr][nc] !== -1) {
      d = (d + 1) % 4;
      nr = r + dirs[d][0];
      nc = c + dirs[d][1];
    }
    r = nr;
    c = nc;
  }

  return matrix;
};
// @lc code=end

// TEST:
const { arrayToLinkList } = require('./utils/arrayToLinkList');
console.log(JSON.stringify(spiralMatrix(3, 5, arrayToLinkList([3,0,2,6,8,1,7,9,4,2,5,5,0]))));
// [[3,0,2,6,8],[5,0,-1,-1,1],[5,2,4,9,7]]
console.log(JSON.stringify(spiralMatrix(1, 4, arrayToLinkList([0,1,2]))));
// [[0,1,2,-1]]
