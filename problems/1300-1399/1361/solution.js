/*
 * @lc app=leetcode id=1361 lang=javascript
 *
 * [1361] Validate Binary Tree Nodes
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
  const inDeg = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (leftChild[i] !== -1) inDeg[leftChild[i]]++;
    if (rightChild[i] !== -1) inDeg[rightChild[i]]++;
  }
  // find root (in-degree == 0)
  let root = -1;
  for (let i = 0; i < n; i++) {
    if (inDeg[i] === 0) {
      if (root !== -1) return false; // multiple roots
      root = i;
    }
  }
  if (root === -1) return false;
  // BFS from root, check all nodes reachable and no cycle
  const visited = new Set();
  const q = [root];
  while (q.length) {
    const node = q.shift();
    if (visited.has(node)) return false; // cycle
    visited.add(node);
    if (leftChild[node] !== -1) q.push(leftChild[node]);
    if (rightChild[node] !== -1) q.push(rightChild[node]);
  }
  return visited.size === n;
};
// @lc code=end

// TEST:
console.log(validateBinaryTreeNodes(4, [1,-1,3,-1], [2,-1,-1,-1])); // true
console.log(validateBinaryTreeNodes(4, [1,-1,3,-1], [2,3,-1,-1])); // false
console.log(validateBinaryTreeNodes(2, [1,0], [-1,-1])); // false
console.log(validateBinaryTreeNodes(1, [-1], [-1])); // true
