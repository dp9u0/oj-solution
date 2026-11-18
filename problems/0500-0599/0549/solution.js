/*
 * @lc app=leetcode.cn id=549 lang=javascript
 *
 * [549] 二叉树最长连续序列 II
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
var longestConsecutive = function(root) {
    let best = 0;
    // returns [inc, dec]: longest increasing/decreasing chain ending at node
    const dfs = node => {
        if (!node) return [0, 0];
        let inc = 1, dec = 1;
        for (const child of [node.left, node.right]) {
            if (!child) continue;
            const [ci, cd] = dfs(child);
            if (child.val + 1 === node.val) inc = Math.max(inc, ci + 1);
            if (child.val - 1 === node.val) dec = Math.max(dec, cd + 1);
        }
        // best path through node: increasing leg + decreasing leg - node itself
        best = Math.max(best, inc + dec - 1);
        return [inc, dec];
    };
    dfs(root);
    return best;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');

console.log(longestConsecutive(arrayToTree([1, 2, 3]))); // 2
console.log(longestConsecutive(arrayToTree([2, 1, 3]))); // 3
console.log(longestConsecutive(arrayToTree([5]))); // 1
console.log(longestConsecutive(arrayToTree([1, 2, null, 3, null, 4]))); // 4 (1->2->3->4)
console.log(longestConsecutive(arrayToTree([3, 2, 4, 1, null, 5, null]))); // 5 (path 1-2-3-4-5 turns through node 3)
