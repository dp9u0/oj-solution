/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let results = [];
  dfs(root, results);
  return results;
};

function dfs(node, results, result = '') {
  if (!node) return;
  result = result ? `${result}->${node.val}` : `${node.val}`;
  if (node.left || node.right) {
    dfs(node.left, results, result);
    dfs(node.right, results, result);
  } else {
    results.push(result);
  }
}