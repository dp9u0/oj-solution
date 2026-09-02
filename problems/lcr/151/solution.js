/*
 * @lc app=leetcode.cn id=LCR 151 lang=javascript
 *
 * [LCR 151] 彩灯装饰记录 III
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
 * @return {number[][]}
 */
var decorateRecord = function(root) {
  if (!root) return [];
  const res = [];
  let queue = [root];
  let levelIdx = 0;
  while (queue.length) {
    const next = [];
    const level = [];
    for (const node of queue) {
      level.push(node.val);
      if (node.left) next.push(node.left);
      if (node.right) next.push(node.right);
    }
    if (levelIdx % 2 === 1) level.reverse(); // odd levels (0-based) reversed
    res.push(level);
    queue = next;
    levelIdx++;
  }
  return res;
};
// @lc code=end

// TEST:
const assert = require('assert');
const { arrayToTree } = require('./utils/arrayToTree');

const t = (arr) => decorateRecord(arrayToTree(arr));

assert.deepStrictEqual(t([8, 17, 21, 18, null, null, 6]), [[8], [21, 17], [18, 6]]);
assert.deepStrictEqual(t([]), []);
assert.deepStrictEqual(t([1]), [[1]]);
assert.deepStrictEqual(t([1, 2, 3, 4, 5, 6, 7]), [[1], [3, 2], [4, 5, 6, 7]]);
assert.deepStrictEqual(t([3, 9, 20, null, null, 15, 7]), [[3], [20, 9], [15, 7]]);

console.log('All tests passed!');
console.log('t([8,17,21,18,null,null,6]) =', JSON.stringify(t([8, 17, 21, 18, null, null, 6])));
