/*
 * @lc app=leetcode id=894 lang=javascript
 *
 * [894] All Possible Full Binary Trees
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n) {
  const memo = new Map();

  const generate = (count) => {
    if (memo.has(count)) return memo.get(count);
    if (count % 2 === 0) return [];
    if (count === 1) return [new TreeNode(0)];

    const result = [];
    for (let i = 1; i < count; i += 2) {
      const leftTrees = generate(i);
      const rightTrees = generate(count - 1 - i);
      for (const left of leftTrees) {
        for (const right of rightTrees) {
          result.push(new TreeNode(0, left, right));
        }
      }
    }

    memo.set(count, result);
    return result;
  };

  return generate(n);
};
// @lc code=end

// TEST:
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}
const trees3 = allPossibleFBT(3);
console.log(trees3.length); // 1

const trees7 = allPossibleFBT(7);
console.log(trees7.length); // 5

const trees1 = allPossibleFBT(1);
console.log(trees1.length); // 1
