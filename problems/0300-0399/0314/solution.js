/*
 * @lc app=leetcode.cn id=314 lang=javascript
 *
 * [314] 二叉树的垂直遍历
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
 * @return {number[][]}
 */
var verticalOrder = function(root) {
    if (!root) return [];

    // BFS with column offsets; same column keeps top-to-bottom order
    const cols = new Map(); // col -> values in visit order
    const queue = [[root, 0]];
    let minCol = 0, maxCol = 0;

    for (let qi = 0; qi < queue.length; qi++) {
        const [node, col] = queue[qi];
        if (!cols.has(col)) cols.set(col, []);
        cols.get(col).push(node.val);
        minCol = Math.min(minCol, col);
        maxCol = Math.max(maxCol, col);
        if (node.left) queue.push([node.left, col - 1]);
        if (node.right) queue.push([node.right, col + 1]);
    }

    const res = [];
    for (let c = minCol; c <= maxCol; c++) {
        if (cols.has(c)) res.push(cols.get(c));
    }
    return res;
};
// @lc code=end

// TEST:
const n = v => ({ val: v, left: null, right: null });
const t1 = n(3); t1.left = n(9); t1.right = n(20); t1.right.left = n(15); t1.right.right = n(7);
console.log(verticalOrder(t1)); // [[9],[3,15],[20],[7]]
const t2 = n(3); t2.left = n(9); t2.right = n(8); t2.left.left = n(4); t2.left.right = n(0); t2.right.left = n(1); t2.right.right = n(7);
console.log(verticalOrder(t2)); // [[4],[9],[3,0,1],[8],[7]]
console.log(verticalOrder(null)); // []
console.log(verticalOrder(n(1))); // [[1]]
const t3 = n(1); t3.left = n(2); t3.left.left = n(3);
console.log(verticalOrder(t3)); // [[3],[2],[1]]
