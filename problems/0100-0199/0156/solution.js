/*
 * @lc app=leetcode.cn id=156 lang=javascript
 *
 * [156] 上下翻转二叉树
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
 * @return {TreeNode}
 */
var upsideDownBinaryTree = function(root) {
    let cur = root, prev = null, prevRight = null;
    while (cur) {
        const left = cur.left, right = cur.right;
        // original right becomes new left, original parent becomes new right
        cur.left = prevRight;
        cur.right = prev;
        prev = cur;
        prevRight = right;
        cur = left;
    }
    return prev;
};
// @lc code=end

// TEST:
const n = v => ({ val: v, left: null, right: null });
const t1 = n(1); t1.left = n(2); t1.right = n(3); t1.left.left = n(4); t1.left.right = n(5);
console.log(upsideDownBinaryTree(t1)); // 4 -> left 5, right 2 (2 -> left 3, right 1)
const t2 = n(1);
console.log(upsideDownBinaryTree(t2)); // 1
console.log(upsideDownBinaryTree(null)); // null
const t3 = n(1); t3.left = n(2); t3.right = n(3);
console.log(upsideDownBinaryTree(t3)); // 2 -> left 3, right 1
