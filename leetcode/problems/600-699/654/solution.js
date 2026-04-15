/*
 * @lc app=leetcode id=654 lang=javascript
 *
 * [654] Maximum Binary Tree
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    let build = (lo, hi) => {
        if (lo > hi) return null;
        let maxIdx = lo;
        for (let i = lo + 1; i <= hi; i++) {
            if (nums[i] > nums[maxIdx]) maxIdx = i;
        }
        let root = new TreeNode(nums[maxIdx]);
        root.left = build(lo, maxIdx - 1);
        root.right = build(maxIdx + 1, hi);
        return root;
    };
    return build(0, nums.length - 1);
};
// @lc code=end

// TEST:
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
let { treeToArray } = require('./utils/arrayToTree');
console.log(JSON.stringify(treeToArray(constructMaximumBinaryTree([3,2,1,6,0,5]))));
console.log(JSON.stringify(treeToArray(constructMaximumBinaryTree([3,2,1]))));
