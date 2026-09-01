/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  let results = [];
  const backtracing = (node, nodes, rest) => {
    if (!node.left && !node.right) {
      if (rest === 0) {
        results.push(nodes);
      }
      return;
    }
    if (node.left) {
      backtracing(node.left, [...nodes, node.left.val], rest - node.left.val);
    }
    if (node.right) {
      backtracing(node.right, [...nodes, node.right.val], rest - node.right.val);
    }
  }
  if (root) {
    backtracing(root, [root.val], sum - root.val);
  }
  return results;
};