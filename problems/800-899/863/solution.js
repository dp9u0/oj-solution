/*
 * @lc app=leetcode id=863 lang=javascript
 *
 * [863] All Nodes Distance K in Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    const parent = new Map();
    const visited = new Set();

    const buildParent = (node, par) => {
        if (!node) return;
        parent.set(node, par);
        buildParent(node.left, node);
        buildParent(node.right, node);
    };
    buildParent(root, null);

    const queue = [target];
    visited.add(target);
    let dist = 0;

    while (queue.length > 0) {
        if (dist === k) {
            return queue.map(n => n.val);
        }
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            const neighbors = [node.left, node.right, parent.get(node)];
            for (const nb of neighbors) {
                if (nb && !visited.has(nb)) {
                    visited.add(nb);
                    queue.push(nb);
                }
            }
        }
        dist++;
    }

    return [];
};
// @lc code=end

// TEST:
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function buildTree(arr) {
    if (!arr.length) return null;
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
    while (i < arr.length) {
        const node = queue.shift();
        if (arr[i] !== null) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;
        if (i < arr.length && arr[i] !== null) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }
    return root;
}

function findNode(root, val) {
    if (!root) return null;
    if (root.val === val) return root;
    return findNode(root.left, val) || findNode(root.right, val);
}

const tree = buildTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
const t = findNode(tree, 5);
console.log(JSON.stringify(distanceK(tree, t, 2).sort()));
// Expected: [1,4,7]

const tree2 = buildTree([1]);
const t2 = findNode(tree2, 1);
console.log(JSON.stringify(distanceK(tree2, t2, 3)));
// Expected: []
