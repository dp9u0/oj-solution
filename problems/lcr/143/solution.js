/*
 * @lc app=leetcode.cn id=LCR 143 lang=javascript
 *
 * [LCR 143] 子结构判断
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
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
  if (!A || !B) return false;
  const match = (a, b) => {
    if (!b) return true;    // B side exhausted: structure contained
    if (!a) return false;   // A ended but B remains
    if (a.val !== b.val) return false;
    return match(a.left, b.left) && match(a.right, b.right);
  };
  return match(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};
// @lc code=end

// TEST:
const assert = require('assert');
const { arrayToTree } = require('./utils/arrayToTree');

const t = (arrA, arrB) => isSubStructure(arrayToTree(arrA), arrayToTree(arrB));

assert.strictEqual(t([1, 7, 5], [6, 1]), false);
assert.strictEqual(t([3, 6, 7, 1, 8], [6, 1]), true);
assert.strictEqual(t([3, 6, 7, 1, 8], []), false);
assert.strictEqual(t([], [1]), false);
assert.strictEqual(t([4, 2, 3, 4, 5, 6, 7, 8, 9], [4, 8, 9]), true);
assert.strictEqual(t([1, 2, 3], [1, 2, 4]), false);
assert.strictEqual(t([1, 2, 3], [2]), true);
assert.strictEqual(t([1], [1]), true);

console.log('All tests passed!');
console.log('t([3,6,7,1,8],[6,1]) =', t([3, 6, 7, 1, 8], [6, 1]));
