/*
 * @lc app=leetcode id=2236 lang=javascript
 *
 * [2236] Root Equals Sum of Children
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
 * @return {boolean}
 */
var checkTree = function(root) {
  return root.val === root.left.val + root.right.val;
};
// @lc code=end

// TEST:
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}
console.log(checkTree(new TreeNode(10, new TreeNode(4), new TreeNode(6)))); // true
console.log(checkTree(new TreeNode(5, new TreeNode(3), new TreeNode(1))));  // false
