/*
 * @lc app=leetcode id=1305 lang=javascript
 *
 * [1305] All Elements in Two Binary Search Trees
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    const inorder = (node, res) => {
        if (!node) return;
        inorder(node.left, res);
        res.push(node.val);
        inorder(node.right, res);
    };

    const a = [], b = [];
    inorder(root1, a);
    inorder(root2, b);

    const ans = [];
    let i = 0, j = 0;
    while (i < a.length && j < b.length) {
        if (a[i] <= b[j]) ans.push(a[i++]);
        else ans.push(b[j++]);
    }
    while (i < a.length) ans.push(a[i++]);
    while (j < b.length) ans.push(b[j++]);
    return ans;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
console.log(getAllElements(arrayToTree([2,1,4]), arrayToTree([1,0,3]))); // [0,1,1,2,3,4]
console.log(getAllElements(arrayToTree([1,null,8]), arrayToTree([8,1]))); // [1,1,8,8]
console.log(getAllElements(null, arrayToTree([1])));                      // [1]
