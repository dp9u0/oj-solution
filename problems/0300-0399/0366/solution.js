/*
 * @lc app=leetcode.cn id=366 lang=javascript
 *
 * [366] 寻找二叉树的叶子节点
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
 * @return {number[][]}
 */
var findLeaves = function(root) {
    // removal round == node height (leaf = 0, parent = 1 + max(children))
    const res = [];
    const dfs = node => {
        if (!node) return -1; // so a leaf gets height 0
        const h = 1 + Math.max(dfs(node.left), dfs(node.right));
        if (res.length === h) res.push([]);
        res[h].push(node.val);
        return h;
    };
    dfs(root);
    return res;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');

console.log(findLeaves(arrayToTree([1, 2, 3, 4, 5]))); // [[4,5,3],[2],[1]]
console.log(findLeaves(arrayToTree([1]))); // [[1]]
console.log(findLeaves(arrayToTree([]))); // []
console.log(findLeaves(arrayToTree([1, 2]))); // [[2],[1]]
console.log(findLeaves(arrayToTree([1, null, 2]))); // [[2],[1]]
console.log(findLeaves(arrayToTree([3, 1, 2]))); // [[1,2],[3]]
