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
var levelOrder = function (root) {
  let results = [];
  if (root) {
    let nodes = [root];
    let hasNextLevels = true;
    while (hasNextLevels) {
      hasNextLevels = false;
      let result = [];
      let nextLevelNodes = [];
      while (nodes.length) {
        let node = nodes.shift();
        result.push(node.val);
        if (node.left) {
          hasNextLevels = true;
          nextLevelNodes.push(node.left)
        }
        if (node.right) {
          hasNextLevels = true;
          nextLevelNodes.push(node.right)
        }
      }
      results.push(result);
      nodes = nextLevelNodes;
    }
  }
  return results;
};