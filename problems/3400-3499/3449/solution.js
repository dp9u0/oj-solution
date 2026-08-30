/*
 * @lc app=leetcode id=3449 lang=javascript
 *
 * [3449] Maximize the Minimum Game Score
 */

// @lc code=start
/**
 * @param {number[]} points
 * @param {number} m
 * @return {number}
 */
var maxScore = function (points, m) {
  const n = points.length;

  // 检查:用不超过 m 步能否让每个 gameScore[i] >= x
  // 从左到右贪心:设 r_i = ceil(x / points[i]) 为 i 需要的访问次数,
  // p_i 为处理 i-1 时在 i-1↔i 边上往返顺路预存的访问次数。
  // 走进 i 花 1 步,欠额 k = r_i - p_i - 1 用 i↔(i+1) 往返补足(每次 2 步),
  // 这些往返给 i+1 预存 k 次访问;最后一位若已被预存满足则无需再走进去。
  const can = (x) => {
    if (x === 0) return true;
    let moves = 0;
    let p = 0;
    for (let i = 0; i < n; i++) {
      const r = Math.ceil(x / points[i]);
      if (p >= r) {
        if (i < n - 1) moves += 1; // 途经 i 继续向右
        p = 0;
      } else {
        const k = r - p - 1;
        moves += 1 + 2 * k;
        p = k;
      }
      if (moves > m) return false;
    }
    return moves <= m;
  };

  let lo = 0;
  let hi = Math.min(...points) * m; // 任何下标最多被访问 m 次
  while (lo < hi) {
    const mid = Math.floor((lo + hi + 1) / 2);
    if (can(mid)) lo = mid;
    else hi = mid - 1;
  }
  return lo;
};
// @lc code=end

// TEST:
console.log(maxScore([2, 4], 3) === 4); // 官方示例 1
console.log(maxScore([1, 2, 3], 5) === 2); // 官方示例 2
console.log(maxScore([3, 2], 4) === 4); // 4 步最多 (2,2) 次访问 → min(6,4)=4
console.log(maxScore([5, 5, 5], 10) === 10); // 访问 (2,2,2) 7 步;(3,3,3) 需 11 步
console.log(maxScore([2, 4], 4) === 4); // 4 步 (2,2) 访问 → min(4,8)=4
console.log(maxScore([4, 3, 5], 100) === 110); // 访问 (28,37,22) 共 99 步
console.log(maxScore([1, 1], 1) === 0); // 只有 1 步,无法访问到位置 1
console.log(maxScore([1000000, 1000000], 1000000000) === 500000000000000);
