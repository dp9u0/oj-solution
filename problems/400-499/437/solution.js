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
 * @return {number}
 */
var pathSum = function (root, sum) {
  if (root == null) return 0;
  return backtrace(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
}

function backtrace(node, sum) {
  if (node === null) return 0;
  return (node.val === sum ? 1 : 0) + backtrace(node.left, sum - node.val) + backtrace(node.right, sum - node.val);
}