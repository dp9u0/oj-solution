/*
 * @lc app=leetcode.cn id=LCR 083 lang=javascript
 *
 * [LCR 083] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const n = nums.length;
  const res = [];
  const used = new Array(n).fill(false);
  const path = [];

  const dfs = () => {
    if (path.length === n) {
      res.push(path.slice());
      return;
    }
    for (let i = 0; i < n; i++) {
      if (used[i]) continue;
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

const sortNested = (arr) => arr.map(a => a.join(',')).sort();
assert.deepStrictEqual(sortNested(permute([1, 2, 3])), sortNested([[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]));
assert.deepStrictEqual(sortNested(permute([0, 1])), sortNested([[0, 1], [1, 0]]));
assert.deepStrictEqual(sortNested(permute([1])), sortNested([[1]]));
// all distinct permutations of 4 elements = 24
assert.strictEqual(permute([1, 2, 3, 4]).length, 24);
// negative values still work
assert.strictEqual(permute([-1, 0, 5]).length, 6);
assert.deepStrictEqual(sortNested(permute([2])), sortNested([[2]]));
// check the actual multiset of results (unordered compare)
const four = permute([1, 2, 3, 4]);
const set = new Set(four.map(p => p.join(',')));
assert.strictEqual(set.size, 24);

console.log('All tests passed!');
console.log('permute([1,2,3]) =', JSON.stringify(permute([1, 2, 3])));
