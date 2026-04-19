/*
 * @lc app=leetcode id=2583 lang=javascript
 *
 * [2583] Kth Largest Sum in a Binary Tree
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
var kthLargestLevelSum = function(root, k) {
    const levelSums = [];
    const queue = [root];

    while (queue.length > 0) {
        const size = queue.length;
        let sum = 0;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            sum += node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        levelSums.push(sum);
    }

    if (levelSums.length < k) return -1;

    levelSums.sort((a, b) => b - a);
    return levelSums[k - 1];
};
// @lc code=end

// TEST:
// Tests are handled by LeetCode's tree-based judge
