/*
 * @lc app=leetcode.cn id=面试题 04.04 lang=javascript
 *
 * [面试题 04.04] 检查平衡性
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    // height 返回子树高度；-1 为失衡哨兵，向上短路
    const height = node => {
        if (!node) return 0;
        const l = height(node.left);
        if (l === -1) return -1;
        const r = height(node.right);
        if (r === -1 || Math.abs(l - r) > 1) return -1;
        return Math.max(l, r) + 1;
    };
    return height(root) !== -1;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
console.log(isBalanced(arrayToTree([3, 9, 20, null, null, 15, 7])) === true);
console.log(isBalanced(arrayToTree([1, 2, 2, 3, 3, null, null, 4, 4])) === false);
console.log(isBalanced(null) === true);
console.log(isBalanced(arrayToTree([1])) === true);
console.log(isBalanced(arrayToTree([1, 2, null, 3, null, 4])) === false); // 左斜链失衡
console.log(isBalanced(arrayToTree([1, 2, 3, 4])) === true); // 高度差恰 1 仍平衡
