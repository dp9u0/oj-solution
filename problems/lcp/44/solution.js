/*
 * @lc app=leetcode.cn id=LCP 44 lang=javascript
 *
 * [LCP 44] 开幕式焰火
 */

// @lc code=start
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
var numColor = function(root) {
  const colors = new Set();
  const dfs = (node) => {
    if (!node) return;
    colors.add(node.val);
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return colors.size;
};
// @lc code=end

// TEST:
let { arrayToTree } = require('./utils/arrayToTree');
// Example 1
console.log(numColor(arrayToTree([1, 3, 2, 1, null, 2])) === 3);
// Example 2
console.log(numColor(arrayToTree([3, 3, 3])) === 1);
// Single node
console.log(numColor(arrayToTree([5])) === 1);
// All distinct
console.log(numColor(arrayToTree([1, 2, 3, 4, 5])) === 5);
// Larger duplicate-heavy tree
console.log(numColor(arrayToTree([1, 1, 2, 1, 2, 2, 3])) === 3);
