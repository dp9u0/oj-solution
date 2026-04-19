/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  const func = (node, appended) => {
    if (!node) return appended;
    let leftRoot = func(node.left, node);
    node.left = null;
    node.right = func(node.right, appended);
    return leftRoot;
  }
  return func(root, null);
};