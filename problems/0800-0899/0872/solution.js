/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const leaves1 = getLeaves(root1, []);
  const leaves2 = getLeaves(root2, []);
  if (leaves1.length !== leaves2.length) {
    return false;
  }
  for (let i = 0; i < leaves1.length; i++) {
    if (leaves1[i] !== leaves2[i]) {
      return false;
    }
  }
  return true;
};

function getLeaves(node, leaves) {
  if (node === null) {
    return;
  }
  if (node.left === null && node.right === null) {
    leaves.push(node.val);
  } else {
    getLeaves(node.left, leaves);
    getLeaves(node.right, leaves);
  }
  return leaves;
}