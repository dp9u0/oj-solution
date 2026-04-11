/*
 * @lc app=leetcode id=1315 lang=javascript
 *
 * [1315] Sum of Nodes with Even-Valued Grandparent
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
var sumEvenGrandparent = function(root) {
    let sum = 0;
    const dfs = (node, parent, grandparent) => {
        if (!node) return;
        if (grandparent !== null && grandparent % 2 === 0) {
            sum += node.val;
        }
        dfs(node.left, node.val, parent);
        dfs(node.right, node.val, parent);
    };
    dfs(root, null, null);
    return sum;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
console.log(sumEvenGrandparent(arrayToTree([6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]))); // 18
console.log(sumEvenGrandparent(arrayToTree([1]))); // 0
