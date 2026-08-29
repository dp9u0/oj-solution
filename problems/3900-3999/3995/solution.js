/*
 * @lc app=leetcode id=3995 lang=javascript
 *
 * [3995] Minimum Cost to Transform String
 */

// @lc code=start
/**
 * @param {string} source
 * @param {string} target
 * @param {string[][]} rules
 * @param {number[]} costs
 * @return {number}
 */
var minCost = function(source, target, rules, costs) {
  const n = source.length;
  const INF = Infinity;
  const dp = Array(n + 1).fill(INF);
  dp[0] = 0;
  const prepped = rules.map(([p, q], i) => {
    let wild = 0;
    for (const ch of p) if (ch === '*') wild++;
    return { p, q, c: costs[i] + wild, L: p.length };
  });
  for (let i = 1; i <= n; i++) {
    if (source[i - 1] === target[i - 1] && dp[i - 1] < dp[i]) dp[i] = dp[i - 1];
    for (const { p, q, c, L } of prepped) {
      if (L > i || dp[i - L] === INF) continue;
      const l = i - L;
      if (q !== target.slice(l, i)) continue;
      let ok = true;
      for (let k = 0; k < L; k++) {
        if (p[k] !== '*' && p[k] !== source[l + k]) { ok = false; break; }
      }
      if (ok && dp[i - L] + c < dp[i]) dp[i] = dp[i - L] + c;
    }
  }
  return dp[n] === INF ? -1 : dp[n];
};
// @lc code=end

// TEST:
console.log(minCost('hello', 'world', [['he', 'wo'], ['llo', 'rld']], [3, 4]) === 7);
console.log(minCost('cat', 'dog', [['c*t', 'dog']], [2]) === 3);
console.log(minCost('test', 'next', [['*e*t', 'next']], [4]) === 6);
console.log(minCost('abc', 'abc', [['a', 'z']], [1]) === 0);
console.log(minCost('abc', 'xyz', [['a', 'x']], [1]) === -1);
