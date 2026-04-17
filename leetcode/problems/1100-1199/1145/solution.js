/*
 * @lc app=leetcode id=1145 lang=javascript
 *
 * [1145] Binary Tree Coloring Game
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
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var btreeGameWinningMove = function(root, n, x) {
    let leftSize = 0, rightSize = 0;

    const dfs = (node) => {
        if (!node) return 0;
        const l = dfs(node.left);
        const r = dfs(node.right);
        if (node.val === x) {
            leftSize = l;
            rightSize = r;
        }
        return 1 + l + r;
    };

    dfs(root);
    const parentSize = n - 1 - leftSize - rightSize;
    const maxSize = Math.max(leftSize, rightSize, parentSize);
    return maxSize > n / 2;
};
// @lc code=end

// TEST:
// Helper to build tree from array
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
const build = (arr) => {
    if (!arr.length) return null;
    const root = new TreeNode(arr[0]);
    const q = [root];
    let i = 1;
    while (i < arr.length) {
        const node = q.shift();
        if (arr[i] !== null) { node.left = new TreeNode(arr[i]); q.push(node.left); }
        i++;
        if (i < arr.length && arr[i] !== null) { node.right = new TreeNode(arr[i]); q.push(node.right); }
        i++;
    }
    return root;
};

console.log(btreeGameWinningMove(build([1,2,3,4,5,6,7,8,9,10,11]), 11, 3)); // true
console.log(btreeGameWinningMove(build([1,2,3]), 3, 1)); // false
console.log(btreeGameWinningMove(build([1,2,3]), 3, 2)); // true
console.log(btreeGameWinningMove(build([1,2,3,4,5]), 5, 2)); // false
console.log(btreeGameWinningMove(build([1,2,3]), 3, 3)); // true
