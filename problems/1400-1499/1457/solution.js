/*
 * @lc app=leetcode id=1457 lang=javascript
 *
 * [1457] Pseudo-Palindromic Paths in a Binary Tree
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
var pseudoPalindromicPaths  = function(root) {
  let count = 0;
  const dfs = (node, mask) => {
    mask ^= (1 << node.val);
    if (!node.left && !node.right) {
      if ((mask & (mask - 1)) === 0) count++;
      return;
    }
    if (node.left) dfs(node.left, mask);
    if (node.right) dfs(node.right, mask);
  };
  dfs(root, 0);
  return count;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
console.log(pseudoPalindromicPaths(arrayToTree([2, 3, 1, 3, 1, null, 1]))); // 2
console.log(pseudoPalindromicPaths(arrayToTree([2, 1, 1, 1, 3, null, null, null, null, null, 1]))); // 1
console.log(pseudoPalindromicPaths(arrayToTree([9]))); // 1
console.log(pseudoPalindromicPaths(arrayToTree([1, 2, 3]))); // 0
console.log(pseudoPalindromicPaths(arrayToTree([1, 1, 1]))); // 2
