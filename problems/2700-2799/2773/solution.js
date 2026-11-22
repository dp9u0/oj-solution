/*
 * @lc app=leetcode.cn id=2773 lang=javascript
 *
 * [2773] 特殊二叉树的高度
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
var heightOfTree = function(root) {
    const isLeaf = (v) => v.left !== null && v.right !== null && v.left.right === v;
    let ans = 0;
    const stack = [[root, 0]];
    while (stack.length) {
        const [v, d] = stack.pop();
        if (d > ans) ans = d;
        if (isLeaf(v)) continue; // leaf-ring edges are not tree edges
        if (v.left) stack.push([v.left, d + 1]);
        if (v.right) stack.push([v.right, d + 1]);
    }
    return ans;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree.js');
// replicate the judge: build the tree, then wire the leaf ring
const buildSpecial = (arr) => {
    const root = arrayToTree(arr);
    const leaves = [];
    const walk = (v) => {
        if (!v) return;
        if (!v.left && !v.right) leaves.push(v);
        walk(v.left); walk(v.right);
    };
    walk(root);
    const k = leaves.length;
    for (let i = 0; i < k; i++) {
        const b = leaves[i];
        if (k > 1) {
            b.right = leaves[(i + 1) % k];
            b.left = leaves[(i - 1 + k) % k];
        }
    }
    return root;
};
console.log(heightOfTree(buildSpecial([1,2,3,null,null,4,5]))); // 2
console.log(heightOfTree(buildSpecial([1,2]))); // 1
console.log(heightOfTree(buildSpecial([1,2,3,null,null,4,null,5,6]))); // 3
