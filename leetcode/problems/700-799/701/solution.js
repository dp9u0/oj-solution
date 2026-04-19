/*
 * @lc app=leetcode id=701 lang=javascript
 *
 * [701] Insert into a Binary Search Tree
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if (!root) return new TreeNode(val);
    let node = root;
    while (node) {
        if (val < node.val) {
            if (!node.left) { node.left = new TreeNode(val); break; }
            node = node.left;
        } else {
            if (!node.right) { node.right = new TreeNode(val); break; }
            node = node.right;
        }
    }
    return root;
};
// @lc code=end

// TEST:
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
const { arrayToTree, treeToArray } = require('./utils/arrayToTree');

// Test 1: [4,2,7,1,3], 5
let root = arrayToTree([4,2,7,1,3]);
let result = insertIntoBST(root, 5);
console.log(treeToArray(result)); // [4,2,7,1,3,5]

// Test 2: [40,20,60,10,30,50,70], 25
root = arrayToTree([40,20,60,10,30,50,70]);
result = insertIntoBST(root, 25);
console.log(treeToArray(result)); // [40,20,60,10,30,50,70,null,null,25]

// Test 3: null, 5
root = arrayToTree([]);
result = insertIntoBST(root, 5);
console.log(treeToArray(result)); // [5]

// Test 4: [4,2,7,1,3,null,null,null,null,null,null], 5
root = arrayToTree([4,2,7,1,3,null,null,null,null,null,null]);
result = insertIntoBST(root, 5);
console.log(treeToArray(result)); // [4,2,7,1,3,5]

// Test 5: [15,6,20,3,10,18,25], 8
root = arrayToTree([15,6,20,3,10,18,25]);
result = insertIntoBST(root, 8);
console.log(treeToArray(result)); // [15,6,20,3,10,18,25,null,null,8]