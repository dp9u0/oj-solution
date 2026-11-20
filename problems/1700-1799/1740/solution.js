/*
 * @lc app=leetcode.cn id=1740 lang=javascript
 *
 * [1740] 找到二叉树中的距离
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
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var findDistance = function(root, p, q) {
    if (p === q) return 0;
    const parent = new Map(); // child val -> parent val
    const queue = [root];
    let head = 0;
    while (head < queue.length) {
        const node = queue[head++];
        if (node.left) {
            parent.set(node.left.val, node.val);
            queue.push(node.left);
        }
        if (node.right) {
            parent.set(node.right.val, node.val);
            queue.push(node.right);
        }
    }
    const depth = new Map();
    depth.set(root.val, 0);
    for (const [child, par] of parent) depth.set(child, depth.get(par) + 1);

    let a = p, b = q, dist = 0;
    while (a !== b) {
        if ((depth.get(a) || 0) >= (depth.get(b) || 0)) {
            a = parent.get(a);
        } else {
            b = parent.get(b);
        }
        dist++;
    }
    return dist;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
console.log(findDistance(arrayToTree([3,5,1,6,2,0,8,null,null,7,4].slice()), 5, 0)); // 3
console.log(findDistance(arrayToTree([3,5,1,6,2,0,8,null,null,7,4].slice()), 5, 7)); // 2
console.log(findDistance(arrayToTree([3,5,1,6,2,0,8,null,null,7,4].slice()), 5, 5)); // 0
