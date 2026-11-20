/*
 * @lc app=leetcode.cn id=1490 lang=javascript
 *
 * [1490] 克隆 N 叉树
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
 * @param {_Node|null} node
 * @return {_Node|null}
 */
var cloneTree = function(root) {
    if (!root) return null;
    const copy = new _Node(root.val);
    copy.children = root.children.map(cloneTree); // tree has no cycles: single pass suffices
    return copy;
};
// @lc code=end

// TEST:
function _Node(val, children) {
    this.val = val === undefined ? 0 : val;
    this.children = children === undefined ? [] : children;
}
const n5 = new _Node(5), n6 = new _Node(6);
const n3 = new _Node(3, [n5, n6]);
const root = new _Node(1, [n3, new _Node(2), new _Node(4)]);
const c = cloneTree(root);
const dump = (node) => [node.val, ...node.children.map(dump)];
console.log(JSON.stringify(dump(c))); // [1,[3,[5],... nested]]
console.log(c !== root && c.children[0] !== n3 && c.children[0].children[0] !== n5); // true (deep copy)
console.log(cloneTree(null)); // null
