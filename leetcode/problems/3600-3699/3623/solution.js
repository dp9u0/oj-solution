/*
 * @lc app=leetcode id=3623 lang=javascript
 *
 * [3623] Count Number of Trapezoids I
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var countTrapezoids = function(points) {
  const MOD = 1e9 + 7;
  const yCount = new Map();
  for (const [, y] of points) yCount.set(y, (yCount.get(y) || 0) + 1);

  let sumP = 0n, sumP2 = 0n;
  for (const cnt of yCount.values()) {
    if (cnt < 2) continue;
    const p = BigInt(cnt * (cnt - 1) / 2);
    sumP += p;
    sumP2 += p * p;
  }

  return Number(((sumP * sumP - sumP2) / 2n) % BigInt(MOD));
};
// @lc code=end

// TEST:
console.log(countTrapezoids([[1,0],[2,0],[3,0],[2,2],[3,2]])); // 3
console.log(countTrapezoids([[0,0],[1,0],[0,1],[2,1]])); // 1
console.log(countTrapezoids([[0,0],[1,0],[0,1],[1,1]])); // 1
console.log(countTrapezoids([[0,0],[1,0],[2,0],[0,1],[1,1]])); // 3*1=3
console.log(countTrapezoids([[0,0],[1,0],[0,1],[1,1],[0,2],[1,2]])); // 1*1+1*1+1*1=3
