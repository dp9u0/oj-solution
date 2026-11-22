/*
 * @lc app=leetcode.cn id=2792 lang=javascript
 *
 * [2792] 计算足够大的节点数
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
 * @param {number} k
 * @return {number}
 */
var countGreatEnoughNodes = function(root, k) {
    let count = 0;
    const res = new Map(); // node -> sorted list of k smallest subtree values
    const stack = [[root, false]];
    while (stack.length) {
        const [node, done] = stack.pop();
        if (!node) continue;
        if (done) {
            const L = res.get(node.left) || [];
            const R = res.get(node.right) || [];
            res.delete(node.left);
            res.delete(node.right);
            const merged = [];
            let i = 0, j = 0;
            while (merged.length < k && i < L.length && j < R.length) {
                merged.push(L[i] <= R[j] ? L[i++] : R[j++]);
            }
            while (merged.length < k && i < L.length) merged.push(L[i++]);
            while (merged.length < k && j < R.length) merged.push(R[j++]);
            if (merged.length === k && merged[k - 1] < node.val) count++;
            merged.push(node.val);
            merged.sort((a, b) => a - b);
            if (merged.length > k) merged.length = k;
            res.set(node, merged);
        } else {
            stack.push([node, true], [node.left, false], [node.right, false]);
        }
    }
    return count;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree.js');
console.log(countGreatEnoughNodes(arrayToTree([7,6,5,4,3,2,1]), 2)); // 3
console.log(countGreatEnoughNodes(arrayToTree([1,2,3]), 1)); // 0
console.log(countGreatEnoughNodes(arrayToTree([3,2,2]), 2)); // 1
console.log(countGreatEnoughNodes(arrayToTree([5]), 1)); // 0
console.log(countGreatEnoughNodes(arrayToTree([1,null,2,null,3,null,4]), 2)); // 0
console.log(countGreatEnoughNodes(arrayToTree([4,null,3,null,2,null,1]), 2)); // 2
