/*
 * @lc app=leetcode id=1932 lang=javascript
 *
 * [1932] Merge BSTs to Create Single BST
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
 * @param {TreeNode[]} trees
 * @return {TreeNode}
 */
var canMerge = function(trees) {
    const rootMap = new Map();
    const leafSet = new Set();

    for (const tree of trees) {
        rootMap.set(tree.val, tree);
        if (tree.left) leafSet.add(tree.left.val);
        if (tree.right) leafSet.add(tree.right.val);
    }

    // Find main root: root value not appearing as any leaf
    let mainRoot = null;
    for (const tree of trees) {
        if (!leafSet.has(tree.val)) {
            if (mainRoot) return null;
            mainRoot = tree;
        }
    }
    if (!mainRoot) return null;

    // DFS merge: replace leaves with matching subtrees
    const used = new Set([mainRoot.val]);

    const dfs = (node) => {
        if (!node) return;
        if (node.left && !node.left.left && !node.left.right) {
            const sub = rootMap.get(node.left.val);
            if (sub && !used.has(sub.val)) {
                used.add(sub.val);
                node.left = sub;
            }
        }
        dfs(node.left);
        if (node.right && !node.right.left && !node.right.right) {
            const sub = rootMap.get(node.right.val);
            if (sub && !used.has(sub.val)) {
                used.add(sub.val);
                node.right = sub;
            }
        }
        dfs(node.right);
    };

    dfs(mainRoot);

    // All trees must be used
    if (used.size !== trees.length) return null;

    // Validate BST with strict bounds
    const validate = (node, lo, hi) => {
        if (!node) return true;
        if (node.val <= lo || node.val >= hi) return false;
        return validate(node.left, lo, node.val) && validate(node.right, node.val, hi);
    };

    return validate(mainRoot, -Infinity, Infinity) ? mainRoot : null;
};
// @lc code=end
