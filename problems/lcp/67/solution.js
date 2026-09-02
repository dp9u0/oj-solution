/*
 * @lc app=leetcode.cn id=LCP 67 lang=javascript
 *
 * [LCP 67] 装饰树
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
 * @return {TreeNode}
 */
var expandBinaryTree = function(root) {
  if (!root) return null;
  // left
  if (root.left) {
    const original = expandBinaryTree(root.left);
    const light = { val: -1, left: original, right: null };
    root.left = light;
  }
  // right
  if (root.right) {
    const original = expandBinaryTree(root.right);
    const light = { val: -1, left: null, right: original };
    root.right = light;
  }
  return root;
};
// @lc code=end

// TEST:
const assert = require('assert');
const { arrayToTree, treeToArray } = require('./utils/arrayToTree');

const run = (arr) => treeToArray(expandBinaryTree(arrayToTree(arr)));

assert.deepStrictEqual(run([7, 5, 6]), [7, -1, -1, 5, null, null, 6]);
assert.deepStrictEqual(
  run([3, 1, 7, 3, 8, null, 4]),
  [3, -1, -1, 1, null, null, 7, -1, -1, null, -1, 3, null, null, 8, null, 4]
);
assert.deepStrictEqual(run([1]), [1]);
assert.deepStrictEqual(run([1, 2]), [1, -1, null, 2]);
assert.deepStrictEqual(run([1, null, 2]), [1, null, -1, null, 2]);

console.log('All tests passed!');
console.log('run([7,5,6]) =', JSON.stringify(run([7, 5, 6])));
