/*
 * @lc app=leetcode.cn id=1522 lang=javascript
 *
 * [1522] N 叉树的直径
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {_Node} root
 * @return {number}
 */
var diameter = function(root) {
    if (!root) return 0;
    let ans = 0;
    const dfs = (node) => { // returns subtree depth in edges
        let max1 = 0, max2 = 0; // two deepest children paths
        for (const c of node.children) {
            const d = dfs(c) + 1;
            if (d > max1) {
                max2 = max1;
                max1 = d;
            } else if (d > max2) {
                max2 = d;
            }
        }
        ans = Math.max(ans, max1 + max2); // longest path through node
        return max1;
    };
    dfs(root);
    return ans;
};
// @lc code=end

// TEST:
function _Node(val, children) {
    this.val = val === undefined ? 0 : val;
    this.children = children === undefined ? [] : children;
}
const mk = (v, ...kids) => { const n = new _Node(v); n.children = kids; return n; };
console.log(diameter(mk(1, mk(3, mk(5), mk(6)), mk(2), mk(4)))); // 3
console.log(diameter(mk(1, mk(2, mk(3, mk(5)), mk(4, mk(6)))))); // 4
console.log(diameter(mk(7))); // 0
console.log(diameter(null)); // 0 (empty tree)
