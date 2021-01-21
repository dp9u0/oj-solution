/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function (S) {
  const dummy = new TreeNode("D");
  let node = dummy;
  let index = 0;
  let level = 0;
  let parents = []; // 记录节点的 Parent
  while (index < S.length) {
    while (readDash(S, index).c !== level) {
      node = parents.pop();
      level--;
    }
    index += level;
    const { c, v } = readNumber(S, index);
    if (!node.left) {
      node.left = new TreeNode(v);
      parents.push(node);
      node = node.left;
    } else {
      node.right = new TreeNode(v);
      parents.push(node);
      node = node.right;
    }
    level++;
    index += c;
  }
  return dummy.left;
};

function readDash(S, i) {
  let c = 0;
  while (S[i + c] !== undefined && S[i + c] === '-') {
    c++;
  }
  return { c };
}

/**
 * @param {string} S
 * @return {TreeNode}
 */
function readNumber(S, i) {
  let c = 0;
  while (S[i + c] !== undefined && S[i + c] !== '-') {
    c++;
  }
  return { c, v: Number(S.slice(i, i + c)) };
}

// TEST:
class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

const { treeToArray } = require("./utils/arrayToTree");

let input;
let result;
input = "1-2--3--4-5--6--7"
result = recoverFromPreorder(input)
console.log(treeToArray(result))


input = "1-2--3---4-5--6---7"
result = recoverFromPreorder(input)
console.log(treeToArray(result)) // [1,2,5,3,null,6,null,4,null,7]


input = "1-401--349---90--88"
result = recoverFromPreorder(input)
console.log(treeToArray(result)) // [1,401,null,349,88,90]
