/*
 * @lc app=leetcode id=1008 lang=javascript
 *
 * [1008] Construct Binary Search Tree from Preorder Traversal
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
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    let build = (lo, hi) => {
        if (lo > hi) return null;
        let root = new TreeNode(preorder[lo]);
        let mid = lo + 1;
        while (mid <= hi && preorder[mid] < preorder[lo]) mid++;
        root.left = build(lo + 1, mid - 1);
        root.right = build(mid, hi);
        return root;
    };
    return build(0, preorder.length - 1);
};
// @lc code=end

// TEST:
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
let { treeToArray } = require('./utils/arrayToTree');
console.log(JSON.stringify(treeToArray(bstFromPreorder([8,5,1,7,10,12])))); // [8,5,10,1,7,null,12]
console.log(JSON.stringify(treeToArray(bstFromPreorder([1,3])))); // [1,null,3]
