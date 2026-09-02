/*
 * @lc app=leetcode.cn id=LCR 130 lang=javascript
 *
 * [LCR 130] 衣橱整理
 */

// @lc code=start
/**
 * 计算数字 x 的数位和
 * @param {number} x
 * @return {number}
 */
function digitSum(x) {
  let s = 0;
  while (x > 0) {
    s += x % 10;
    x = Math.floor(x / 10);
  }
  return s;
}

/**
 * @param {number} m
 * @param {number} n
 * @param {number} cnt
 * @return {number}
 */
var wardrobeFinishing = function(m, n, cnt) {
  const visited = Array.from({ length: m }, () => new Array(n).fill(false));

  /**
   * 从 (i, j) 出发能整理到的格子数（DFS，只向右/下移动）
   * @param {number} i
   * @param {number} j
   * @return {number}
   */
  function dfs(i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n) return 0;
    if (visited[i][j]) return 0;
    if (digitSum(i) + digitSum(j) > cnt) return 0;
    visited[i][j] = true;
    return 1 + dfs(i + 1, j) + dfs(i, j + 1);
  }

  return dfs(0, 0);
};
// @lc code=end

// TEST:
// 示例 1
console.log(wardrobeFinishing(4, 7, 5)); // 18
// 边界：单格
console.log(wardrobeFinishing(1, 1, 0)); // 1
// cnt=0 只能访问 digit 和为 0 的 (0,0)，(0,1),(1,0) 的 digit 和为 1 > 0
console.log(wardrobeFinishing(2, 2, 0)); // 1
// cnt=1: (0,0),(0,1),(1,0)，共 3
console.log(wardrobeFinishing(2, 2, 1)); // 3
// 大范围全部可达：m=n=10，各数位和最大 9+9... 但 digit(i)<=9<20，全部可达
console.log(wardrobeFinishing(10, 10, 20)); // 100
// cnt=3 在 2x3 网格：(0,0),(0,1),(0,2),(1,0),(1,1) 可达，(1,2) digit=1+2=3 可达 -> 全 6
console.log(wardrobeFinishing(2, 3, 3)); // 6
// 经典判定例：m=3,n=3,cnt=1 -> (0,0),(0,1),(1,0) = 3
console.log(wardrobeFinishing(3, 3, 1)); // 3
