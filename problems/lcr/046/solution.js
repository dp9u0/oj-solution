/*
 * @lc app=leetcode.cn id=LCR 046 lang=javascript
 *
 * [LCR 046] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (!root) return [];
  const res = [];
  let queue = [root];
  while (queue.length) {
    const next = [];
    for (const node of queue) {
      if (node.left) next.push(node.left);
      if (node.right) next.push(node.right);
    }
    res.push(queue[queue.length - 1].val);
    queue = next;
  }
  return res;
};
// @lc code=end

// TEST:
const assert = require('assert');
const { arrayToTree } = require('./utils/arrayToTree');

const t = (arr) => rightSideView(arrayToTree(arr));

assert.deepStrictEqual(t([1, 2, 3, null, 5, null, 4]), [1, 3, 4]);
assert.deepStrictEqual(t([1, null, 3]), [1, 3]);
assert.deepStrictEqual(t([]), []);
assert.deepStrictEqual(t([1]), [1]);
assert.deepStrictEqual(t([1, 2]), [1, 2]);
assert.deepStrictEqual(t([1, 2, 3, 4]), [1, 3, 4]);
assert.deepStrictEqual(t([1, 2, null, 3, null, 4]), [1, 2, 3, 4]);

console.log('All tests passed!');
console.log('rightSideView([1,2,3,null,5,null,4]) =', JSON.stringify(t([1, 2, 3, null, 5, null, 4])));
