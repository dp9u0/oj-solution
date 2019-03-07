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
var zigzagLevelOrder = function (root) {
  let results = [];
  if (root) {
    let nodes = [root];
    let hasNextLevels = true;
    let leftToRight = true;
    while (hasNextLevels) {
      hasNextLevels = false;
      let result = [];
      let nextLevelNodes = [];
      while (nodes.length) {
        let node = leftToRight ? nodes.shift() : nodes.pop();
        result.push(node.val);
        let {
          left,
          right
        } = node;
        if (!leftToRight) {
          [left, right] = [right, left]
        }
        if (left) {
          hasNextLevels = true;
          if (leftToRight) {
            nextLevelNodes.push(left)
          } else {
            nextLevelNodes.unshift(left)
          }
        }
        if (right) {
          hasNextLevels = true;
          if (leftToRight) {
            nextLevelNodes.push(right)
          } else {
            nextLevelNodes.unshift(right)
          }
        }
      }
      results.push(result);
      nodes = nextLevelNodes;
      leftToRight = !leftToRight;
    }
  }
  return results;
};