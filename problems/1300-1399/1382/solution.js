/*
 * @lc app=leetcode id=1382 lang=javascript
 *
 * [1382] Balance a Binary Search Tree
 */

// @lc code=start
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
 * @return {TreeNode}
 */
var balanceBST = function(root) {
  const nodes = [];
  const inorder = (node) => {
    if (!node) return;
    inorder(node.left);
    nodes.push(node.val);
    inorder(node.right);
  };
  inorder(root);

  const build = (left, right) => {
    if (left > right) return null;
    const mid = Math.floor((left + right) / 2);
    const node = new TreeNode(nodes[mid]);
    node.left = build(left, mid - 1);
    node.right = build(mid + 1, right);
    return node;
  };

  return build(0, nodes.length - 1);
};
// @lc code=end

// TEST:
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}
const { arrayToTree } = require('./utils/arrayToTree');
const treeToArray = (root) => {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push(null);
    }
  }
  while (result.length && result[result.length - 1] === null) result.pop();
  return result;
};
console.log(JSON.stringify(treeToArray(balanceBST(arrayToTree([1, null, 2, null, 3, null, 4, null, null])))));
console.log(JSON.stringify(treeToArray(balanceBST(arrayToTree([2, 1, 3])))));
