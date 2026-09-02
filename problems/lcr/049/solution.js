/*
 * @lc app=leetcode.cn id=LCR 049 lang=javascript
 *
 * [LCR 049] 求根节点到叶节点数字之和
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
var sumNumbers = function(root) {
  let total = 0;
  const dfs = (node, cur) => {
    if (!node) return;
    const next = cur * 10 + node.val;
    if (!node.left && !node.right) {
      total += next;
      return;
    }
    dfs(node.left, next);
    dfs(node.right, next);
  };
  dfs(root, 0);
  return total;
};
// @lc code=end

// TEST:
const assert = require('assert');
const { arrayToTree } = require('./utils/arrayToTree');

const t = (arr) => sumNumbers(arrayToTree(arr));

assert.strictEqual(t([1, 2, 3]), 25);
assert.strictEqual(t([4, 9, 0, 5, 1]), 1026);
assert.strictEqual(t([1]), 1);
assert.strictEqual(t([1, 2]), 12);
assert.strictEqual(t([0, 1]), 1);

console.log('All tests passed!');
console.log('t([1,2,3]) =', t([1, 2, 3]));
