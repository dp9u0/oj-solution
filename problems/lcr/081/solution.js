/*
 * @lc app=leetcode.cn id=LCR 081 lang=javascript
 *
 * [LCR 081] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const res = [];
  const path = [];
  const dfs = (start, remain) => {
    if (remain === 0) {
      res.push(path.slice());
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      const v = candidates[i];
      if (v > remain) continue;
      path.push(v);
      dfs(i, remain - v); // reuse same i allowed
      path.pop();
    }
  };
  dfs(0, target);
  return res;
};
// @lc code=end

// TEST:
const assert = require('assert');

const sorted = (arr) => arr.map(c => c.join(',')).sort();
assert.deepStrictEqual(sorted(combinationSum([2, 3, 6, 7], 7)), sorted([[7], [2, 2, 3]]));
assert.deepStrictEqual(sorted(combinationSum([2, 3, 5], 8)), sorted([[2, 2, 2, 2], [2, 3, 3], [3, 5]]));
assert.deepStrictEqual(combinationSum([2], 1), []);
assert.deepStrictEqual(sorted(combinationSum([1], 1)), sorted([[1]]));
assert.deepStrictEqual(sorted(combinationSum([1], 2)), sorted([[1, 1]]));
assert.deepStrictEqual(sorted(combinationSum([3, 4], 7)), sorted([[3, 4]]));
assert.deepStrictEqual(combinationSum([5], 3), []);

console.log('All tests passed!');