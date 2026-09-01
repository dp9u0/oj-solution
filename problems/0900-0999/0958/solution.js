/*
 * @lc app=leetcode id=958 lang=javascript
 *
 * [958] Check Completeness of a Binary Tree
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
var isCompleteTree = function(root) {
    const queue = [root];
    let seenNull = false;

    while (queue.length > 0) {
        const node = queue.shift();
        if (!node) {
            seenNull = true;
        } else {
            if (seenNull) return false;
            queue.push(node.left);
            queue.push(node.right);
        }
    }

    return true;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
console.log(isCompleteTree(arrayToTree([1,2,3,4,5,6])));
console.log(isCompleteTree(arrayToTree([1,2,3,4,5,null,7])));
console.log(isCompleteTree(arrayToTree([1])));
console.log(isCompleteTree(arrayToTree([1,2,3,4,5,null,6])));
