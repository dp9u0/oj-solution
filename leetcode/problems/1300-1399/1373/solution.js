/*
 * @lc app=leetcode id=1373 lang=javascript
 *
 * [1373] Maximum Sum BST in Binary Tree
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
var maxSumBST = function(root) {
    let ans = 0;

    const dfs = (node) => {
        if (!node) return [true, 0, Infinity, -Infinity];
        const [lBST, lSum, lMin, lMax] = dfs(node.left);
        const [rBST, rSum, rMin, rMax] = dfs(node.right);
        if (lBST && rBST && lMax < node.val && node.val < rMin) {
            const sum = lSum + node.val + rSum;
            ans = Math.max(ans, sum);
            return [true, sum, Math.min(lMin, node.val), Math.max(rMax, node.val)];
        }
        return [false, 0, 0, 0];
    };

    dfs(root);
    return ans;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
console.log(maxSumBST(arrayToTree([1,4,3,2,4,2,5,null,null,null,null,null,null,4,6]))); // 20
console.log(maxSumBST(arrayToTree([4,3,null,1,2]))); // 2
console.log(maxSumBST(arrayToTree([-4,-2,-5]))); // 0
console.log(maxSumBST(arrayToTree([2,1,3]))); // 6
console.log(maxSumBST(arrayToTree([5,4,8,3,null,6,3]))); // 7
