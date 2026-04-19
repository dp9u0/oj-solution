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
var longestUnivaluePath = function (root) {
  return univaluePath(root)[0];
};

function univaluePath(node) {
  if (!node) return [0, 0];
  let left = univaluePath(node.left);
  let right = univaluePath(node.right);
  let pathLeft = 0; // 经过 node 的左边的univalue path
  let pathRight = 0; // 经过 node 的右边的univalue path
  if (node.left && node.left.val === node.val) {
    pathLeft = left[1] + 1;
  }
  if (node.right && node.right.val === node.val) {
    pathRight = right[1] + 1;
  }
  let result = [Math.max(left[0], right[0], pathLeft + pathRight), Math.max(pathLeft, pathRight)];
  return result;
}