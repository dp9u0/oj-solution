/*
 * @lc app=leetcode id=1302 lang=javascript
 *
 * [1302] Deepest Leaves Sum
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
var deepestLeavesSum = function(root) {
    let queue = [root];
    let sum = 0;
    while (queue.length) {
        sum = 0;
        const next = [];
        for (const node of queue) {
            sum += node.val;
            if (node.left) next.push(node.left);
            if (node.right) next.push(node.right);
        }
        queue = next;
    }
    return sum;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
console.log(deepestLeavesSum(arrayToTree([1,2,3,4,5,null,6,7,null,null,null,null,8])));
console.log(deepestLeavesSum(arrayToTree([6,7,8,2,7,1,3,9,null,1,4,null,null,null,5])));
console.log(deepestLeavesSum(arrayToTree([1,2,3])));
