/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (root === null) {
    return true;
  }
  return height(root) !== -1;
};

function height(node) {
  if (node === null) {
    return 0;
  }
  let lH = height(node.left);
  if (lH === -1) {
    return -1;
  }
  let rH = height(node.right);
  if (rH === -1) {
    return -1;
  }
  if (lH - rH < -1 || lH - rH > 1) {
    return -1;
  }
  return Math.max(lH, rH) + 1;
}