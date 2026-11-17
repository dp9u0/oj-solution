/*
 * @lc app=leetcode.cn id=272 lang=javascript
 *
 * [272] 最接近的二叉搜索树值 II
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
 * @param {number} target
 * @param {number} k
 * @return {number[]}
 */
var closestKValues = function(root, target, k) {
    const sorted = [];
    const inorder = node => {
        if (!node) return;
        inorder(node.left);
        sorted.push(node.val);
        inorder(node.right);
    };
    inorder(root);

    // shrink the window from the end that is farther from target
    let lo = 0, hi = sorted.length - 1;
    while (hi - lo + 1 > k) {
        if (Math.abs(sorted[lo] - target) <= Math.abs(sorted[hi] - target)) hi--;
        else lo++;
    }
    return sorted.slice(lo, hi + 1);
};
// @lc code=end

// TEST:
const n = v => ({ val: v, left: null, right: null });
const t = n(4); t.left = n(2); t.right = n(5); t.left.left = n(1); t.left.right = n(3);
console.log(closestKValues(t, 3.714286, 2)); // [3,4] (any order)
console.log(closestKValues(n(1), 0, 1)); // [1]
console.log(closestKValues(t, 0, 3)); // [1,2,3]
console.log(closestKValues(t, 100, 2)); // [4,5]
console.log(closestKValues(t, 3, 5)); // [1,2,3,4,5] (all)
