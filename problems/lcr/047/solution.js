/*
 * @lc app=leetcode.cn id=LCR 047 lang=javascript
 *
 * [LCR 047] 二叉树剪枝
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
var pruneTree = function(root) {
  // returns true if the subtree rooted at node contains a 1;
  // prunes child subtrees that contain no 1
  const containsOne = (node) => {
    if (!node) return false;
    const leftHas = containsOne(node.left);
    if (!leftHas) node.left = null;
    const rightHas = containsOne(node.right);
    if (!rightHas) node.right = null;
    return node.val === 1 || leftHas || rightHas;
  };
  return containsOne(root) ? root : null;
};
// @lc code=end

// TEST:
const assert = require('assert');
const { arrayToTree, treeToArray } = require('./utils/arrayToTree');

const t = (arr) => treeToArray(pruneTree(arrayToTree(arr)));

assert.deepStrictEqual(t([1, null, 0, 0, 1]), [1, null, 0, null, 1]);
assert.deepStrictEqual(t([1, 0, 1, 0, 0, 0, 1]), [1, null, 1, null, 1]);
assert.deepStrictEqual(t([1, 1, 0, 1, 1, 0, 1, 0]), [1, 1, 0, 1, 1, null, 1]);
// all zeros -> whole tree pruned to null
assert.strictEqual(pruneTree(arrayToTree([0])), null);
assert.deepStrictEqual(t([0, 0, 0]), [null]);
// single 1 root stays
assert.deepStrictEqual(t([1]), [1]);
// zeros under a 1 on one side survive only with the 1
assert.deepStrictEqual(t([0, null, 1]), [0, null, 1]);
assert.deepStrictEqual(t([1, 0, null]), [1]);

console.log('All tests passed!');
console.log('pruneTree([1,null,0,0,1]) =', JSON.stringify(t([1, null, 0, 0, 1])));
