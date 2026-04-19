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
var minCameraCover = function (root) {
  let result = { ans: 0 };
  if (root === null) return 0;
  if (dfs(root, result) === 0) result.ans++;
  return result.ans;
};
// 0:该节点不可监视
// 1:该节点可监视 但没有安装监视器 
// 2:该节点安装监视器 
const dfs = (node, result) => {
  if (node === null) { return 1; } // 空节点认为可以监视
  let left = dfs(node.left, result), right = dfs(node.right, result);
  if (left === 0 || right === 0) {
    result.ans++; // 需要安装监视器
    return 2;
  } else if (left === 2 || right === 2) {
    return 1;
  }
  return 0;
}


// TEST:
const { arrayToTree } = require("./utils/arrayToTree")
let array;
let result;
array = [1, 2, null, 3, 4];
result = minCameraCover(arrayToTree([...array]))
// console.log(array)
console.log(result)

array = [1, 2, null, 3, null, 4, null, null, 5];
result = minCameraCover(arrayToTree([...array]))
// console.log(array)
console.log(result)


array = [1, 2, 3, null, null, null, 4]
result = minCameraCover(arrayToTree([...array]))
// console.log(array)
console.log(result)

array = [0, 0, null, null, 0, 0, null, null, 0, 0]
result = minCameraCover(arrayToTree([...array]))
// console.log(array)
console.log(result)