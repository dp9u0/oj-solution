/*
 * @lc app=leetcode.cn id=250 lang=javascript
 *
 * [250] 统计同值子树
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
var countUnivalSubtrees = function(root) {
    let count = 0;
    // returns true if the subtree rooted at node is univalue
    const dfs = node => {
        if (!node) return true;
        const leftOk = dfs(node.left);
        const rightOk = dfs(node.right);
        if (!leftOk || !rightOk) return false;
        if (node.left && node.left.val !== node.val) return false;
        if (node.right && node.right.val !== node.val) return false;
        count++;
        return true;
    };
    dfs(root);
    return count;
};
// @lc code=end

// TEST:
const n = v => ({ val: v, left: null, right: null });
const t1 = n(5); t1.left = n(1); t1.right = n(5);
t1.left.left = n(5); t1.left.right = n(5); t1.right.right = n(5);
console.log(countUnivalSubtrees(t1)); // 4
console.log(countUnivalSubtrees(null)); // 0
console.log(countUnivalSubtrees(n(1))); // 1
const t2 = n(5); t2.left = n(5); t2.right = n(5); t2.left.left = n(5); t2.left.right = n(5); t2.right.right = n(5);
console.log(countUnivalSubtrees(t2)); // 6 (all univalue)
const t3 = n(1); t3.left = n(2); t3.right = n(3);
console.log(countUnivalSubtrees(t3)); // 2 (leaves only)
