/*
 * @lc app=leetcode id=1339 lang=javascript
 *
 * [1339] Maximum Product of Splitted Binary Tree
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
var maxProduct = function(root) {
    const MOD = BigInt(1e9 + 7);
    const sums = [];

    function dfs(node) {
        if (!node) return 0;
        const sum = node.val + dfs(node.left) + dfs(node.right);
        sums.push(sum);
        return sum;
    }

    const total = dfs(root);
    let maxProd = 0n;
    for (const s of sums) {
        const prod = BigInt(s) * BigInt(total - s);
        if (prod > maxProd) maxProd = prod;
    }

    return Number(maxProd % MOD);
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
console.log(maxProduct(arrayToTree([1, 2, 3, 4, 5, 6])));                    // 110
console.log(maxProduct(arrayToTree([1, null, 2, 3, 4, null, null, 5, 6])));  // 90
