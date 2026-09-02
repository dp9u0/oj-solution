/*
 * @lc app=leetcode.cn id=LCR 145 lang=javascript
 *
 * [LCR 145] 判断对称二叉树
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
 * @return {boolean}
 */
var checkSymmetricTree = function(root) {
  if (!root) return true;
  const mirror = (a, b) => {
    if (!a && !b) return true;
    if (!a || !b) return false;
    return a.val === b.val && mirror(a.left, b.right) && mirror(a.right, b.left);
  };
  return mirror(root.left, root.right);
};
// @lc code=end

// TEST:
const assert = require('assert');
const { arrayToTree } = require('./utils/arrayToTree');

const t = (arr) => checkSymmetricTree(arrayToTree(arr));

assert.strictEqual(t([6, 7, 7, 8, 9, 9, 8]), true);
assert.strictEqual(t([1, 2, 2, null, 3, null, 3]), false);
assert.strictEqual(t([]), true);
assert.strictEqual(t([1]), true);
assert.strictEqual(t([1, 2, 2, 3, 4, 4, 3]), true);
assert.strictEqual(t([1, 2, 2, null, 3, 3]), true);

console.log('All tests passed!');
