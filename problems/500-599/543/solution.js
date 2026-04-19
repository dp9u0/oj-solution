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
var diameterOfBinaryTree = function (root) {
  let payload = {
    maxDepth: 0
  }
  maxDepth(root, payload);
  return payload.maxDepth;
};

function maxDepth(node, payload) {
  if (!node) return 0;
  let left = maxDepth(node.left, payload);
  let right = maxDepth(node.right, payload);
  payload.maxDepth = Math.max(payload.maxDepth, left + right);
  return Math.max(left, right) + 1;
}