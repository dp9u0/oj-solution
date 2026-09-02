/*
 * @lc app=leetcode.cn id=LCR 112 lang=javascript
 *
 * [LCR 112] 矩阵中的最长递增路径
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
  const m = matrix.length
  const n = matrix[0].length
  // memo[i][j] 表示从 (i, j) 出发的最长递增路径长度,0 表示尚未计算
  const memo = Array.from({ length: m }, () => new Array(n).fill(0))
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]

  const dfs = (i, j) => {
    if (memo[i][j] !== 0) return memo[i][j]
    let best = 1
    for (const [di, dj] of dirs) {
      const ni = i + di
      const nj = j + dj
      if (ni >= 0 && ni < m && nj >= 0 && nj < n && matrix[ni][nj] > matrix[i][j]) {
        best = Math.max(best, 1 + dfs(ni, nj))
      }
    }
    memo[i][j] = best
    return best
  }

  let ans = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans = Math.max(ans, dfs(i, j))
    }
  }
  return ans
};
// @lc code=end

// TEST: 官方示例1
console.log(longestIncreasingPath([[9, 9, 4], [6, 6, 8], [2, 1, 1]]) === 4)
// TEST: 官方示例2
console.log(longestIncreasingPath([[3, 4, 5], [3, 2, 6], [2, 2, 1]]) === 4)
// TEST: 官方示例3
console.log(longestIncreasingPath([[1]]) === 1)
// TEST: 1..9 螺旋填充,最长路径 5(1->2->3->6->9)
console.log(longestIncreasingPath([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) === 5)
// TEST: 单行
console.log(longestIncreasingPath([[1, 2, 3, 4]]) === 4)
// TEST: 单列升序,向上走 1->2->3->4
console.log(longestIncreasingPath([[4], [3], [2], [1]]) === 4)
