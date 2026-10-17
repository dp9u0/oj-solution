/*
 * @lc app=leetcode.cn id=面试题 04.05 lang=javascript
 *
 * [面试题 04.05] 合法二叉搜索树
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
var isValidBST = function(root) {
    // 每个节点必须严格落在开区间 (lo, hi) 内
    const check = (node, lo, hi) => {
        if (!node) return true;
        if (node.val <= lo || node.val >= hi) return false;
        return check(node.left, lo, node.val) && check(node.right, node.val, hi);
    };
    return check(root, -Infinity, Infinity);
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
console.log(isValidBST(arrayToTree([2, 1, 3])) === true);
console.log(isValidBST(arrayToTree([5, 1, 4, null, null, 3, 6])) === false); // 深层越界
console.log(isValidBST(null) === true);
console.log(isValidBST(arrayToTree([1])) === true);
console.log(isValidBST(arrayToTree([1, 1])) === false); // 相等不允许
console.log(isValidBST(arrayToTree([10, 5, 15, null, null, 6, 20])) === false); // 6 落在 10 的右子树
console.log(isValidBST(arrayToTree([3, 1, 5, 0, 2, 4, 6])) === true); // 完整合法树
