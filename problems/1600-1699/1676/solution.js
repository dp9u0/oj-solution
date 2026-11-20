/*
 * @lc app=leetcode.cn id=1676 lang=javascript
 *
 * [1676] 二叉树的最近公共祖先 IV
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode[]} nodes
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, nodes) {
    const targets = new Set(nodes.map((n) => n.val));
    const total = targets.size;
    let ans = null;
    const dfs = (node) => {
        if (!node) return 0;
        let found = dfs(node.left) + dfs(node.right);
        if (targets.has(node.val)) found++;
        if (found === total && ans === null) ans = node; // deepest full coverage
        return found;
    };
    dfs(root);
    return ans;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
const pick = (root, vals) => {
    const stack = [root];
    const out = [];
    while (stack.length) {
        const n = stack.pop();
        if (vals.includes(n.val)) out.push(n);
        if (n.left) stack.push(n.left);
        if (n.right) stack.push(n.right);
    }
    return out;
};
const T = () => arrayToTree([3,5,1,6,2,0,8,null,null,7,4].slice());
console.log(lowestCommonAncestor(T(), pick(T(), [4,7])).val); // 2
console.log(lowestCommonAncestor(T(), pick(T(), [1])).val); // 1
console.log(lowestCommonAncestor(T(), pick(T(), [7,6,2,4])).val); // 5
console.log(lowestCommonAncestor(T(), pick(T(), [0,1,2,3,4,5,6,7,8])).val); // 3
