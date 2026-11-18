/*
 * @lc app=leetcode.cn id=536 lang=javascript
 *
 * [536] 从字符串生成二叉树
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
 * @param {string} s
 * @return {TreeNode}
 */
var str2tree = function(s) {
    if (!s) return null;
    let i = 0;
    const parseNum = () => {
        let sign = 1;
        if (s[i] === '-') { sign = -1; i++; }
        let v = 0;
        while (i < s.length && s[i] >= '0' && s[i] <= '9') {
            v = v * 10 + (s.charCodeAt(i++) - 48);
        }
        return sign * v;
    };
    const build = () => {
        const node = { val: parseNum(), left: null, right: null };
        if (s[i] === '(') {
            i++; // consume '('
            node.left = build();
            i++; // consume ')'
        }
        if (s[i] === '(') {
            i++;
            node.right = build();
            i++;
        }
        return node;
    };
    return build();
};
// @lc code=end

// TEST:
const toLevel = root => {
    if (!root) return [];
    const out = [], q = [root];
    for (let h = 0; h < q.length; h++) {
        const n = q[h];
        out.push(n.val);
        if (n.left) q.push(n.left);
        if (n.right) q.push(n.right);
    }
    return out;
};

console.log(toLevel(str2tree('4(2(3)(1))(6(5))'))); // [4,2,6,3,1,5]
console.log(toLevel(str2tree('4(2(3)(1))(6(5)(7))'))); // [4,2,6,3,1,5,7]
console.log(toLevel(str2tree('-4(2(3)(1))(6(5)(7))'))); // [-4,2,6,3,1,5,7]
console.log(toLevel(str2tree(''))); // []
console.log(toLevel(str2tree('0'))); // [0]
console.log(toLevel(str2tree('1(-1)(2)'))); // [1,-1,2]
