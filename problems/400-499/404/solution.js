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
var sumOfLeftLeaves = function (root) {
  if (!root || (!root.left && !root.right)) {
    return 0;
  }
  let lefts = [root],
    rights = [];
  let sum = 0;
  while (lefts.length) {
    let left = lefts.pop();
    if (left.left || left.right) {
      left.left && lefts.push(left.left);
      left.right && rights.push(left.right);
    } else {
      sum += left.val;
    }
    while (rights.length) {
      let right = rights.pop();
      right.left && lefts.push(right.left);
      right.right && rights.push(right.right);
    }
  }
  return sum;
};