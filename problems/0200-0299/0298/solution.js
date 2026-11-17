/*
 * @lc app=leetcode.cn id=298 lang=javascript
 *
 * [298] 二叉树最长连续序列
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

    // returns the longest consecutive sequence ENDING at node (parent+1 == node)
    const dfs = (node, len) => {
        if (!node) return;
        best = Math.max(best, len);
        dfs(node.left, node.left && node.left.val === node.val + 1 ? len + 1 : 1);
        dfs(node.right, node.right && node.right.val === node.val + 1 ? len + 1 : 1);
    };

    dfs(root, 1);
    return best;
};
// @lc code=end

// TEST:
const n = v => ({ val: v, left: null, right: null });
const t1 = n(1); t1.right = n(3); t1.right.left = n(2); t1.right.right = n(4); t1.right.right.right = n(5);
console.log(longestConsecutive(t1)); // 3 (3->4->5)
console.log(longestConsecutive(n(2))); // 1
console.log(longestConsecutive(null)); // 0
const t2 = n(2); t2.right = n(3); t2.right.right = n(1);
console.log(longestConsecutive(t2)); // 2 (2->3; 1 resets)
const t3 = n(1); t3.left = n(2); t3.left.left = n(3);
console.log(longestConsecutive(t3)); // 3
