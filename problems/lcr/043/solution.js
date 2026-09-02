/*
 * @lc app=leetcode.cn id=LCR 043 lang=javascript
 *
 * [LCR 043] 完全二叉树插入器
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
var CBTInserter = function(root) {
  this.root = root;
  this.queue = []; // candidate parents in BFS order
  const q = [root];
  let head = 0;
  while (head < q.length) {
    const node = q[head++];
    if (!node.left || !node.right) this.queue.push(node);
    if (node.left) q.push(node.left);
    if (node.right) q.push(node.right);
  }
};

/**
 * @param {number} v
 * @return {number}
 */
CBTInserter.prototype.insert = function(v) {
  const parent = this.queue[0];
  const node = { val: v, left: null, right: null };
  if (!parent.left) {
    parent.left = node;
  } else {
    parent.right = node;
    this.queue.shift(); // parent now full
  }
  this.queue.push(node); // new leaf is a future candidate
  return parent.val;
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
  return this.root;
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(v)
 * var param_2 = obj.get_root()
 */
// @lc code=end

// TEST:
const assert = require('assert');
const { arrayToTree } = require('./utils/arrayToTree');

const run = (rootArr, inserts) => {
  const ins = new CBTInserter(arrayToTree(rootArr));
  const parents = inserts.map(v => ins.insert(v));
  return { parents, root: ins.get_root() };
};

let r = run([1], [2]);
assert.deepStrictEqual(r.parents, [1]);
assert.strictEqual(r.root.val, 1);
assert.strictEqual(r.root.left.val, 2);

r = run([1, 2, 3, 4, 5, 6], [7, 8]);
assert.deepStrictEqual(r.parents, [3, 4]);
// 7 lands as 3.right (3 already has left=6); 8 as 4.left
assert.strictEqual(r.root.right.right.val, 7);
assert.strictEqual(r.root.left.left.left.val, 8);

console.log('All tests passed!');