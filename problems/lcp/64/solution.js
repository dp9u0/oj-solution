/*
 * @lc app=leetcode.cn id=LCP 64 lang=javascript
 *
 * [LCP 64] 二叉树灯饰
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var closeLampInTree = function(root) {
  // dp[node][sub][par3] = min presses to switch off node's subtree,
  // where sub = parity of switch-2 presses among strict ancestors
  // (each toggles whole subtree), par3 = whether parent pressed switch 3.
  const ZERO = [[0, 0], [0, 0]];

  // iterative postorder (tree up to 1e5 -> avoid recursion depth)
  const stack = [[root, false]];
  while (stack.length) {
    const top = stack[stack.length - 1];
    const node = top[0];
    if (!top[1]) {
      top[1] = true;
      if (node.right) stack.push([node.right, false]);
      if (node.left) stack.push([node.left, false]);
    } else {
      stack.pop();
      const left = node.left ? node.left.dp : ZERO;
      const right = node.right ? node.right.dp : ZERO;
      const v = node.val;
      // dp[sub][par3]
      const d = [[0, 0], [0, 0]];
      for (let sub = 0; sub <= 1; sub++) {
        for (let par3 = 0; par3 <= 1; par3++) {
          let best = Infinity;
          for (let s2 = 0; s2 <= 1; s2++) {
            for (let s3 = 0; s3 <= 1; s3++) {
              const s1 = v ^ sub ^ par3 ^ s2 ^ s3;
              const cSub = sub ^ s2;
              const cPar3 = s3;
              const cost = s1 + s2 + s3 + left[cSub][cPar3] + right[cSub][cPar3];
              if (cost < best) best = cost;
            }
          }
          d[sub][par3] = best;
        }
      }
      node.dp = d;
    }
  }
  return root.dp[0][0];
};
// @lc code=end

// TEST:
const assert = require('assert');
const { arrayToTree, treeToArray } = require('./utils/arrayToTree');

const solve = (arr) => closeLampInTree(arrayToTree(arr));

assert.strictEqual(solve([1, 1, 0, null, null, null, 1]), 2);
assert.strictEqual(solve([1, 1, 1, 1, null, null, 1]), 1);
assert.strictEqual(solve([0, null, 0]), 0);
// single node
assert.strictEqual(solve([1]), 1);
assert.strictEqual(solve([0]), 0);
// chain of 3 all on: one switch-2 press at root turns all off
assert.strictEqual(solve([1, 1, null, 1, null, null, null]), 1);
// two-node tree all on: one switch-2 press at root
assert.strictEqual(solve([1, 1, null]), 1);

console.log('All tests passed!');
console.log('closeLampInTree([1,1,0,null,null,null,1]) =', solve([1, 1, 0, null, null, null, 1]));
