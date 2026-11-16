/*
 * @lc app=leetcode.cn id=2689 lang=javascript
 *
 * [2689] 从 Rope 树中提取第 K 个字符
 */

// @lc code=start
/**
 * Definition for a rope tree node.
 * class RopeTreeNode {
 *     constructor(len, val, left, right) {
 *         this.len = (len===undefined ? 0 : len);
 *         this.val = (val===undefined ? "" : val);
 *         this.left = (left===undefined ? null : left);
 *         this.right = (right===undefined ? null : right);
 *     }
 * }
 */
/**
 * @param {RopeTreeNode} root
 * @param {number} k
 * @return {character}
 */
var getKthCharacter = function(root, k) {
    // S[node].length = node.len only holds for internal nodes;
    // for a leaf, len = 0 and the real length is val.length
    const lenOf = n => n.len || n.val.length;

    let node = root;
    while (node.len > 0) {
        const leftLen = node.left ? lenOf(node.left) : 0;
        if (k <= leftLen) {
            node = node.left;
        } else {
            k -= leftLen;
            node = node.right;
        }
    }
    return node.val[k - 1];
};
// @lc code=end

// TEST:
class RopeTreeNode {
    constructor(len, val, left, right) {
        this.len = (len === undefined ? 0 : len);
        this.val = (val === undefined ? "" : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
const leaf = val => new RopeTreeNode(0, val, null, null);
const root1 = new RopeTreeNode(10, "", new RopeTreeNode(4, "", leaf("g"), leaf("rta")), leaf("abcpoe"));
const root2 = new RopeTreeNode(12, "",
    new RopeTreeNode(6, "", leaf("abc"), leaf("efg")),
    new RopeTreeNode(6, "", leaf("hij"), leaf("klm")));
console.log(getKthCharacter(root1, 6)); // "b"
console.log(getKthCharacter(root2, 3)); // "c"
console.log(getKthCharacter(leaf("ropetree"), 8)); // "e"
console.log(getKthCharacter(new RopeTreeNode(3, "", null, leaf("xyz")), 2)); // "y"
console.log(getKthCharacter(new RopeTreeNode(5, "", leaf("abc"), leaf("de")), 5)); // "e"
