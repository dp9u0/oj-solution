/*
 * @lc app=leetcode id=2641 lang=javascript
 *
 * [2641] Cousins in Binary Tree II
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
var replaceValueInTree = function(root) {
    root.val = 0;
    let queue = [root];

    while (queue.length > 0) {
        const nextQueue = [];
        // Calculate next level sum
        let levelSum = 0;
        for (const node of queue) {
            if (node.left) {
                levelSum += node.left.val;
                nextQueue.push(node.left);
            }
            if (node.right) {
                levelSum += node.right.val;
                nextQueue.push(node.right);
            }
        }
        // Assign cousin sum to each child
        for (const node of queue) {
            const childSum = (node.left ? node.left.val : 0) + (node.right ? node.right.val : 0);
            if (node.left) node.left.val = levelSum - childSum;
            if (node.right) node.right.val = levelSum - childSum;
        }
        queue = nextQueue;
    }

    return root;
};
// @lc code=end

// TEST:
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
const { arrayToTree, treeToArray } = require('./utils/arrayToTree');
let t1 = arrayToTree([5,4,9,1,10,null,7]);
replaceValueInTree(t1);
console.log(JSON.stringify(treeToArray(t1))); // [0,0,0,7,7,null,11]
let t2 = arrayToTree([3,1,2]);
replaceValueInTree(t2);
console.log(JSON.stringify(treeToArray(t2))); // [0,0,0]
