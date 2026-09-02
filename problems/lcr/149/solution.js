/*
 * @lc app=leetcode.cn id=LCR 149 lang=javascript
 *
 * [LCR 149] 彩灯装饰记录 I
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
var decorateRecord = function(root) {
  if (!root) return [];
  const res = [];
  const queue = [root];
  let head = 0;
  while (head < queue.length) {
    const node = queue[head++];
    res.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return res;
};
// @lc code=end

// TEST:
const assert = require('assert');
const { arrayToTree } = require('./utils/arrayToTree');

const t = (arr) => decorateRecord(arrayToTree(arr));

assert.deepStrictEqual(t([8, 17, 21, 18, null, null, 6]), [8, 17, 21, 18, 6]);
assert.deepStrictEqual(t([]), []);
assert.deepStrictEqual(t([1]), [1]);
assert.deepStrictEqual(t([1, 2, 3, 4, 5, 6, 7]), [1, 2, 3, 4, 5, 6, 7]);

console.log('All tests passed!');
console.log('decorateRecord([8,17,21,18,null,null,6]) =', JSON.stringify(t([8, 17, 21, 18, null, null, 6])));
