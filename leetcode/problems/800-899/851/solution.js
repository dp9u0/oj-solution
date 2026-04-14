/*
 * @lc app=leetcode id=851 lang=javascript
 *
 * [851] Loud and Rich
 */

// @lc code=start
/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function(richer, quiet) {
  const n = quiet.length;
  const adj = Array.from({ length: n }, () => []);
  for (const [a, b] of richer) {
    adj[b].push(a);
  }
  const memo = new Array(n).fill(-1);
  const dfs = (x) => {
    if (memo[x] !== -1) return memo[x];
    let minPerson = x;
    for (const next of adj[x]) {
      const candidate = dfs(next);
      if (quiet[candidate] < quiet[minPerson]) {
        minPerson = candidate;
      }
    }
    memo[x] = minPerson;
    return minPerson;
  };
  const answer = new Array(n);
  for (let i = 0; i < n; i++) {
    answer[i] = dfs(i);
  }
  return answer;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(loudAndRich([[1,0],[2,1],[3,1],[3,7],[4,3],[5,3],[6,3]], [3,2,5,4,6,1,7,0]))); // [5,5,2,5,4,5,6,7]
console.log(JSON.stringify(loudAndRich([], [0]))); // [0]
