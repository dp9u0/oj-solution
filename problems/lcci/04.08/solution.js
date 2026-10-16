/*
 * @lc app=leetcode.cn id=面试题 04.08 lang=javascript
 *
 * [面试题 04.08] 首个共同祖先
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
    // 返回 null / p / q / LCA；两侧分居则当前节点为祖先
    if (!root || root === p || root === q) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (left && right) return root;
    return left || right;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
const find = (node, val) => (!node ? null : node.val === val ? node : find(node.left, val) || find(node.right, val));
const tree = arrayToTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
console.log(lowestCommonAncestor(tree, find(tree, 5), find(tree, 1)).val === 3);
console.log(lowestCommonAncestor(tree, find(tree, 5), find(tree, 4)).val === 5); // 祖先可为节点本身
console.log(lowestCommonAncestor(tree, find(tree, 7), find(tree, 0)).val === 3);
console.log(lowestCommonAncestor(tree, find(tree, 7), find(tree, 4)).val === 2);
const single = arrayToTree([1]);
console.log(lowestCommonAncestor(single, single, single).val === 1);
