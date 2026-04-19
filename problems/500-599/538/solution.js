/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
  convert(root)
  return root;
};

function convert(node, payload = {
  sum: 0
}) {
  if (!node) return;
  convert(node.right, payload);
  payload.sum = node.val = node.val + payload.sum;
  convert(node.left, payload);
}