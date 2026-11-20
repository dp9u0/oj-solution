/*
 * @lc app=leetcode.cn id=1612 lang=javascript
 *
 * [1612] 检查两棵二叉表达式树是否等价
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function Node(val, left, right) {
 *     this.val = (val===undefined ? " " : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {Node} root1
 * @param {Node} root2
 * @return {boolean}
 */
var checkEquivalence = function(root1, root2) {
    const cnt = {}; // variable -> net count (+1 from tree1, -1 from tree2)
    const count = (root, delta) => {
        const stack = [root];
        while (stack.length) {
            const n = stack.pop();
            if (n.val !== '+') cnt[n.val] = (cnt[n.val] || 0) + delta;
            if (n.left) stack.push(n.left);
            if (n.right) stack.push(n.right);
        }
    };
    count(root1, 1);
    count(root2, -1);
    for (const v of Object.values(cnt)) {
        if (v !== 0) return false;
    }
    return true;
};
// @lc code=end

// TEST:
function Node(val, left, right) {
    this.val = val === undefined ? " " : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
const n = (v, l, r) => new Node(v, l, r);
console.log(checkEquivalence(n('x'), n('x'))); // true
// tree1: a + (b + c); tree2: (a + b) + c
console.log(checkEquivalence(
    n('+', n('a'), n('+', n('b'), n('c'))),
    n('+', n('+', n('a'), n('b')), n('c')))); // true
// tree2 has d instead of c
console.log(checkEquivalence(
    n('+', n('a'), n('+', n('b'), n('c'))),
    n('+', n('+', n('a'), n('b')), n('d')))); // false
