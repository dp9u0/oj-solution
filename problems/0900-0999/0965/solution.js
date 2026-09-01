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
var isUnivalTree = function (root) {
  const checkUnivalTree = (node, val) => {
    return !node || (node.val === val && checkUnivalTree(node.left, val) && checkUnivalTree(node.right, val))
  }
  return checkUnivalTree(root, root.val);
};