/*
 * @lc app=leetcode.cn id=LCR 080 lang=javascript
 *
 * [LCR 080] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const res = [];
  const path = [];

  const dfs = (start) => {
    if (path.length === k) {
      res.push(path.slice());
      return;
    }
    // need (k - path.length) more numbers from [start..n]
    for (let i = start; i <= n - (k - path.length) + 1; i++) {
      path.push(i);
      dfs(i + 1);
      path.pop();
    }
  };

  dfs(1);
  return res;
};
// @lc code=end

// TEST:
const assert = require('assert');

const sortPaths = (arr) => arr.map(p => p.join(',')).sort();
const combs = (n, k) => sortPaths(combine(n, k));

assert.deepStrictEqual(combs(4, 2), sortPaths([[2, 4], [3, 4], [2, 3], [1, 2], [1, 3], [1, 4]]));
assert.deepStrictEqual(combs(1, 1), sortPaths([[1]]));
assert.strictEqual(combs(5, 3).length, 10);
assert.strictEqual(combs(20, 3).length, 1140);
// k = n -> single full set
assert.deepStrictEqual(combs(3, 3), sortPaths([[1, 2, 3]]));
// k = 1 -> singletons
assert.deepStrictEqual(combs(3, 1), sortPaths([[1], [2], [3]]));
// n=4,k=3 -> 4 combinations
assert.strictEqual(combs(4, 3).length, 4);

console.log('All tests passed!');
console.log('combine(4,2) =', JSON.stringify(combine(4, 2)));
