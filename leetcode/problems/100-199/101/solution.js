/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }
  let leftStack = [],
    rightStack = [];

  leftStack.push(root.left);
  rightStack.push(root.right);

  while (leftStack.length && rightStack.length) {
    let left = leftStack.pop();
    let right = rightStack.pop();
    if ((left === right) || (left && right && left.val === right.val)) {
      if (left) {
        leftStack.push(left.left);
        leftStack.push(left.right);
        rightStack.push(right.right);
        rightStack.push(right.left);
      }
    } else {
      return false;
    }
  }
  return leftStack.length === rightStack.length
};