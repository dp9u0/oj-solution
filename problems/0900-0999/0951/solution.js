/*
 * @lc app=leetcode id=951 lang=javascript
 *
 * [951] Flip Equivalent Binary Trees
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
    if (!root1 && !root2) return true;
    if (!root1 || !root2 || root1.val !== root2.val) return false;
    return (flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right)) ||
           (flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left));
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
console.log(flipEquiv(arrayToTree([1,2,3,4,5,6,null,null,null,7,8]), arrayToTree([1,3,2,null,6,4,5,null,null,null,null,8,7])));
console.log(flipEquiv(arrayToTree([]), arrayToTree([])));
console.log(flipEquiv(arrayToTree([]), arrayToTree([1])));
console.log(flipEquiv(arrayToTree([1,2,3]), arrayToTree([1,2,3])));
