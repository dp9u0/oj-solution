/*
 * @lc app=leetcode id=2385 lang=javascript
 *
 * [2385] Amount of Time for Binary Tree to Be Infected
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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function(root, start) {
    const adj = new Map();
    const buildGraph = (node, parent) => {
        if (!node) return;
        if (!adj.has(node.val)) adj.set(node.val, []);
        if (parent) {
            adj.get(node.val).push(parent.val);
            adj.get(parent.val).push(node.val);
        }
        buildGraph(node.left, node);
        buildGraph(node.right, node);
    };
    buildGraph(root, null);

    const visited = new Set([start]);
    const queue = [start];
    let minutes = -1;
    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const cur = queue.shift();
            for (const nb of adj.get(cur)) {
                if (!visited.has(nb)) {
                    visited.add(nb);
                    queue.push(nb);
                }
            }
        }
        minutes++;
    }
    return minutes;
};
// @lc code=end

// TEST:
function TreeNode(val, left, right) { this.val = (val === undefined ? 0 : val); this.left = (left === undefined ? null : left); this.right = (right === undefined ? null : right); }
const { arrayToTree } = require('./utils/arrayToTree');
console.log(amountOfTime(arrayToTree([1,5,3,null,4,10,6,9,2]), 3)); // 4
console.log(amountOfTime(arrayToTree([1]), 1));                        // 0
