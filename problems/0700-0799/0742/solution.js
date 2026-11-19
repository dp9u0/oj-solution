/*
 * @lc app=leetcode.cn id=742 lang=javascript
 *
 * [742] 二叉树最近的叶节点
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
var findClosestLeaf = function(root, k) {
    const adj = new Map();
    const leaves = new Set();
    const addEdge = (a, b) => {
        if (!adj.has(a)) adj.set(a, []);
        if (!adj.has(b)) adj.set(b, []);
        adj.get(a).push(b);
        adj.get(b).push(a);
    };
    const dfs = node => {
        if (!node) return;
        if (!adj.has(node.val)) adj.set(node.val, []);
        if (!node.left && !node.right) leaves.add(node.val);
        if (node.left) { addEdge(node.val, node.left.val); dfs(node.left); }
        if (node.right) { addEdge(node.val, node.right.val); dfs(node.right); }
    };
    dfs(root);

    const visited = new Set([k]);
    const queue = [k];
    let head = 0;
    while (head < queue.length) {
        const v = queue[head++];
        if (leaves.has(v)) return v;
        for (const w of adj.get(v)) {
            if (!visited.has(w)) { visited.add(w); queue.push(w); }
        }
    }
    return k; // unreachable for valid input
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
const ok = (res, valid) => valid.includes(res);

const r1 = findClosestLeaf(arrayToTree([1, 3, 2]), 1);
console.log(r1, ok(r1, [2, 3]) ? 'OK' : 'FAIL'); // 3 or 2, both distance 1 (judge accepts either)

console.log(findClosestLeaf(arrayToTree([1]), 1)); // 1 (root is the only leaf)

const r3 = findClosestLeaf(arrayToTree([1, 2, 3, 4, null, null, null, 5, null, 6]), 2);
console.log(r3, ok(r3, [3]) ? 'OK' : 'FAIL'); // 3

const r4 = findClosestLeaf(arrayToTree([1, 2, 3, null, 4, null, 5]), 3);
console.log(r4, ok(r4, [5]) ? 'OK' : 'FAIL'); // 5 (immediate child)

console.log(findClosestLeaf(arrayToTree([1, 2, 3]), 3)); // 3 (k itself is a leaf)
