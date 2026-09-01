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
    let w1, w2; // 记录错误的节点
    let pre; // 中序遍历时的前继节点
    let node = root;
    while (stack.length || node) {
        // 中序遍历
        while (node) {
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        if (pre && node.val < pre.val) {
            w2 = node;
            if (!w1) {
                w1 = pre;
            } else {
                break;
            }
        }
        pre = node;
        node = node.right;
    }
    [w1.val, w2.val] = [w2.val, w1.val]
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