/*
 * @lc app=leetcode.cn id=LCP 10 lang=javascript
 *
 * [LCP 10] 二叉树任务调度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minimalExecTime = function(root) {
  // postorder (avoid recursion)
  const order = [];
  const stack = [[root, false]];
  while (stack.length) {
    const top = stack[stack.length - 1];
    const node = top[0];
    if (!top[1]) {
      top[1] = true;
      if (node.right) stack.push([node.right, false]);
      if (node.left) stack.push([node.left, false]);
    } else {
      stack.pop();
      order.push(node);
    }
  }
  for (const node of order) {
    const left = node.left ? node.left.res : null;
    const right = node.right ? node.right.res : null;
    if (!left && !right) {
      node.res = { s: node.val, f: node.val };
    } else if (!left || !right) {
      // single child chain: must run child fully then node
      const child = left || right;
      node.res = { s: child.s + node.val, f: child.f + node.val };
    } else {
      const m = Math.max(left.f, right.f, (left.s + right.s) / 2);
      node.res = { s: left.s + right.s + node.val, f: m + node.val };
    }
  }
  return root.res.f;
};
// @lc code=end

// TEST:
const assert = require('assert');
const { arrayToTree } = require('./utils/arrayToTree');

const t = (arr) => minimalExecTime(arrayToTree(arr));

assert.strictEqual(t([47, 74, 31]), 121);
assert.strictEqual(t([15, 21, null, 24, null, 27, 26]), 87);
assert.ok(Math.abs(t([1, 3, 2, null, null, 4, 4]) - 7.5) < 1e-9);
assert.strictEqual(t([10]), 10);
assert.strictEqual(t([75, null, 18, null, 20, 27, 36]), 149);
assert.ok(Math.abs(t([1, 1, 1, 1, 1]) - 3) < 1e-9);

console.log('All tests passed!');
console.log('t([47,74,31]) =', t([47, 74, 31]));
