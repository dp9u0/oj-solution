/*
 * @lc app=leetcode id=2471 lang=javascript
 *
 * [2471] Minimum Number of Operations to Sort a Binary Tree by Level
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
var minimumOperations = function(root) {
    // BFS to collect level values
    const levels = [];
    let queue = [root];
    while (queue.length) {
        const vals = queue.map(n => n.val);
        levels.push(vals);
        const next = [];
        for (const n of queue) {
            if (n.left) next.push(n.left);
            if (n.right) next.push(n.right);
        }
        queue = next;
    }

    let ans = 0;
    for (const vals of levels) {
        const n = vals.length;
        if (n <= 1) continue;
        const sorted = [...vals].sort((a, b) => a - b);
        const pos = new Map();
        for (let i = 0; i < n; i++) pos.set(sorted[i], i);

        const visited = new Uint8Array(n);
        for (let i = 0; i < n; i++) {
            if (visited[i]) continue;
            let j = i, len = 0;
            while (!visited[j]) {
                visited[j] = 1;
                j = pos.get(vals[j]);
                len++;
            }
            ans += len - 1;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
console.log(minimumOperations(arrayToTree([1,4,3,7,6,8,5,null,null,null,null,9,null,10]))); // 3
console.log(minimumOperations(arrayToTree([1,3,2,7,6,5,4])));                               // 3
console.log(minimumOperations(arrayToTree([1,2,3,4,5,6])));                                 // 0
