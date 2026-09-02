/*
 * @lc app=leetcode.cn id=LCR 044 lang=javascript
 *
 * [LCR 044] 在每个树行中找最大值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  if (!root) return [];
  const res = [];
  let queue = [root];
  while (queue.length) {
    let levelMax = -Infinity;
    const next = [];
    for (const node of queue) {
      if (node.val > levelMax) levelMax = node.val;
      if (node.left) next.push(node.left);
      if (node.right) next.push(node.right);
    }
    res.push(levelMax);
    queue = next;
  }
  return res;
};
// @lc code=end

// TEST:
const assert = require('assert');
const { arrayToTree } = require('./utils/arrayToTree');

const t = (arr) => largestValues(arrayToTree(arr));

assert.deepStrictEqual(t([1, 3, 2, 5, 3, null, 9]), [1, 3, 9]);
assert.deepStrictEqual(t([1, 2, 3]), [1, 3]);
assert.deepStrictEqual(t([1]), [1]);
assert.deepStrictEqual(t([1, null, 2]), [1, 2]);
assert.deepStrictEqual(t([]), []);
// negative values
assert.deepStrictEqual(t([-1, -3, -2]), [-1, -2]);
// all same; layout is 3 levels (root, 2 children, left-left child)
assert.deepStrictEqual(t([5, 5, 5, 5]), [5, 5, 5]);

console.log('All tests passed!');
console.log('largestValues([1,3,2,5,3,null,9]) =', JSON.stringify(t([1, 3, 2, 5, 3, null, 9])));
