/*
 * @lc app=leetcode.cn id=1597 lang=javascript
 *
 * [1597] 根据中缀表达式构造二叉表达式树
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
 * @param {string} s
 * @return {Node}
 */
var expTree = function(s) {
    const prec = { '+': 1, '-': 1, '*': 2, '/': 2 };
    const nodes = [];
    const ops = [];
    const apply = () => {
        const op = ops.pop();
        const right = nodes.pop();
        const left = nodes.pop();
        nodes.push(new Node(op, left, right));
    };
    for (const c of s) {
        if (c >= '0' && c <= '9') {
            nodes.push(new Node(c));
        } else if (c === '(') {
            ops.push('(');
        } else if (c === ')') {
            while (ops[ops.length - 1] !== '(') apply();
            ops.pop(); // discard '('
        } else { // operator
            while (ops.length && ops[ops.length - 1] !== '(' &&
                   prec[ops[ops.length - 1]] >= prec[c]) {
                apply();
            }
            ops.push(c);
        }
    }
    while (ops.length) apply();
    return nodes[0];
};
// @lc code=end

// TEST:
function Node(val, left, right) {
    this.val = val === undefined ? " " : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
const inorder = (node) => !node ? '' : inorder(node.left) + node.val + inorder(node.right);
console.log(inorder(expTree("3*4-2*5"))); // "3*4-2*5"
console.log(inorder(expTree("2-3/(5*2)+1"))); // "2-3/(5*2)+1"
console.log(inorder(expTree("1+2+3+4+5"))); // "1+2+3+4+5"
console.log(inorder(expTree("1"))); // "1"
console.log(inorder(expTree("(1+2)*3"))); // "(1+2)*3"? inorder drops parens -> "1+2*3"
