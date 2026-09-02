/*
 * @lc app=leetcode.cn id=LCR 124 lang=javascript
 *
 * [LCR 124] 推理二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var deduceTree = function(preorder, inorder) {
  const n = inorder.length;
  const pos = new Map();
  for (let i = 0; i < n; i++) pos.set(inorder[i], i);
  let preIdx = 0;

  const build = (inL, inR) => {
    if (inL > inR) return null;
    const val = preorder[preIdx++];
    const mid = pos.get(val);
    const node = { val, left: null, right: null };
    node.left = build(inL, mid - 1);
    node.right = build(mid + 1, inR);
    return node;
  };

  return build(0, n - 1);
};
// @lc code=end

// TEST:
const assert = require('assert');
const { treeToArray } = require('./utils/arrayToTree');

const t = (pre, ino) => treeToArray(deduceTree(pre, ino));

assert.deepStrictEqual(t([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]), [3, 9, 20, null, null, 15, 7]);
assert.deepStrictEqual(t([-1], [-1]), [-1]);
// left skew
assert.deepStrictEqual(t([1, 2, 3], [3, 2, 1]), [1, 2, null, 3]);
// right skew
assert.deepStrictEqual(t([1, 2, 3], [1, 2, 3]), [1, null, 2, null, 3]);
// balanced-ish
assert.deepStrictEqual(t([1, 2, 3], [2, 1, 3]), [1, 2, 3]);

console.log('All tests passed!');
console.log('t([3,9,20,15,7],[9,3,15,20,7]) =', JSON.stringify(t([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])));
