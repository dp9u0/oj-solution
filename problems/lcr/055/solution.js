/*
 * @lc app=leetcode.cn id=LCR 055 lang=javascript
 *
 * [LCR 055] 二叉搜索树迭代器
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
 */
var BSTIterator = function(root) {
  this.stack = [];
  let cur = root;
  while (cur) {
    this.stack.push(cur);
    cur = cur.left;
  }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  const node = this.stack.pop();
  let cur = node.right;
  while (cur) {
    this.stack.push(cur);
    cur = cur.left;
  }
  return node.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.stack.length > 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end

// TEST:
const assert = require('assert');
const { arrayToTree } = require('./utils/arrayToTree');

const run = (rootArr) => {
  const it = new BSTIterator(arrayToTree(rootArr));
  const out = [];
  while (it.hasNext()) out.push(it.next());
  return out;
};

assert.deepStrictEqual(run([7, 3, 15, null, null, 9, 20]), [3, 7, 9, 15, 20]);
assert.deepStrictEqual(run([1]), [1]);
assert.deepStrictEqual(run([5, 3, 6, 2, 4, null, 7]), [2, 3, 4, 5, 6, 7]);
assert.deepStrictEqual(run([10, 5, 15, null, null, 12, 20]), [5, 10, 12, 15, 20]);

console.log('All tests passed!');