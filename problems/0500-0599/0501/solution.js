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
var findMode = function (root) {
  if (!root) return [];
  let map = {},
    maxCount = 0;
  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    map[node.val] = (map[node.val] || 0) + 1;
    maxCount = Math.max(maxCount, map[node.val]);
    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }
  let result = [];
  for (const key in map) {
    if (map[key] === maxCount) {
      result.push(Number(key))
    }
  }
  return result;
};