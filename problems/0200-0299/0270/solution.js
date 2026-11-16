/*
 * @lc app=leetcode.cn id=270 lang=javascript
 *
 * [270] 最接近的二叉搜索树值
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
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    let best = root.val;
    let node = root;
    while (node) {
        const d = Math.abs(node.val - target);
        const bd = Math.abs(best - target);
        if (d < bd || (d === bd && node.val < best)) best = node.val;
        node = target < node.val ? node.left : node.right;
    }
    return best;
};
// @lc code=end

// TEST:
const n = v => ({ val: v, left: null, right: null });
const t1 = n(4); t1.left = n(2); t1.right = n(5); t1.left.left = n(1); t1.left.right = n(3);
console.log(closestValue(t1, 3.714286)); // 4
console.log(closestValue(t1, 2.5)); // 2 (tie |2-2.5|=|3-2.5| -> smaller)
console.log(closestValue(n(1), 4.4)); // 1
console.log(closestValue(n(10), 10)); // 10
console.log(closestValue(t1, 1)); // 1
console.log(closestValue(t1, 4.5)); // 4 (tie -> smaller value; regression case)
