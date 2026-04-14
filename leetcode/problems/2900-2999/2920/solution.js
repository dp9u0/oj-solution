/*
 * @lc app=leetcode id=2920 lang=javascript
 *
 * [2920] Maximum Points After Collecting Coins From All Nodes
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @param {number[]} coins
 * @param {number} k
 * @return {number}
 */
var maximumPoints = function(edges, coins, k) {
  const n = coins.length;
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  // Build tree, get post-order
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

  // DP: dp[node][h] = max points from subtree given h ancestor halvings
  // coins[i] <= 10^4, so max meaningful halvings = 14 (2^14=16384)
  const H = 15;
  const dp = new Array(n);
  for (let i = 0; i < n; i++) dp[i] = new Int32Array(H + 1);

  for (const node of order) {
    dp[node][H] = 0; // all coins become 0 after 15 halvings
    for (let h = H - 1; h >= 0; h--) {
      const c = coins[node] >> h;
      let sum1 = c - k;  // method 1: get coins - k
      let sum2 = c >> 1; // method 2: get floor(coins/2), halve subtree
      for (const child of ch[node]) {
        sum1 += dp[child][h];
        sum2 += dp[child][h + 1];
      }
      dp[node][h] = Math.max(sum1, sum2);
    }
  }

  return dp[0][0];
};
// @lc code=end

// TEST:
console.log(maximumPoints([[0,1],[1,2],[2,3]], [10,10,3,3], 5)); // 11
console.log(maximumPoints([[0,1],[0,2]], [8,4,4], 0)); // 16
console.log(maximumPoints([[0,1],[0,2]], [0,0,0], 5)); // 0
