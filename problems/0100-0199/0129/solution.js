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
var sumNumbers = function (root) {
  let sum = 0;
  function dfs(node, num) {
    if (!node.left && !node.right) {
      if (num) {
        sum += Number(num);
      }
      return;
    }
    if (node.left) {
      dfs(node.left, num + node.left.val)
    }
    if (node.right) {
      dfs(node.right, num + node.right.val)
    }
  }
  if (root) {
    dfs(root, "" + root.val);
  }
  return sum;
};