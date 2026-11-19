/*
 * @lc app=leetcode.cn id=1120 lang=javascript
 *
 * [1120] 子树的最大平均值
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
var maximumAverageSubtree = function(root) {
    let best = -1; // values >= 0 so every average >= 0
    const dfs = (node) => {
        if (!node) return [0, 0];
        const [ls, lc] = dfs(node.left);
        const [rs, rc] = dfs(node.right);
        const sum = ls + rs + node.val;
        const cnt = lc + rc + 1;
        const avg = sum / cnt;
        if (avg > best) best = avg;
        return [sum, cnt];
    };
    dfs(root);
    return best;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
console.log(maximumAverageSubtree(arrayToTree([5,6,1]))); // 6
console.log(maximumAverageSubtree(arrayToTree([0]))); // 0
console.log(maximumAverageSubtree(arrayToTree([1,null,2,null,3]))); // 3 (deepest leaf chain)
console.log(maximumAverageSubtree(arrayToTree([3,1,2]))); // 2 (root avg (3+1+2)/3 = 2)
console.log(maximumAverageSubtree(arrayToTree([100000]))); // 100000
