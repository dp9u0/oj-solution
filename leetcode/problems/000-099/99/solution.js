/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
    const stack = [];
    let wrong1, wrong2, pre;
    while (stack.length || root) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (pre && root.val < pre.val) {
            wrong2 = root;
            if (!wrong1) {
                wrong1 = pre;
            } else {
                break;
            }
        }
        pre = root;
        root = root.right;
    }
    [wrong1.val, wrong2.val] = [wrong2.val, wrong1.val]
};

// TEST:
let {
    arrayToTree
} = require("./utils/arrayToTree")
let array = [1, 3, null, null, 2];
let root = arrayToTree(array); recoverTree(root)
console.log(root); //  [3,1,null,null,2]


array = [3, 1, 4, null, null, 2];
root = arrayToTree(array); recoverTree(root)
console.log(root); // [2,1,4,null,null,3]