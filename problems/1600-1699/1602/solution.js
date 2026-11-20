/*
 * @lc app=leetcode.cn id=1602 lang=javascript
 *
 * [1602] 找到二叉树中最近的右侧节点
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
 * @param {TreeNode} u
 * @return {TreeNode}
 */
var findNearestRightNode = function(root, u) {
    const queue = [root];
    let head = 0;
    while (head < queue.length) {
        const end = queue.length;
        for (let k = head; k < end; k++) {
            const node = queue[k];
            if (node === u) return k + 1 < end ? queue[k + 1] : null;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        head = end;
    }
    return null;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
const find = (mat, val) => {
    const root = arrayToTree(mat.slice());
    const stack = [root];
    let u = null;
    while (stack.length) {
        const n = stack.pop();
        if (n.val === val) u = n;
        if (n.left) stack.push(n.left);
        if (n.right) stack.push(n.right);
    }
    const ans = findNearestRightNode(root, u);
    return ans ? ans.val : null;
};
console.log(find([1,2,3,null,4,5,6], 4)); // 5
console.log(find([3,null,4,2], 2)); // null
console.log(find([1], 1)); // null
console.log(find([3,4,2,null,null,null,1], 4)); // 2
