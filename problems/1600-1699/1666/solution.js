/*
 * @lc app=leetcode.cn id=1666 lang=javascript
 *
 * [1666] 改变二叉树的根节点
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var flipBinaryTree = function(root, leaf) {
    let prev = null, cur = leaf;
    while (cur !== root) {
        const parent = cur.parent;
        if (cur.left && cur.left !== prev) cur.right = cur.left; // non-path child moves right
        cur.left = parent; // old parent becomes left child
        cur.parent = prev; // new parent is the node processed just before
        prev = cur;
        cur = parent;
    }
    root.parent = prev;
    if (root.left === prev) root.left = null; // clear path-side child to avoid a cycle
    else if (root.right === prev) root.right = null;
    return leaf;
};
// @lc code=end

// TEST:
function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.parent = null;
}
const build = () => {
    const nodes = {};
    for (const v of [3,5,1,6,2,0,8,7,4]) nodes[v] = new Node(v);
    nodes[3].left = nodes[5]; nodes[5].parent = nodes[3];
    nodes[3].right = nodes[1]; nodes[1].parent = nodes[3];
    nodes[5].left = nodes[6]; nodes[6].parent = nodes[5];
    nodes[5].right = nodes[2]; nodes[2].parent = nodes[5];
    nodes[1].left = nodes[0]; nodes[0].parent = nodes[1];
    nodes[1].right = nodes[8]; nodes[8].parent = nodes[1];
    nodes[2].left = nodes[7]; nodes[7].parent = nodes[2];
    nodes[2].right = nodes[4]; nodes[4].parent = nodes[2];
    return nodes;
};
const parentsOk = (node) => {
    let ok = true;
    const walk = (n) => {
        if (!n) return;
        if (n.left && n.left.parent !== n) ok = false;
        if (n.right && n.right.parent !== n) ok = false;
        walk(n.left);
        walk(n.right);
    };
    walk(node);
    return ok;
};
// example 1: leaf 7
const t1 = build();
const r1 = flipBinaryTree(t1[3], t1[7]);
console.log(r1.val, r1.left.val, r1.left.left.val, r1.left.right.val); // 7 2 5 4
console.log(r1.parent, t1[2].right.val, t1[5].right.val, t1[3].left); // null 4 6 null
console.log(parentsOk(r1)); // true

// example 2: leaf 0
const t2 = build();
const r2 = flipBinaryTree(t2[3], t2[0]);
console.log(r2.val, r2.left.val, r2.right); // 0 1 null
console.log(t2[1].right.val, t2[3].right, t2[3].left.val); // 8 null 5
console.log(parentsOk(r2)); // true
