/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  let current = [];
  let children = [root];
  let result = [];
  while (children.length) {
    current = children;
    children = [];
    let sum = 0,
      count = 0;
    while (current.length) {
      let node = current.pop();
      sum += node.val;
      count++;
      node.left && children.push(node.left);
      node.right && children.push(node.right);
    }
    result.push(sum / count);
  }
  return result;
};