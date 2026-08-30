/*
 * @lc app=leetcode id=3899 lang=javascript
 *
 * [3899] Angles of a Triangle
 */

// @lc code=start
/**
 * @param {number[]} sides
 * @return {number[]}
 */
var internalAngles = function (sides) {
  const [a, b, c] = [...sides].sort((x, y) => x - y);
  if (a + b <= c) return [];

  const angleOf = (x, y, z) =>
    (Math.acos((y * y + z * z - x * x) / (2 * y * z)) * 180) / Math.PI;

  return [angleOf(a, b, c), angleOf(b, a, c), angleOf(c, a, b)].sort(
    (x, y) => x - y
  );
};
// @lc code=end

// TEST:
const nearlyEqual = (arr, expected) =>
  arr.length === expected.length &&
  arr.every((v, i) => Math.abs(v - expected[i]) < 1e-5);

console.log(nearlyEqual(internalAngles([3, 4, 5]), [36.8699, 53.1301, 90]));
console.log(JSON.stringify(internalAngles([2, 4, 2])) === JSON.stringify([]));
console.log(nearlyEqual(internalAngles([1, 1, 1]), [60, 60, 60]));
console.log(nearlyEqual(internalAngles([2, 2, 3]), [41.40962, 41.40962, 97.18076]));
console.log(JSON.stringify(internalAngles([1, 2, 3])) === JSON.stringify([]));
console.log(nearlyEqual(internalAngles([5, 5, 5]), [60, 60, 60]));
