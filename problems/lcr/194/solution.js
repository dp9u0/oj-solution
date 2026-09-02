/*
 * @lc app=leetcode.cn id=LCR 194 lang=javascript
 *
 * [LCR 194] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root;
  return left || right;
};
// @lc code=end

// TEST:
const assert = require('assert');
const { arrayToTree } = require('./utils/arrayToTree');

function findByVal(root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  return findByVal(root.left, val) || findByVal(root.right, val);
}
const run = (arr, pv, qv) => {
  const root = arrayToTree(arr);
  return lowestCommonAncestor(root, findByVal(root, pv), findByVal(root, qv)).val;
};

assert.strictEqual(run([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 1), 3);
assert.strictEqual(run([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 4), 5);
assert.strictEqual(run([1, 2, 3], 2, 3), 1);
assert.strictEqual(run([1, 2, null], 2, 2), 2); // p === ancestor self

console.log('All tests passed!');
