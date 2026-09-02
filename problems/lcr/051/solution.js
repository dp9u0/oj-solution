/*
 * @lc app=leetcode.cn id=LCR 051 lang=javascript
 *
 * [LCR 051] 二叉树中的最大路径和
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
 * @return {number}
 */
var maxPathSum = function(root) {
  let best = -Infinity;
  const gain = (node) => {
    if (!node) return 0;
    const left = Math.max(0, gain(node.left));
    const right = Math.max(0, gain(node.right));
    best = Math.max(best, node.val + left + right);
    return node.val + Math.max(left, right);
  };
  gain(root);
  return best;
};
// @lc code=end

// TEST:
const assert = require('assert');
const { arrayToTree } = require('./utils/arrayToTree');

const t = (arr) => maxPathSum(arrayToTree(arr));

assert.strictEqual(t([1, 2, 3]), 6);
assert.strictEqual(t([-10, 9, 20, null, null, 15, 7]), 42);
assert.strictEqual(t([1]), 1);
assert.strictEqual(t([-3]), -3);
assert.strictEqual(t([-10, -9, -20]), -9);
assert.strictEqual(t([2, -1]), 2);
assert.strictEqual(t([1, -2, 3]), 4); // path 1+3

console.log('All tests passed!');
console.log('t([1,2,3]) =', t([1, 2, 3]));
