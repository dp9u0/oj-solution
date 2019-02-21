/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
  let sum = 0;
  const dfs = (node) => {
    if (!node) return;
    if (L <= node.val && node.val <= R) {
      sum += node.val
    }
    if (node.val > L) {
      dfs(node.left);
    }
    if (node.val < R) {
      dfs(node.right);
    }
  }
  dfs(root);
  return sum;
};