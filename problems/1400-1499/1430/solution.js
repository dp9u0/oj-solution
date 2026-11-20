/*
 * @lc app=leetcode.cn id=1430 lang=javascript
 *
 * [1430] 判断给定的序列是否是二叉树从根到叶的路径
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
 * @param {number[]} arr
 * @return {boolean}
 */
var isValidSequence = function(root, arr) {
    const dfs = (node, i) => {
        if (!node || arr[i] !== node.val) return false;
        if (i === arr.length - 1) return !node.left && !node.right; // must end at a leaf
        return dfs(node.left, i + 1) || dfs(node.right, i + 1);
    };
    return dfs(root, 0);
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
const T = () => arrayToTree([0,1,0,0,1,0,null,null,1,0,0]); // fresh copy per call
console.log(isValidSequence(T(), [0,1,0,1])); // true
console.log(isValidSequence(T(), [0,0,1])); // false
console.log(isValidSequence(T(), [0,1,1])); // false
console.log(isValidSequence(arrayToTree([5]), [5])); // true (single leaf)
