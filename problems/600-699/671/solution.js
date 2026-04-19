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
var findSecondMinimumValue = function (root) {
  if (root.left === null) return -1;
  let l = root.left.val === root.val ? findSecondMinimumValue(root.left) : root.left.val;
  let r = root.right.val === root.val ? findSecondMinimumValue(root.right) : root.right.val;
  return l === -1 || r === -1 ? Math.max(l, r) : Math.min(l, r);
};