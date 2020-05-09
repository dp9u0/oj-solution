/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root, h) {
  if (!root) return 0;
  h = h || height(root);
  let hRight = height(root.right)
  return hRight === h - 1 ?
    //  hRight === h - 1 说明左侧是满的
    (1 << h) + countNodes(root.right, hRight)
    //  hRight === h - 1 说明左侧不满
    : (1 << h - 1) + countNodes(root.left);
};

function height(root) {
  return root ? 1 + height(root.left) : -1;
}
