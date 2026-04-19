/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length) {
    return null;
  }
  let val = preorder.shift();
  let index = inorder.indexOf(val);
  let root = new TreeNode(val);
  root.left = buildTree(preorder.splice(0, index), inorder.splice(0, index));
  inorder.shift();
  root.right = buildTree(preorder, inorder);
  return root;
};