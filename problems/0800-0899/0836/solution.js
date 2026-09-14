/*
 * @lc app=leetcode.cn id=836 lang=javascript
 *
 * [836] 矩形重叠
 */

// @lc code=start
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    // 重叠 ⟺ 两矩形在 x 轴与 y 轴上的投影区间都严格相交
    // x: x1 < x4 && x3 < x2    y: y1 < y4 && y3 < y2
    // 严格小于排除了仅边/角接触（面积为 0）的情况
    return rec1[0] < rec2[2] && rec2[0] < rec1[2] &&
           rec1[1] < rec2[3] && rec2[1] < rec1[3];
};
// @lc code=end

// TEST:
console.log(isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3])); // Expected: true
console.log(isRectangleOverlap([0, 0, 1, 1], [1, 0, 2, 1])); // Expected: false (edge touching)
console.log(isRectangleOverlap([0, 0, 1, 1], [2, 2, 3, 3])); // Expected: false (separated)
console.log(isRectangleOverlap([0, 0, 1, 1], [1, 1, 2, 2])); // Expected: false (corner touching)
console.log(isRectangleOverlap([-5, -5, 0, 0], [-3, -3, 2, 2])); // Expected: true (negative coords)
console.log(isRectangleOverlap([0, 0, 5, 5], [2, 2, 3, 3])); // Expected: true (rec2 fully inside rec1)
console.log(isRectangleOverlap([-1, -1, 1, 1], [-2, -2, -1, 5])); // Expected: false (left edge contact)
