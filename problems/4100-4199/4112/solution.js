/*
 * @lc app=leetcode.cn id=4112 lang=javascript
 *
 * [4112] 将子树置零后的最大得分
 */

// @lc code=start
/**
 * @param {number[]} parent
 * @param {number[]} op
 * @param {number[]} score
 * @return {number}
 */
var maxScore = function(parent, op, score) {
  const n = parent.length;
  const children = Array.from({ length: n }, () => []);
  for (let i = 1; i < n; i++) children[parent[i]].push(i);
  // BFS 序保证父节点先于子节点出现,倒序处理即子先于父
  const order = [0];
  for (let i = 0; i < order.length; i++) {
    for (const c of children[order[i]]) order.push(c);
  }
  const dp = score.slice();
  for (let i = order.length - 1; i >= 0; i--) {
    const u = order[i];
    if (children[u].length === 0) continue;
    let base = score[u];
    let minDp = Infinity;
    for (const c of children[u]) {
      base += dp[c];
      if (dp[c] < minDp) minDp = dp[c];
    }
    dp[u] = op[u] === 1 ? base - minDp : base - Math.min(0, minDp);
  }
  return dp[0];
};
// @lc code=end

// TEST:
console.log(maxScore([-1, 0, 0, 0, 1, 2, 3, 3], [1, 1, 0, 0, 1, 1, 0, 1], [5, 6, 1, 2, 3, 2, 3, -3])) // 16
console.log(maxScore([-1, 0, 0], [0, 0, 0], [1, 2, 3])) // 6
console.log(maxScore([-1], [1], [-10])) // -10
console.log(maxScore([-1, 0, 1], [1, 1, 1], [1, 2, 3])) // 1
console.log(maxScore([-1, 0, 0], [0, 1, 1], [-5, -2, -3])) // -7
