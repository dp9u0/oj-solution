/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let leftMaxHeight = [];
  let length = height.length,
      leftMax = 0,
      rightMax = 0,
      trap = 0;
  // LeftMax For Each Element
  for (var leftIndex = 0; leftIndex < length; leftIndex++) {
      var element = height[leftIndex];
      leftMaxHeight[leftIndex] = leftMax;
      leftMax = Math.max(leftMax, element);
  }
  // RightMax For Each Element
  for (var rightIndex = length - 1; rightIndex >= 0; rightIndex--) {
      var element = height[rightIndex];
      currentTrap = Math.min(rightMax, leftMaxHeight[rightIndex]) - element;
      trap += currentTrap > 0 ? currentTrap : 0;
      rightMax = Math.max(rightMax, element);
  }
  return trap;
};