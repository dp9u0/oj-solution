/*
 * @lc app=leetcode.cn id=333 lang=javascript
 *
 * [333] 最大二叉搜索子树
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
var largestBSTSubtree = function(root) {
    let best = 0;

    // returns {isBST, size, min, max} for the subtree, or null for empty tree
    const dfs = node => {
        if (!node) return { isBST: true, size: 0, min: Infinity, max: -Infinity };

        const l = dfs(node.left);
        const r = dfs(node.right);

        if (l.isBST && r.isBST && node.val > l.max && node.val < r.min) {
            const size = l.size + r.size + 1;
            best = Math.max(best, size);
            return {
                isBST: true,
                size,
                min: Math.min(l.min, node.val),
                max: Math.max(r.max, node.val),
            };
        }
        return { isBST: false, size: 0, min: 0, max: 0 };
    };

    dfs(root);
    return best;
};
// @lc code=end

// TEST:
const n = v => ({ val: v, left: null, right: null });
const t1 = n(10); t1.left = n(5); t1.right = n(15); t1.left.left = n(1); t1.left.right = n(8); t1.right.right = n(7);
console.log(largestBSTSubtree(t1)); // 3 (subtree 5,1,8)
console.log(largestBSTSubtree(null)); // 0
console.log(largestBSTSubtree(n(4))); // 1
const t2 = n(4); t2.left = n(2); t2.right = n(7); t2.left.left = n(1); t2.left.right = n(3);
console.log(largestBSTSubtree(t2)); // 5 (whole tree)
const t3 = n(3); t3.left = n(2); t3.right = n(5); t3.right.left = n(4); t3.right.right = n(6); t3.left.left = n(1);
console.log(largestBSTSubtree(t3)); // 4 (whole tree is BST)
