/*
 * @lc app=leetcode.cn id=776 lang=javascript
 *
 * [776] 拆分二叉搜索树
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
 * @return {TreeNode[]}
 */
var splitBST = function(root, target) {
    if (!root) return [null, null];
    if (root.val <= target) {
        const [inPart, outPart] = splitBST(root.right, target);
        root.right = inPart; // re-attach the <= part; parent relation preserved
        return [root, outPart];
    }
    const [inPart, outPart] = splitBST(root.left, target);
    root.left = outPart; // re-attach the > part
    return [inPart, root];
};
// @lc code=end

// TEST:
const { arrayToTree, treeToArray } = require('./utils/arrayToTree');
const show = (pair) => JSON.stringify(pair.map(treeToArray));
console.log(show(splitBST(arrayToTree([4,2,6,1,3,5,7]), 2))); // [[2,1],[4,3,6,null,null,5,7]]
console.log(show(splitBST(arrayToTree([1]), 1))); // [[1],[]]
console.log(show(splitBST(arrayToTree([2,1,3]), 2))); // [[2,1],[3]]
console.log(show(splitBST(arrayToTree([10,5,15,2,7,12,17]), 7))); // [[5,2,7],[10,null,15,12,17]]
console.log(show(splitBST(arrayToTree([3,2,4]), 1))); // [[],[3,2,4]]
