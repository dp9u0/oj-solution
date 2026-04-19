/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  const sorted = [];
  const inorder = node => {
    if (!node) return;
    inorder(node.left);
    sorted.push(node.val);
    inorder(node.right);
  };
  inorder(root);
  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = sorted.length - 1; j > i; j--) {
      if (sorted[i] + sorted[j] === k) {
        return true;
      }
    }
  }
  return false;
};