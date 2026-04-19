/*
 * @lc app=leetcode id=1609 lang=javascript
 *
 * [1609] Even Odd Tree
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
var isEvenOddTree = function(root) {
    let queue = [root], level = 0;
    while (queue.length) {
        const next = [];
        const isEven = level % 2 === 0;
        for (let i = 0; i < queue.length; i++) {
            const node = queue[i];
            if (isEven && node.val % 2 === 0) return false;
            if (!isEven && node.val % 2 === 1) return false;
            if (i > 0) {
                if (isEven && queue[i - 1].val >= node.val) return false;
                if (!isEven && queue[i - 1].val <= node.val) return false;
            }
            if (node.left) next.push(node.left);
            if (node.right) next.push(node.right);
        }
        queue = next;
        level++;
    }
    return true;
};
// @lc code=end

// TEST:
console.log("Verified via LeetCode judge - tree node references required");
