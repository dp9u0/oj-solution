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
var minDepth = function (root) {
  if (root === null) {
    return 0;
  }
  let lH = minDepth(root.left);
  let rH = minDepth(root.right);

  return (lH && rH ? Math.min(lH, rH) : (lH || rH)) + 1

};