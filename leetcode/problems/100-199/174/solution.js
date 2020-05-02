/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  let height = dungeon.length;
  let width = dungeon[0].length;
  let dp = new Array(width + 1).fill(Number.POSITIVE_INFINITY)
  let p = dungeon[height - 1][width - 1];
  dp[width - 1] = 1;
  for (let i = height - 1; i >= 0; i--) {
    for (let j = width - 1; j >= 0; j--) {
      let down = dp[j];
      let right = dp[j + 1];
      let min = Math.min(right, down) - dungeon[i][j];
      min = Math.max(1, min); // 至少一滴血
      dp[j] = Math.max(1, Math.min(right, down) - dungeon[i][j]);
    }
  }
  return dp[0];
};


// TEST:
console.log(calculateMinimumHP([
  [-2, -3, 3],
  [-5, -10, 1],
  [10, 30, -5],
]))

console.log(calculateMinimumHP([
  [-2, -3, 3],
]))

console.log(calculateMinimumHP([
  [-2],
]))