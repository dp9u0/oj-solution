/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (root === null) return false;
  let newSum = sum - root.val;
  if (!root.left && !root.right && newSum === 0) return true;
  return hasPathSum(root.left, newSum) || hasPathSum(root.right, newSum);
};