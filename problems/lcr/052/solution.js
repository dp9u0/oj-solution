/*
 * @lc app=leetcode.cn id=LCR 052 lang=javascript
 *
 * [LCR 052] 递增顺序搜索树
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
var increasingBST = function(root) {
  const dummy = { val: 0, left: null, right: null };
  let tail = dummy;
  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    node.left = null;
    tail.right = node;
    tail = node;
    dfs(node.right);
  };
  dfs(root);
  return dummy.right;
};
// @lc code=end

// TEST:
const assert = require('assert');
const { arrayToTree, treeToArray } = require('./utils/arrayToTree');

const run = (arr) => treeToArray(increasingBST(arrayToTree(arr)));

assert.deepStrictEqual(run([5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9]), [1, null, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9]);
assert.deepStrictEqual(run([5, 1, 7]), [1, null, 5, null, 7]);
assert.deepStrictEqual(run([1]), [1]);
assert.deepStrictEqual(run([2, 1]), [1, null, 2]);
assert.deepStrictEqual(run([1, null, 2]), [1, null, 2]);
assert.deepStrictEqual(run([3, 1, 4, null, 2]), [1, null, 2, null, 3, null, 4]);

console.log('All tests passed!');
console.log('increasingBST([5,3,6,2,4,null,8,1,null,null,null,7,9]) =', JSON.stringify(run([5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9])));
