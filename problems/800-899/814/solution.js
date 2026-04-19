/*
 * @lc app=leetcode id=814 lang=javascript
 *
 * [814] Binary Tree Pruning
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
var pruneTree = function(root) {
    if (!root) return null;
    root.left = pruneTree(root.left);
    root.right = pruneTree(root.right);
    if (root.val === 0 && !root.left && !root.right) return null;
    return root;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
console.log(JSON.stringify(pruneTree(arrayToTree([1,null,0,0,1])))); // [1,null,0,null,1]
console.log(JSON.stringify(pruneTree(arrayToTree([1,0,1,0,0,0,1])))); // [1,null,1,null,1]
console.log(JSON.stringify(pruneTree(arrayToTree([1,1,0,1,1,0,1,0])))); // [1,1,0,1,1,null,1]
