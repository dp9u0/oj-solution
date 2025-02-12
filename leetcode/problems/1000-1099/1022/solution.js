/*
 * @lc app=leetcode id=1022 lang=javascript
 *
 * [1022] Sum of Root To Leaf Binary Numbers
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
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    let result = 0;
    let stack = [[root, root.val.toString()]];
    
    while (stack.length > 0) {
        let [node, path] = stack.pop(); 
        
        if (!node.left && !node.right) {
            result += parseInt(path, 2);
        }
        
        if (node.left) {
            stack.push([node.left, path + node.left.val.toString()]);
        }
        
        if (node.right) {
            stack.push([node.right, path + node.right.val.toString()]);
        }
    }
    return result;
};
// @lc code=end
// TEST:
let { arrayToTree } = require("./utils/arrayToTree")
console.log(sumRootToLeaf(arrayToTree([1,0,1,0,1,0,1]))); // Output: 22
console.log(sumRootToLeaf(arrayToTree([0]))); // Output: 0
console.log(sumRootToLeaf(arrayToTree([1]))); // Output: 1
console.log(sumRootToLeaf(arrayToTree([1,1]))); // Output: 3
