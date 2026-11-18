/*
 * @lc app=leetcode.cn id=510 lang=javascript
 *
 * [510] 二叉搜索树中的中序后继 II
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var inorderSuccessor = function(node) {
    if (node.right) {
        // leftmost node of the right subtree
        node = node.right;
        while (node.left) node = node.left;
        return node;
    }
    // climb until we come up from a left child
    while (node.parent && node.parent.right === node) {
        node = node.parent;
    }
    return node.parent;
};
// @lc code=end

// TEST:
class N {
    constructor(val) { this.val = val; this.left = null; this.right = null; this.parent = null; }
    addL(v) { const n = new N(v); n.parent = this; this.left = n; return n; }
    addR(v) { const n = new N(v); n.parent = this; this.right = n; return n; }
}

// tree [2,1,3]
const t1 = new N(2);
const n1 = t1.addL(1), n3 = t1.addR(3);
console.log(inorderSuccessor(n1).val); // 2
console.log(inorderSuccessor(t1).val); // 3 (leftmost of right subtree)
console.log(inorderSuccessor(n3)); // null (no successor)

// tree [5,3,6,2,4,null,null,1]
const t2 = new N(5);
const n3b = t2.addL(3), n6 = t2.addR(6);
const n2 = n3b.addL(2), n4 = n3b.addR(4);
const n1b = n2.addL(1);
console.log(inorderSuccessor(n6)); // null
console.log(inorderSuccessor(n1b).val); // 2 (climb from left child)
console.log(inorderSuccessor(n4).val); // 5 (right child -> climb past 3)
console.log(inorderSuccessor(t2).val); // 6

// single node
console.log(inorderSuccessor(new N(7))); // null
