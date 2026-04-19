/*
 * @lc app=leetcode id=1080 lang=javascript
 *
 * [1080] Insufficient Nodes in Root to Leaf Paths
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
 * @param {number} limit
 * @return {TreeNode}
 */
var sufficientSubset = function(root, limit) {
  const dfs = (node, sum) => {
    if (!node) return -Infinity;
    sum += node.val;
    if (!node.left && !node.right) return sum;
    const leftMax = dfs(node.left, sum);
    const rightMax = dfs(node.right, sum);
    if (leftMax < limit) node.left = null;
    if (rightMax < limit) node.right = null;
    if (!node.left && !node.right) return -Infinity;
    return Math.max(
      node.left ? leftMax : -Infinity,
      node.right ? rightMax : -Infinity
    );
  };
  const rootMax = dfs(root, 0);
  return rootMax < limit ? null : root;
};
// @lc code=end

// TEST:
const { arrayToTree, treeToArray } = require('./utils/arrayToTree');
let root = arrayToTree([1,2,3,4,-99,-99,7,8,9,-99,-99,12,13,-99,14]);
console.log(JSON.stringify(treeToArray(sufficientSubset(root, 1)))); // [1,2,3,4,null,null,7,8,9,null,14]

root = arrayToTree([5,4,8,11,null,17,4,7,1,null,null,5,3]);
console.log(JSON.stringify(treeToArray(sufficientSubset(root, 22)))); // [5,4,8,11,null,17,4,7,null,null,null,5]

root = arrayToTree([1,2,-3,-5,null,4,null]);
console.log(JSON.stringify(treeToArray(sufficientSubset(root, -1)))); // [1,null,-3,4]
