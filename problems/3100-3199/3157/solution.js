/*
 * @lc app=leetcode.cn id=3157 lang=javascript
 *
 * [3157] 找到具有最小和的树的层数
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
var minimumLevel = function(root) {
    const sums = [];
    let level = [root];
    while (level.length) {
        let sum = 0;
        const next = [];
        for (const node of level) {
            sum += node.val;
            if (node.left) next.push(node.left);
            if (node.right) next.push(node.right);
        }
        sums.push(sum);
        level = next;
    }
    let best = 0;
    for (let i = 1; i < sums.length; i++) {
        if (sums[i] < sums[best]) best = i;
    }
    return best + 1;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree.js');
console.log(minimumLevel(arrayToTree([50,6,2,30,80,7]))); // 2
console.log(minimumLevel(arrayToTree([36,17,10,null,null,24]))); // 3
console.log(minimumLevel(arrayToTree([5,null,5,null,5]))); // 1
console.log(minimumLevel(arrayToTree([1]))); // 1
