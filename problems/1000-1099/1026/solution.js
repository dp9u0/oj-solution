/*
 * @lc app=leetcode id=1026 lang=javascript
 *
 * [1026] Maximum Difference Between Node and Ancestor
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
var maxAncestorDiff = function(root) {
    let result = 0;
    const dfs = (node, minVal, maxVal) => {
        if (!node) return;
        result = Math.max(result, Math.abs(node.val - minVal), Math.abs(node.val - maxVal));
        const newMin = Math.min(minVal, node.val);
        const newMax = Math.max(maxVal, node.val);
        dfs(node.left, newMin, newMax);
        dfs(node.right, newMin, newMax);
    };
    dfs(root, root.val, root.val);
    return result;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
console.log(maxAncestorDiff(arrayToTree([8,3,10,1,6,null,14,null,null,4,7,13]))); // 7
console.log(maxAncestorDiff(arrayToTree([1,null,2,null,0,3]))); // 3
