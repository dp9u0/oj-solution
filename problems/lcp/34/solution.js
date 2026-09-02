/*
 * @lc app=leetcode.cn id=LCP 34 lang=javascript
 *
 * [LCP 34] 二叉树染色
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
 * @param {number} k
 * @return {number}
 */
var maxValue = function(root, k) {
  // explicit postorder to avoid recursion depth
  const order = [];
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
      order.push(node);
    }
  }

  for (const u of order) {
    const children = [];
    if (u.left) children.push(u.left);
    if (u.right) children.push(u.right);

    // opt[v] = max dp[v][0..k]
    const opt = children.map(v => {
      let m = -Infinity;
      for (let t = 0; t <= k; t++) if (v.dp[t] > m) m = v.dp[t];
      return m;
    });

    // dp[u][0]: u white
    const whiteVal = opt.reduce((a, b) => a + b, 0);

    // u blue knapsack: best[s] = max value with total connected-child sizes sum = s
    // dp[u][c] for c>=1 = best[c-1] (c includes u itself)
    let best = new Array(k).fill(-Infinity); // sizes of extras 0..k-1 (beyond u)
    best[0] = u.val;
    for (let ci = 0; ci < children.length; ci++) {
      const v = children[ci];
      const ndp = best.slice();
      for (let s = 0; s < k; s++) {
        if (best[s] === -Infinity) continue;
        // v white (not connected): add dp[v][0], size unchanged
        if (best[s] + v.dp[0] > ndp[s]) ndp[s] = best[s] + v.dp[0];
        // v blue, connected: child touching component of size t (1..k)
        for (let t = 1; t <= k; t++) {
          const ns = s + t;
          if (ns >= k) break;
          if (v.dp[t] === -Infinity) continue;
          if (best[s] + v.dp[t] > ndp[ns]) ndp[ns] = best[s] + v.dp[t];
        }
      }
      best = ndp;
    }

    const dp = new Array(k + 1).fill(-Infinity);
    dp[0] = whiteVal;
    for (let c = 1; c <= k; c++) {
      if (best[c - 1] > dp[c]) dp[c] = best[c - 1];
    }
    u.dp = dp;
  }

  let ans = -Infinity;
  for (let c = 0; c <= k; c++) if (root.dp[c] > ans) ans = root.dp[c];
  return ans;
};
// @lc code=end

// TEST:
const assert = require('assert');
const { arrayToTree } = require('./utils/arrayToTree');

const t = (arr, k) => maxValue(arrayToTree(arr), k);

assert.strictEqual(t([5, 2, 3, 4], 2), 12);
assert.strictEqual(t([4, 1, 3, 9, null, null, 2], 2), 16);
assert.strictEqual(t([1], 1), 1);
assert.strictEqual(t([1, 2], 1), 2); // can't take both (component size 2>1) -> max single
assert.strictEqual(t([1, 2], 2), 3);
assert.strictEqual(t([10, 1, 1, null, null, 1, 1], 2), 13); // {10,left} + two right-grandchildren singles

console.log('All tests passed!');
console.log('ex1 =', t([5, 2, 3, 4], 2));
