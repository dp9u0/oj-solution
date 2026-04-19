/*
 * @lc app=leetcode id=1448 lang=javascript
 *
 * [1448] Count Good Nodes in Binary Tree
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
var goodNodes = function(root) {
    const dfs = (node, maxVal) => {
        if (!node) return 0;
        const isGood = node.val >= maxVal ? 1 : 0;
        const newMax = Math.max(maxVal, node.val);
        return isGood + dfs(node.left, newMax) + dfs(node.right, newMax);
    };
    return dfs(root, -Infinity);
};
// @lc code=end

// TEST:
function TreeNode(val, left, right) { this.val = (val === undefined ? 0 : val); this.left = (left === undefined ? null : left); this.right = (right === undefined ? null : right); }
const { arrayToTree } = require('./utils/arrayToTree');
console.log(goodNodes(arrayToTree([3,1,4,3,null,1,5]))); // 4
console.log(goodNodes(arrayToTree([3,3,null,4,2])));      // 3
console.log(goodNodes(arrayToTree([1])));                   // 1
