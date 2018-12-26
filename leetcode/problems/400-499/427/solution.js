/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function (grid, row = 0, col = 0, length = grid.length) {
  if (isLeaf(grid, row, col, length))
    return new Node(grid[row][col], true);
  let res = new Node(true, false);
  let half = Math.floor(length / 2);
  res.topLeft = construct(grid, row, col, half);
  res.topRight = construct(grid, row, col + half, half);
  res.bottomLeft = construct(grid, row + half, col, half);
  res.bottomRight = construct(grid, row + half, col + half, half);
  return res;
};
var isLeaf = function (grid, row, col, length) {
  let rowLength = length + row,
    colLength = length + col;
  let val = grid[row][col];
  for (let i = row; i < rowLength; i++) {
    for (let j = col; j < colLength; j++) {
      if (val !== grid[i][j]) return false;
    }
  }
  return true;
};