/*
 * @lc app=leetcode.cn id=LCR 144 lang=javascript
 *
 * [LCR 144] 翻转二叉树
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
var flipTree = function(root) {
  if (!root) return null;
  const tmp = flipTree(root.left);
  root.left = flipTree(root.right);
  root.right = tmp;
  return root;
};
// @lc code=end

// TEST:
const assert = require('assert');
const { arrayToTree, treeToArray } = require('./utils/arrayToTree');

const t = (arr) => treeToArray(flipTree(arrayToTree(arr)));

assert.deepStrictEqual(t([5, 7, 9, 8, 3, 2, 4]), [5, 9, 7, 4, 2, 3, 8]);
assert.deepStrictEqual(t([]), [null]);
assert.strictEqual(flipTree(null), null);
assert.deepStrictEqual(t([1]), [1]);
assert.deepStrictEqual(t([1, 2]), [1, null, 2]);
assert.deepStrictEqual(t([1, 2, 3]), [1, 3, 2]);

console.log('All tests passed!');
console.log('t([5,7,9,8,3,2,4]) =', JSON.stringify(t([5, 7, 9, 8, 3, 2, 4])));
