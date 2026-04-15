/*
 * @lc app=leetcode id=513 lang=javascript
 *
 * [513] Find Bottom Left Tree Value
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
var findBottomLeftValue = function(root) {
    let queue = [root];
    let node = root;
    while (queue.length) {
        node = queue.shift();
        if (node.right) queue.push(node.right);
        if (node.left) queue.push(node.left);
    }
    return node.val;
};
// @lc code=end

// TEST:
let { arrayToTree } = require('./utils/arrayToTree');
console.log(findBottomLeftValue(arrayToTree([2,1,3]))); // 1
console.log(findBottomLeftValue(arrayToTree([1,2,3,4,null,5,6,null,null,7]))); // 7
