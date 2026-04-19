/*
 * @lc app=leetcode id=1465 lang=javascript
 *
 * [1465] Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts
 */

// @lc code=start
/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
  const MOD = 1e9 + 7;
  horizontalCuts.sort((a, b) => a - b);
  verticalCuts.sort((a, b) => a - b);

  let maxH = Math.max(horizontalCuts[0], h - horizontalCuts[horizontalCuts.length - 1]);
  for (let i = 1; i < horizontalCuts.length; i++) {
    maxH = Math.max(maxH, horizontalCuts[i] - horizontalCuts[i - 1]);
  }

  let maxW = Math.max(verticalCuts[0], w - verticalCuts[verticalCuts.length - 1]);
  for (let i = 1; i < verticalCuts.length; i++) {
    maxW = Math.max(maxW, verticalCuts[i] - verticalCuts[i - 1]);
  }

  return Number((BigInt(maxH) * BigInt(maxW)) % BigInt(MOD));
};
// @lc code=end

// TEST:
console.log(maxArea(5, 4, [1, 2, 4], [1, 3])); // 4
console.log(maxArea(5, 4, [3, 1], [1])); // 6
console.log(maxArea(5, 4, [3], [3])); // 9
