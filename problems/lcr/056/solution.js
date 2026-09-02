/*
 * @lc app=leetcode.cn id=LCR 056 lang=javascript
 *
 * [LCR 056] 两数之和 IV - 输入二叉搜索树
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  const vals = [];
  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    vals.push(node.val);
    dfs(node.right);
  };
  dfs(root);
  let l = 0;
  let r = vals.length - 1;
  while (l < r) {
    const sum = vals[l] + vals[r];
    if (sum === k) return true;
    if (sum < k) l++;
    else r--;
  }
  return false;
};
// @lc code=end

// TEST:
const assert = require('assert');
const { arrayToTree } = require('./utils/arrayToTree');

const t = (arr, k) => findTarget(arrayToTree(arr), k);

assert.strictEqual(t([8, 6, 10, 5, 7, 9, 11], 12), true);
assert.strictEqual(t([8, 6, 10, 5, 7, 9, 11], 22), false);
assert.strictEqual(t([1], 2), false);
assert.strictEqual(t([2, 1, 3], 4), true);
assert.strictEqual(t([2, 1, 3], 5), true);
assert.strictEqual(t([2, 1, 3], 3), true);
assert.strictEqual(t([2, 1, 3], 6), false);
// negative values
assert.strictEqual(t([0, -1, 2], -1), true);
assert.strictEqual(t([0, -1, 2], 2), true);

console.log('All tests passed!');
console.log('findTarget([8,6,10,5,7,9,11], 12) =', t([8, 6, 10, 5, 7, 9, 11], 12));
