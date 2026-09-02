/*
 * @lc app=leetcode.cn id=LCR 039 lang=javascript
 *
 * [LCR 039] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let maxArea = 0;
  const stack = [];

  for (let i = 0; i <= heights.length; i++) {
    // 末尾追加高度 0 的哨兵，保证最后栈内元素全部被弹出
    const curHeight = i === heights.length ? 0 : heights[i];

    while (stack.length && curHeight < heights[stack[stack.length - 1]]) {
      const top = stack.pop();
      const height = heights[top];
      const leftBoundary = stack.length ? stack[stack.length - 1] : -1;
      const width = i - leftBoundary - 1;
      maxArea = Math.max(maxArea, height * width);
    }

    stack.push(i);
  }

  return maxArea;
};
// @lc code=end

// TEST:
const testCases = [
  { input: [[2, 1, 5, 6, 2, 3]], expected: 10 },
  { input: [[2, 4]], expected: 4 },
  { input: [[1]], expected: 1 },
  { input: [[2, 1, 2]], expected: 3 },
  { input: [[0]], expected: 0 },
  { input: [[6, 7, 5, 2, 4, 5, 9, 3]], expected: 16 },
  { input: [[4, 2, 0, 3, 2, 5]], expected: 6 },
];

testCases.forEach(({ input, expected }, index) => {
  const result = largestRectangleArea(...input);
  const passed = result === expected;
  console.log(`Test ${index + 1}: ${passed ? 'PASS' : 'FAIL'}`);
  console.log(`  input: [${input[0]}]`);
  console.log(`  expected: ${expected}, got: ${result}`);
});
