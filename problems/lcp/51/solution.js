/*
 * @lc app=leetcode.cn id=LCP 51 lang=javascript
 *
 * [LCP 51] 烹饪料理
 */

// @lc code=start
/**
 * @param {number[]} materials
 * @param {number[][]} cookbooks
 * @param {number[][]} attribute
 * @param {number} limit
 * @return {number}
 */
var perfectMenu = function(materials, cookbooks, attribute, limit) {
  const d = cookbooks.length;
  let best = -1;
  const used = new Array(5).fill(0);
  // backtrack over dish index, accumulate satiety & deliciousness
  const dfs = (idx, satiety, delicious) => {
    if (idx === d) {
      if (satiety >= limit && delicious > best) best = delicious;
      return;
    }
    // option: don't cook dish idx
    dfs(idx + 1, satiety, delicious);
    // option: cook dish idx if materials suffice
    const req = cookbooks[idx];
    let ok = true;
    for (let j = 0; j < 5; j++) {
      if (used[j] + req[j] > materials[j]) { ok = false; break; }
    }
    if (ok) {
      for (let j = 0; j < 5; j++) used[j] += req[j];
      dfs(idx + 1, satiety + attribute[idx][1], delicious + attribute[idx][0]);
      for (let j = 0; j < 5; j++) used[j] -= req[j];
    }
  };
  dfs(0, 0, 0);
  return best;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(
  perfectMenu([3, 2, 4, 1, 2], [[1, 1, 0, 1, 2], [2, 1, 4, 0, 0], [3, 2, 4, 1, 0]], [[3, 2], [2, 4], [7, 6]], 5),
  7
);
assert.strictEqual(
  perfectMenu([10, 10, 10, 10, 10], [[1, 1, 1, 1, 1], [3, 3, 3, 3, 3], [10, 10, 10, 10, 10]], [[5, 5], [6, 6], [10, 10]], 1),
  11
);
// cannot reach limit
assert.strictEqual(perfectMenu([0, 0, 0, 0, 0], [[1, 0, 0, 0, 0]], [[1, 100]], 5), -1);
// no dishes available
assert.strictEqual(perfectMenu([5, 5, 5, 5, 5], [[10, 10, 10, 10, 10]], [[10, 10]], 1), -1);

console.log('All tests passed!');
console.log('perfectMenu ex1 =', perfectMenu([3, 2, 4, 1, 2], [[1, 1, 0, 1, 2], [2, 1, 4, 0, 0], [3, 2, 4, 1, 0]], [[3, 2], [2, 4], [7, 6]], 5));
