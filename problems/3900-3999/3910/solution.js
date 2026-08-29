/*
 * @lc app=leetcode id=3910 lang=javascript
 *
 * [3910] Count Connected Subgraphs With Even Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} edges
 * @return {number}
 */
var evenSumSubgraphs = function(nums, edges) {
  const n = nums.length;
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }
  let ans = 0;
  for (let mask = 1; mask < (1 << n); mask++) {
    let sum = 0;
    let nodes = [];
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        sum += nums[i];
        nodes.push(i);
      }
    }
    if (sum % 2 !== 0) continue;
    // connectivity BFS
    const visited = new Set([nodes[0]]);
    const queue = [nodes[0]];
    while (queue.length) {
      const v = queue.pop();
      for (const w of adj[v]) {
        if ((mask & (1 << w)) && !visited.has(w)) {
          visited.add(w);
          queue.push(w);
        }
      }
    }
    if (visited.size === nodes.length) ans++;
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(evenSumSubgraphs([1, 0, 1], [[0, 1], [1, 2]]) === 2);
console.log(evenSumSubgraphs([0, 0], []) === 2);
console.log(evenSumSubgraphs([1], []) === 0);
console.log(evenSumSubgraphs([0], []) === 1);
console.log(evenSumSubgraphs([0, 0, 0], [[0, 1], [1, 2], [0, 2]]) === 7);
