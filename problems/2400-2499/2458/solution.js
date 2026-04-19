/*
 * @lc app=leetcode id=2458 lang=javascript
 *
 * [2458] Height of Binary Tree After Subtree Removal Queries
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
 * @param {number[]} queries
 * @return {number[]}
 */
var treeQueries = function(root, queries) {
    const depth = new Int32Array(100001);
    const height = new Int32Array(100001);
    const upH = new Int32Array(100001);

    const dfs1 = (node, d) => {
        if (!node) return -1;
        depth[node.val] = d;
        const lh = dfs1(node.left, d + 1);
        const rh = dfs1(node.right, d + 1);
        height[node.val] = 1 + Math.max(lh, rh);
        return height[node.val];
    };
    dfs1(root, 0);

    const dfs2 = (node, curUp) => {
        if (!node) return;
        const d = depth[node.val];
        const lh = node.left ? height[node.left.val] : -1;
        const rh = node.right ? height[node.right.val] : -1;
        if (node.left) {
            const up = Math.max(curUp, rh >= 0 ? d + 1 + rh : d);
            upH[node.left.val] = up;
            dfs2(node.left, up);
        }
        if (node.right) {
            const up = Math.max(curUp, lh >= 0 ? d + 1 + lh : d);
            upH[node.right.val] = up;
            dfs2(node.right, up);
        }
    };
    dfs2(root, 0);

    return queries.map(q => upH[q]);
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
console.log(treeQueries(arrayToTree([1,3,4,2,null,6,5,null,null,null,null,null,7]), [4])); // [2]
console.log(treeQueries(arrayToTree([5,8,9,2,1,3,7,4,6]), [3,2,4,8])); // [3,2,3,2]
console.log(treeQueries(arrayToTree([1,2]), [2])); // [0]
console.log(treeQueries(arrayToTree([1,2,3,4,5]), [2,4])); // [1,2]
console.log(treeQueries(arrayToTree([1,null,2,null,3,null,4]), [2,3,4])); // [0,1,2]
