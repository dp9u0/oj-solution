/*
 * @lc app=leetcode.cn id=1644 lang=javascript
 *
 * [1644] 二叉树的最近公共祖先 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let count = 0;
    const dfs = node => {
        if (!node) return null;
        const left = dfs(node.left);
        const right = dfs(node.right);
        if (node === p || node === q) {
            count++;
            return node;
        }
        if (left && right) return node; // split point
        return left || right;
    };
    const lca = dfs(root);
    return count === 2 ? lca : null; // both must exist
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
const find = (n, v) => n && (n.val === v ? n : find(n.left, v) || find(n.right, v));
const solve = (arr, pv, qv) => {
    const root = arrayToTree([...arr]);
    const res = lowestCommonAncestor(root, find(root, pv), find(root, qv));
    return res ? res.val : null;
};

const T = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
console.log(solve(T, 5, 1)); // 3
console.log(solve(T, 5, 4)); // 5 (ancestor is its own LCA)
console.log(solve(T, 5, 10)); // null (10 not in tree)
console.log(solve(T, 7, 4)); // 2 (both leaves under 2)
console.log(solve([1], 1, 2)); // null (2 missing)
console.log(solve([1, 2, null, 3, null, 4], 4, 2)); // 2 (deep chain)
