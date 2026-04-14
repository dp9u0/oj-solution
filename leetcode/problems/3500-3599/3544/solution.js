/*
 * @lc app=leetcode id=3544 lang=javascript
 *
 * [3544] Subtree Inversion Sum
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subtreeInversionSum = function(edges, nums, k) {
  const n = nums.length;
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  // Build tree and get post-order (iterative DFS)
  const ch = Array.from({ length: n }, () => []);
  const order = [];
  const visited = new Uint8Array(n);
  visited[0] = 1;
  const stk = [0];
  while (stk.length > 0) {
    const item = stk.pop();
    if (item >= 0) {
      stk.push(~item);
      for (const c of adj[item]) {
        if (!visited[c]) {
          visited[c] = 1;
          ch[item].push(c);
          stk.push(c);
        }
      }
    } else {
      order.push(~item);
    }
  }

  // DP: state (node, d, s) where d=1..k (dist from nearest inverted ancestor), s=±1
  // Index: node * K2 + (d-1)*2 + si  (si=0 → s=+1, si=1 → s=-1)
  const K2 = k * 2;
  const dp = new Float64Array(n * K2);

  for (const node of order) {
    const base = node * K2;
    for (let d = 1; d <= k; d++) {
      for (let si = 0; si <= 1; si++) {
        const s = 1 - 2 * si;
        const idx = base + (d - 1) * 2 + si;
        if (d >= k) {
          // Free to invert or not
          let sumKeep = s * nums[node];
          let sumInv = -s * nums[node];
          for (const c of ch[node]) {
            const cb = c * K2;
            sumKeep += dp[cb + (k - 1) * 2 + si];       // d'=k, same sign
            sumInv += dp[cb + (1 - 1) * 2 + (1 - si)];  // d'=1, flipped sign
          }
          dp[idx] = Math.max(sumKeep, sumInv);
        } else {
          // Cannot invert
          let sum = s * nums[node];
          for (const c of ch[node]) {
            sum += dp[c * K2 + d * 2 + si]; // d'=d+1, same sign
          }
          dp[idx] = sum;
        }
      }
    }
  }

  return dp[(k - 1) * 2]; // root: d=k, s=+1
};
// @lc code=end

// TEST:
console.log(subtreeInversionSum([[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]], [4,-8,-6,3,7,-2,5], 2)); // 27
console.log(subtreeInversionSum([[0,1],[1,2],[2,3],[3,4]], [-1,3,-2,4,-5], 2)); // 9
console.log(subtreeInversionSum([[0,1],[0,2]], [0,-1,-2], 3)); // 3
