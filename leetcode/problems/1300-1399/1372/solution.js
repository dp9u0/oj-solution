/*
 * @lc app=leetcode id=1372 lang=javascript
 *
 * [1372] Longest ZigZag Path in a Binary Tree
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
var longestZigZag = function(root) {
    let ans = 0;

    // Returns [leftLen, rightLen]: max zigzag length starting from node going left / right
    const dfs = (node) => {
        if (!node) return [-1, -1];
        const [, rL] = dfs(node.left);
        const [lR, ] = dfs(node.right);
        const l = rL + 1; // go left: 1 step left + zigzag from left child going right
        const r = lR + 1; // go right: 1 step right + zigzag from right child going left
        ans = Math.max(ans, l, r);
        return [l, r];
    };

    dfs(root);
    return ans;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
console.log(longestZigZag(arrayToTree([1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]))); // 3
console.log(longestZigZag(arrayToTree([1,1,1,null,1,null,null,1,1,null,1]))); // 4
console.log(longestZigZag(arrayToTree([1]))); // 0
