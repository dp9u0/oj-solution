/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  let size = nums.length * nums[0].length;
  if (size !== r * c) return nums;
  // 将 nums 合并为一行
  let line = nums.reduce((array, n) => array.concat(n), []);
  // 计算新的 matrix
  return [...Array(r).keys()].map(i => line.slice(i * c, (i + 1) * c));
};