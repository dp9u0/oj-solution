/*
 * @lc app=leetcode.cn id=1650 lang=javascript
 *
 * [1650] 二叉树的最近公共祖先 III
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
 * @param {_Node} p
 * @param {_Node} q
 * @return {_Node}
 */
var lowestCommonAncestor = function(p, q) {
    let a = p, b = q;
    while (a !== b) {
        a = a.parent ? a.parent : q; // reached root: restart from q
        b = b.parent ? b.parent : p; // reached root: restart from p
    }
    return a;
};
// @lc code=end

// TEST:
function _Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.parent = null;
}
const n3 = new _Node(3), n5 = new _Node(5), n1 = new _Node(1);
const n6 = new _Node(6), n2 = new _Node(2), n0 = new _Node(0), n8 = new _Node(8);
const n7 = new _Node(7), n4 = new _Node(4);
n3.left = n5; n5.parent = n3; n3.right = n1; n1.parent = n3;
n5.left = n6; n6.parent = n5; n5.right = n2; n2.parent = n5;
n1.left = n0; n0.parent = n1; n1.right = n8; n8.parent = n1;
n2.left = n7; n7.parent = n2; n2.right = n4; n4.parent = n2;
console.log(lowestCommonAncestor(n5, n1).val); // 3
console.log(lowestCommonAncestor(n5, n4).val); // 5
console.log(lowestCommonAncestor(n6, n7).val); // 2
