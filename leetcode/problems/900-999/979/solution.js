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
var distributeCoins = function (root) {
  let step = 0;
  const processNode = (node) => {
    if (!node) return 0;
    let coinL = processNode(node.left);
    let coinR = processNode(node.right);
    step = step + Math.abs(coinL) + Math.abs(coinR);
    return node.val + coinL + coinR - 1;
  }
  processNode(root);
  return step;
};