/*
 * @lc app=leetcode id=3319 lang=javascript
 *
 * [3319] K-th Largest Perfect Subtree Size in Binary Tree
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
 * @param {number} k
 * @return {number}
 */
var kthLargestPerfectSubtree = function(root, k) {
    const sizes = [];
    const dfs = (node) => {
        if (!node) return 0;
        if (!node.left && !node.right) {
            sizes.push(1);
            return 1;
        }
        const l = dfs(node.left), r = dfs(node.right);
        if (l > 0 && l === r) {
            const sz = (1 << l) - 1 + (1 << l);
            sizes.push(sz);
            return l + 1;
        }
        return -1;
    };
    dfs(root);
    sizes.sort((a, b) => b - a);
    return k <= sizes.length ? sizes[k - 1] : -1;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
console.log(kthLargestPerfectSubtree(arrayToTree([5,3,6,5,2,5,7,1,8,null,null,6,8]), 2)); // 3
console.log(kthLargestPerfectSubtree(arrayToTree([1,2,3,4,5,6,7]), 1)); // 7
console.log(kthLargestPerfectSubtree(arrayToTree([1,2,3,null,4]), 3)); // -1
