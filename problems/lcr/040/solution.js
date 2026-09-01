/*
 * @lc app=leetcode.cn id=LCR 040 lang=javascript
 *
 * [LCR 040] 最大矩形
 */

// @lc code=start
/**
 * @param {string[]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  if (!matrix.length || !matrix[0].length) return 0;

  const rows = matrix.length;
  const cols = matrix[0].length;
  const heights = new Array(cols).fill(0);
  let maxArea = 0;

  for (let i = 0; i < rows; i++) {
    // Update histogram heights
    for (let j = 0; j < cols; j++) {
      heights[j] = matrix[i][j] === '1' ? heights[j] + 1 : 0;
    }
    // Largest rectangle in histogram via monotonic stack
    const stack = [];
    for (let j = 0; j <= cols; j++) {
      const h = j === cols ? 0 : heights[j];
      while (stack.length && heights[stack[stack.length - 1]] >= h) {
        const idx = stack.pop();
        const left = stack.length ? stack[stack.length - 1] : -1;
        maxArea = Math.max(maxArea, heights[idx] * (j - left - 1));
      }
      stack.push(j);
    }
  }

  return maxArea;
};
// @lc code=end

// TEST:
// Example 1
console.log(maximalRectangle(["10100", "10111", "11111", "10010"]) === 6);
// Example 2
console.log(maximalRectangle([]) === 0);
// Example 3
console.log(maximalRectangle(["0"]) === 0);
// Example 4
console.log(maximalRectangle(["1"]) === 1);
// Example 5
console.log(maximalRectangle(["00"]) === 0);
// Single column
console.log(maximalRectangle(["1", "1", "0", "1", "1"]) === 2);
// Full block
console.log(maximalRectangle(["11", "11"]) === 4);
// Row with a gap breaks the histogram
console.log(maximalRectangle(["111", "101"]) === 3);
