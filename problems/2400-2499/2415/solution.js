/*
 * @lc app=leetcode id=2415 lang=javascript
 *
 * [2415] Reverse Odd Levels of Binary Tree
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
 * @return {TreeNode}
 */
var reverseOddLevels = function(root) {
    let queue = [root];
    let level = 0;
    while (queue.length) {
        let next = [];
        for (const node of queue) {
            if (node.left) {
                next.push(node.left);
                next.push(node.right);
            }
        }
        if (level % 2 === 1) {
            let vals = queue.map(n => n.val).reverse();
            for (let i = 0; i < queue.length; i++) {
                queue[i].val = vals[i];
            }
        }
        queue = next;
        level++;
    }
    return root;
};
// @lc code=end

// TEST:
let { arrayToTree, treeToArray } = require('./utils/arrayToTree');
console.log(JSON.stringify(treeToArray(reverseOddLevels(arrayToTree([2,3,5,8,13,21,34]))))); // [2,5,3,8,13,21,34]
console.log(JSON.stringify(treeToArray(reverseOddLevels(arrayToTree([7,13,11]))))); // [7,11,13]
