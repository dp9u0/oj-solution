/*
 * @lc app=leetcode id=508 lang=javascript
 *
 * [508] Most Frequent Subtree Sum
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
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
    const freq = new Map();
    let maxFreq = 0;

    const dfs = (node) => {
        if (!node) return 0;
        const sum = node.val + dfs(node.left) + dfs(node.right);
        const f = (freq.get(sum) || 0) + 1;
        freq.set(sum, f);
        if (f > maxFreq) maxFreq = f;
        return sum;
    };

    dfs(root);

    const result = [];
    for (const [sum, f] of freq) {
        if (f === maxFreq) result.push(sum);
    }
    return result;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
console.log(JSON.stringify(findFrequentTreeSum(arrayToTree([5,2,-3]))));
console.log(JSON.stringify(findFrequentTreeSum(arrayToTree([5,2,-5]))));
