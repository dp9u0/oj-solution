/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
  let area = 0;
  let maxOfCol = new Array(grid[0].length).fill(0);
  grid.forEach((row, i) => {
    let rowMax = 0;
    row.forEach((el, j) => {
      if (el) {
        area++;
      }
      rowMax = Math.max(el, rowMax);
      maxOfCol[j] = Math.max(el, maxOfCol[j]);
    });
    area += rowMax;
  });
  return maxOfCol.reduce((sum, cur) => {
    return sum + cur;
  }, area);
};