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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    let sum = 0;
    
    // 反向中序遍历（右->根->左）
    const reverseInorder = (node) => {
        if (node === null) return;
        
        // 先遍历右子树
        reverseInorder(node.right);
        
        // 处理当前节点：累加并更新节点值
        sum += node.val;
        node.val = sum;
        
        // 最后遍历左子树
        reverseInorder(node.left);
    }
    
    reverseInorder(root);
    return root;
};


// TEST:
const { arrayToTree, treeToArray } = require('./utils/arrayToTree')
let root, result;
root = arrayToTree([4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8]);
bstToGst(root);
result = treeToArray(root);
console.log(result)

root = arrayToTree([0, null, 1]);
bstToGst(root);
result = treeToArray(root);
console.log(result)
