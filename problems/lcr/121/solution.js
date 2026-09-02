/*
 * @lc app=leetcode.cn id=LCR 121 lang=javascript
 *
 * [LCR 121] 寻找目标值 - 二维数组
 */

// @lc code=start
/**
 * @param {number[][]} plants
 * @param {number} target
 * @return {boolean}
 */
var findTargetIn2DPlants = function(plants, target) {
  if (!plants.length || !plants[0].length) return false;
  const rows = plants.length;
  const cols = plants[0].length;
  let r = 0;
  let c = cols - 1;
  while (r < rows && c >= 0) {
    const v = plants[r][c];
    if (v === target) return true;
    if (v > target) c--;
    else r++;
  }
  return false;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(findTargetIn2DPlants([[2, 3, 6, 8], [4, 5, 8, 9], [5, 9, 10, 12]], 8), true);
assert.strictEqual(findTargetIn2DPlants([[1, 3, 5], [2, 5, 7]], 4), false);
assert.strictEqual(findTargetIn2DPlants([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 9), true);
assert.strictEqual(findTargetIn2DPlants([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1), true);
assert.strictEqual(findTargetIn2DPlants([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 0), false);
assert.strictEqual(findTargetIn2DPlants([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 10), false);
// single row
assert.strictEqual(findTargetIn2DPlants([[1, 3, 5]], 3), true);
// single col
assert.strictEqual(findTargetIn2DPlants([[1], [2], [3]], 2), true);
// empty
assert.strictEqual(findTargetIn2DPlants([], 1), false);
assert.strictEqual(findTargetIn2DPlants([[]], 1), false);

console.log('All tests passed!');
console.log('findTargetIn2DPlants([[2,3,6,8],[4,5,8,9],[5,9,10,12]], 8) =', findTargetIn2DPlants([[2, 3, 6, 8], [4, 5, 8, 9], [5, 9, 10, 12]], 8));
