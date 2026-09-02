/*
 * @lc app=leetcode.cn id=LCR 082 lang=javascript
 *
 * [LCR 082] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  const res = [];
  const path = [];

  const dfs = (start, remain) => {
    if (remain === 0) {
      res.push(path.slice());
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue; // dedupe at this level
      const v = candidates[i];
      if (v > remain) break; // sorted; larger won't fit
      path.push(v);
      dfs(i + 1, remain - v);
      path.pop();
    }
  };

  dfs(0, target);
  return res;
};
// @lc code=end

// TEST:
const assert = require('assert');

const sortCombs = (arr) => arr.map(c => c.join(',')).sort();
assert.deepStrictEqual(
  sortCombs(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)),
  sortCombs([[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]])
);
assert.deepStrictEqual(
  sortCombs(combinationSum2([2, 5, 2, 1, 2], 5)),
  sortCombs([[1, 2, 2], [5]])
);
// no solution
assert.deepStrictEqual(combinationSum2([2, 4, 6], 5), []);
// single target value present
assert.deepStrictEqual(sortCombs(combinationSum2([1, 2, 3], 3)), sortCombs([[3], [1, 2]]));
// duplicates do not create dup combos
assert.strictEqual(combinationSum2([1, 1, 1, 1], 2).length, 1);
assert.strictEqual(combinationSum2([1, 1], 1).length, 1);
// larger target
assert.strictEqual(combinationSum2([1, 2, 3, 6, 7], 7).length, 2);

console.log('All tests passed!');
console.log('combinationSum2([10,1,2,7,6,1,5], 8) =', JSON.stringify(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)));
