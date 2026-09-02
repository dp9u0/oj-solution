/*
 * @lc app=leetcode.cn id=LCR 084 lang=javascript
 *
 * [LCR 084] 全排列 II 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const used = new Array(n).fill(false);
  const res = [];
  const path = [];
  const dfs = () => {
    if (path.length === n) {
      res.push(path.slice());
      return;
    }
    for (let i = 0; i < n; i++) {
      if (used[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
      used[i] = true;
      path.push(nums[i]);
      dfs();
      path.pop();
      used[i] = false;
    }
  };
  dfs();
  return res;
};
// @lc code=end

// TEST:
const assert = require('assert');

const sortPerms = (arr) => arr.map(p => p.join(',')).sort();
assert.deepStrictEqual(sortPerms(permuteUnique([1, 1, 2])), sortPerms([[1, 1, 2], [1, 2, 1], [2, 1, 1]]));
assert.strictEqual(permuteUnique([1, 1, 2]).length, 3);
assert.strictEqual(permuteUnique([1, 2, 3]).length, 6);
assert.strictEqual(permuteUnique([1, 1]).length, 1);
assert.strictEqual(permuteUnique([1, 1, 1]).length, 1);
assert.strictEqual(permuteUnique([2, 2, 1, 1]).length, 6);
assert.deepStrictEqual(permuteUnique([1]), [[1]]);

console.log('All tests passed!');