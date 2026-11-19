/*
 * @lc app=leetcode.cn id=663 lang=javascript
 *
 * [663] 均匀树划分
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
 * @return {boolean}
 */
var checkEqualTree = function(root) {
    const sums = [];
    const dfs = node => {
        if (!node) return 0;
        const s = node.val + dfs(node.left) + dfs(node.right);
        sums.push(s);
        return s;
    };
    const total = dfs(root);
    sums.pop(); // the root's own sum: no edge above it to cut
    return total % 2 === 0 && sums.includes(total / 2);
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');

console.log(checkEqualTree(arrayToTree([5, 10, 10, null, null, 2, 3]))); // true
console.log(checkEqualTree(arrayToTree([1, 2, 10, null, null, 2, 20]))); // false
console.log(checkEqualTree(arrayToTree([1]))); // false (single node)
console.log(checkEqualTree(arrayToTree([0, 1, -1]))); // false (total 0, no 0 subtree)
console.log(checkEqualTree(arrayToTree([1, 1]))); // true
console.log(checkEqualTree(arrayToTree([0, null, 0]))); // true (total 0, right child sums 0)
