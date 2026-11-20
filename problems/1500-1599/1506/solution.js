/*
 * @lc app=leetcode.cn id=1506 lang=javascript
 *
 * [1506] 找到 N 叉树的根节点
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
 * @param {_Node[]} tree
 * @return {_Node}
 */
var findRoot = function(tree) {
    let x = 0;
    for (const node of tree) {
        x ^= node.val; // non-roots appear as node AND as child: cancel out
        for (const c of node.children) x ^= c.val;
    }
    for (const node of tree) {
        if (node.val === x) return node; // only the root survives the XOR
    }
};
// @lc code=end

// TEST:
function _Node(val, children) {
    this.val = val === undefined ? 0 : val;
    this.children = children === undefined ? [] : children;
}
const n5 = new _Node(5), n6 = new _Node(6);
const n3 = new _Node(3, [n5, n6]);
const n2 = new _Node(2), n4 = new _Node(4);
const root = new _Node(1, [n3, n2, n4]);
console.log(findRoot([n5, n4, n3, n6, n2, root]).val); // 1 (shuffled)
console.log(findRoot([n2, root, n3, n5, n6]).val); // 1 (full set, different order)
