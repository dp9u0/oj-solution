/*
 * @lc app=leetcode.cn id=面试题 04.02 lang=javascript
 *
 * [面试题 04.02] 最小高度树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    // 中点为根，左右区间递归，两侧规模差 ≤ 1 保证高度最小
    const build = (lo, hi) => {
        if (lo > hi) return null;
        const mid = (lo + hi) >> 1;
        const node = { val: nums[mid], left: null, right: null };
        node.left = build(lo, mid - 1);
        node.right = build(mid + 1, hi);
        return node;
    };
    return build(0, nums.length - 1);
};
// @lc code=end

// TEST:
// 校验器：BST 有序性 + 高度 = ceil(log2(n+1)) + 节点数
const isValid = (root, nums) => {
    let count = 0;
    let minH = Infinity;
    let maxH = 0;
    let prev = -Infinity;
    const dfs = (node, h) => {
        if (!node) {
            minH = Math.min(minH, h);
            maxH = Math.max(maxH, h);
            return;
        }
        count++;
        dfs(node.left, h + 1);
        if (node.val <= prev) throw new Error('not BST'); // BST 校验须用中序
        prev = node.val;
        dfs(node.right, h + 1);
    };
    try {
        dfs(root, 0);
    } catch (e) {
        return false;
    }
    if (count !== nums.length) return false;
    if (nums.length === 0) return true;
    const expectH = Math.ceil(Math.log2(nums.length + 1));
    return maxH === expectH && minH >= maxH - 1;
};
console.log(isValid(sortedArrayToBST([-10, -3, 0, 5, 9]), [-10, -3, 0, 5, 9]));
console.log(isValid(sortedArrayToBST([1, 2, 3, 4, 5, 6, 7]), [1, 2, 3, 4, 5, 6, 7]));
console.log(isValid(sortedArrayToBST([1]), [1]));
console.log(isValid(sortedArrayToBST([]), []));
console.log(isValid(sortedArrayToBST([1, 2]), [1, 2]));
const big = Array.from({ length: 1000 }, (_, i) => i);
console.log(isValid(sortedArrayToBST(big), big));
