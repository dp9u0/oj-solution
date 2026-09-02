/*
 * @lc app=leetcode.cn id=LCP 29 lang=javascript
 *
 * [LCP 29] 乐团站位
 */

// @lc code=start
/**
 * 求螺旋编号 mod 9:乐器编号 = 序号 k 满足 (k-1) % 9 + 1
 * @param {number} num
 * @param {number} xPos
 * @param {number} yPos
 * @return {number}
 */
var orchestraLayout = function(num, xPos, yPos) {
  // 坐标所在环与环边长
  const layer = Math.min(xPos, yPos, num - 1 - xPos, num - 1 - yPos);
  const side = num - 2 * layer;
  const top = layer;
  const left = layer;
  const right = num - 1 - layer;
  const bottom = num - 1 - layer;

  // 环之前已填格数 = num^2 - side^2,全程 mod 9 规避大数
  const numMod = num % 9;
  const sideMod = side % 9;
  const outerMod = (((numMod * numMod) - (sideMod * sideMod)) % 9 + 9) % 9;

  // 环内偏移(以环左上为起点,顺时针:上→右→下→左)
  let inLayer;
  if (side === 1) {
    inLayer = 0;
  } else if (xPos === top) {
    inLayer = yPos - left;
  } else if (yPos === right) {
    inLayer = (side - 1) + (xPos - top);
  } else if (xPos === bottom) {
    inLayer = 2 * (side - 1) + (right - yPos);
  } else {
    inLayer = 3 * (side - 1) + (bottom - xPos);
  }

  return ((outerMod + (inLayer % 9)) % 9) + 1;
};
// @lc code=end

// TEST:
console.log(orchestraLayout(3, 0, 2)); // 3
console.log(orchestraLayout(4, 1, 2)); // 5
console.log(orchestraLayout(1, 0, 0)); // 1
console.log(orchestraLayout(5, 2, 2)); // 7  中心(第25格) => (25-1)%9+1 = 7
console.log(orchestraLayout(1000000000, 0, 0)); // 1
console.log(orchestraLayout(2, 1, 1)); // 3  2x2中(1,1)为第3格 => 3
console.log(orchestraLayout(3, 1, 1)); // 9  3x3中心(第9格) => 9
console.log(orchestraLayout(4, 0, 0)); // 1
console.log(orchestraLayout(4, 3, 3)); // 7  右下角为外环第7格 => 7
