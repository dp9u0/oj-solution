/*
 * @lc app=leetcode id=3997 lang=javascript
 *
 * [3997] Count Dominant Nodes in a Binary Tree
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
 * @return {number}
 */
var countDominantNodes = function(root) {
  let count = 0;
  function dfs(node) {
    if (!node) return -Infinity;
    const max = Math.max(node.val, dfs(node.left), dfs(node.right));
    if (node.val === max) count++;
    return max;
  }
  dfs(root);
  return count;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');

console.log(countDominantNodes(arrayToTree([5, 3, 8, 2, 4, 7, 1])) === 5);   // Example 1
console.log(countDominantNodes(arrayToTree([1, 2, 3, 1, 2])) === 4);         // Example 2
console.log(countDominantNodes(arrayToTree([7])) === 1);                     // single node
console.log(countDominantNodes(arrayToTree([1, 2])) === 1);                  // child greater than parent
console.log(countDominantNodes(arrayToTree([3, 3, 3])) === 3);               // all equal values
console.log(countDominantNodes(arrayToTree([2, 1, 2])) === 3);               // parent ties with right child
console.log(countDominantNodes(arrayToTree([9, 8, 7, 6, 5, 4, 3])) === 7);   // strictly decreasing, every node dominant
console.log(countDominantNodes(arrayToTree([1, 2, 3, 4, 5, 6, 7])) === 4);   // strictly increasing, only leaves dominant
