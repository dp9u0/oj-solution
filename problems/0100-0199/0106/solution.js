/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (!postorder.length) {
    return null;
  }
  let val = postorder.pop();
  let index = inorder.indexOf(val);
  let root = new TreeNode(val);
  root.left = buildTree(inorder.splice(0, index), postorder.splice(0, index));
  inorder.shift();
  root.right = buildTree(inorder, postorder);
  return root;
};