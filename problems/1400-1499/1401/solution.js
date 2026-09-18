/*
 * @lc app=leetcode.cn id=1401 lang=javascript
 *
 * [1401] 圆和矩形是否有重叠
 */

// @lc code=start
/**
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var checkOverlap = function (radius, xCenter, yCenter, x1, y1, x2, y2) {
  // 矩形上离圆心最近的点：把圆心坐标向矩形范围钳制
  const closestX = Math.min(Math.max(xCenter, x1), x2);
  const closestY = Math.min(Math.max(yCenter, y1), y2);
  const dx = xCenter - closestX;
  const dy = yCenter - closestY;
  // 平方距离比较，避免浮点开根号；圆心在矩形内时距离为 0，必然重叠
  return dx * dx + dy * dy <= radius * radius;
};
// @lc code=end

// TEST:
console.log(checkOverlap(1, 0, 0, 1, -1, 3, 1)); // true  示例1：相切于 (1,0)
console.log(checkOverlap(1, 1, 1, 1, -3, 2, -1)); // false 示例2：分离
console.log(checkOverlap(1, 0, 0, -1, 0, 0, 1)); // true  示例3：圆心在矩形边上
console.log(checkOverlap(1, 2, 2, 0, 0, 5, 5)); // true  圆心在矩形内部
console.log(checkOverlap(2, 10, 10, 0, 0, 3, 3)); // false 远离
console.log(checkOverlap(2, 3, 3, 0, 0, 2, 2)); // true  角落相交，距离 sqrt(2) <= 2
console.log(checkOverlap(1, 3, 3, 0, 0, 2, 2)); // false 角落分离，距离 sqrt(2) > 1
console.log(checkOverlap(2000, 0, 0, -10000, -10000, 10000, 10000)); // true 大圆包含矩形
