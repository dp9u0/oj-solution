/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  heights[-1] = 0;
  const map = { "0": { area: 0, begin: 0 } };
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    const h = heights[i];
    const preH = heights[i - 1];
    const preData = map[preH];
    if (h >= preH) {
      map[preH].area += preH;
    } else {
      map[preH] = null;
    }
    if (h === preH) continue;
    let data = map[h];
    if (data) {
      data.area += h;
    } else {
      if (h < preH) {
        data = { area: (i - preData.begin + 1) * h, begin: preData.begin };
      } else if (h > preH) {
        data = { area: h, begin: i }
      }
      map[h] = data;
    }
    maxArea = Math.max(maxArea, preData.area, data.area)
  }
  return maxArea;
};


// TEST:
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))
console.log(largestRectangleArea([1, 1]))
console.log(largestRectangleArea([]))
console.log(largestRectangleArea([0, 0, 0, 0]))
console.log(largestRectangleArea([1, 2, 3, 4, 5]))
