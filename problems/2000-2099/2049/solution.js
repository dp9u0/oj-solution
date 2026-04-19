/*
 * @lc app=leetcode id=2049 lang=javascript
 *
 * [2049] Count Nodes With the Highest Score
 */

// @lc code=start
/**
 * @param {number[]} parents
 * @return {number}
 */
var countHighestScoreNodes = function(parents) {
  const n = parents.length;
  const children = Array.from({ length: n }, () => []);
  for (let i = 1; i < n; i++) children[parents[i]].push(i);

  const size = new Int32Array(n);

  const dfs = (u) => {
    size[u] = 1;
    for (const v of children[u]) size[u] += dfs(v);
    return size[u];
  };
  dfs(0);

  let maxScore = 0n, count = 0;

  for (let i = 0; i < n; i++) {
    let score = 1n;
    const rest = n - size[i];
    if (rest > 0) score *= BigInt(rest);
    for (const v of children[i]) score *= BigInt(size[v]);

    if (score > maxScore) {
      maxScore = score;
      count = 1;
    } else if (score === maxScore) {
      count++;
    }
  }

  return count;
};
// @lc code=end

// TEST:
console.log(countHighestScoreNodes([-1,2,0,2,0])); // 3
console.log(countHighestScoreNodes([-1,2,0])); // 2
console.log(countHighestScoreNodes([-1,0])); // 2
console.log(countHighestScoreNodes([-1,0,1])); // 1
console.log(countHighestScoreNodes([-1,0,0])); // 2
