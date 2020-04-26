/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  if (heights === null || heights.length === 0) {
    return 0;
  }
  let stack = [];
  let max = 0;
  let counter = 0;
  while (counter < heights.length) {
    // push index to stack when the current height is larger than the previous one
    if (stack.length === 0 || heights[counter] >= heights[stack[stack.length - 1]]) {
      stack.push(counter);
      counter++;
    } else {
      // calculate max value when the current height is less than the previous one
      let topStackElement = stack.pop();
      let itemHeight = heights[topStackElement];
      let wide = stack.length === 0
        ? counter
        : counter - stack[stack.length - 1] - 1;
      let area = itemHeight * wide;
      max = Math.max(area, max);
    }
  }
  // for only ladder type (increasing-only) histograms.
  while (stack.length > 0) {
    let topStackElement = stack.pop();
    let itemHeight = heights[topStackElement];
    let wide = stack.length === 0
      ? counter
      : counter - stack[stack.length - 1] - 1;
    let area = itemHeight * wide;
    max = Math.max(area, max);
  }
  return max;
};


// TEST:
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))
console.log(largestRectangleArea([1, 1]))
console.log(largestRectangleArea([]))
console.log(largestRectangleArea([0, 0, 0, 0]))
console.log(largestRectangleArea([1, 2, 3, 4, 5]))
