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
var findTilt = function (root) {
  let payload = {
    tiltSum: 0,
  }
  dfs(root, payload);
  return payload.tiltSum;
};

function dfs(node, payload) {
  if (!node) {
    return 0;
  }
  let leftSum = dfs(node.left, payload);
  let rightSum = dfs(node.right, payload);
  payload.tiltSum += Math.abs(leftSum - rightSum);
  return leftSum + rightSum + node.val;
}