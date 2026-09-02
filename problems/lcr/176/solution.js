/*
 * @lc app=leetcode.cn id=LCR 176 lang=javascript
 *
 * [LCR 176] 判断是否为平衡二叉树
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
var isBalanced = function(root) {
  const height = (node) => {
    if (!node) return 0;
    const l = height(node.left);
    if (l === -1) return -1;
    const r = height(node.right);
    if (r === -1) return -1;
    if (Math.abs(l - r) > 1) return -1;
    return Math.max(l, r) + 1;
  };
  return height(root) !== -1;
};
// @lc code=end

// TEST:
const assert = require('assert');
const { arrayToTree } = require('./utils/arrayToTree');

const t = (arr) => isBalanced(arrayToTree(arr));

assert.strictEqual(t([3, 9, 20, null, null, 15, 7]), true);
assert.strictEqual(t([1, 2, 2, 3, 3, null, null, 4, 4]), false);
assert.strictEqual(t([]), true);
assert.strictEqual(t([1]), true);
assert.strictEqual(t([1, 2]), true);
assert.strictEqual(t([1, null, 2, null, 3]), false); // right skew depth 3
assert.strictEqual(t([1, 2, 2, 3, null, null, 3, 4, null, null, 4]), false);

console.log('All tests passed!');
console.log('isBalanced([3,9,20,null,null,15,7]) =', t([3, 9, 20, null, null, 15, 7]));
