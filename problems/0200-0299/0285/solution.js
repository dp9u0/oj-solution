/*
 * @lc app=leetcode.cn id=285 lang=javascript
 *
 * [285] 二叉搜索树中的中序后继
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
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    let succ = null, node = root;
    while (node) {
        if (node.val > p.val) {
            succ = node; // candidate; try to find a closer one to the left
            node = node.left;
        } else {
            node = node.right;
        }
    }
    return succ;
};
// @lc code=end

// TEST:
const n = v => ({ val: v, left: null, right: null });
const t = n(2); t.left = n(1); t.right = n(3);
console.log(inorderSuccessor(t, t.left)); // 2 (node ref)
console.log(inorderSuccessor(t, { val: 1 })); // 2 (by value)
console.log(inorderSuccessor(t, t.right)); // null (largest)
const t2 = n(5); t2.left = n(3); t2.right = n(6); t2.left.left = n(2); t2.left.right = n(4); t2.left.left.left = n(1);
console.log(inorderSuccessor(t2, t2.left)); // 4
console.log(inorderSuccessor(t2, { val: 5 })); // 6
