/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) return [];
  let next = [],
    current = [],
    results = [];
  next.push(root);
  while (next.length) {
    current = next.reverse();
    next = [];
    let result = [];
    while (current.length) {
      let node = current.pop();
      result.push(node.val);
      node.left && next.push(node.left)
      node.right && next.push(node.right)
    }
    results.push(result);
  }
  return results.reverse();
};