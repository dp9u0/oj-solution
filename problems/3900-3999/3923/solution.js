/*
 * @lc app=leetcode id=3923 lang=javascript
 *
 * [3923] Minimum Generations to Target Point
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number[]} target
 * @return {number}
 */
var minGenerations = function (points, target) {
  // encode a 3D point (coords in [0,6]) into a single integer
  const enc = (x, y, z) => x * 49 + y * 7 + z;

  // floor-midpoint of two encoded points
  const mid = (a, b) => {
    const x1 = Math.floor(a / 49), r1 = a % 49;
    const y1 = Math.floor(r1 / 7), z1 = r1 % 7;
    const x2 = Math.floor(b / 49), r2 = b % 49;
    const y2 = Math.floor(r2 / 7), z2 = r2 % 7;
    return enc((x1 + x2) >> 1, (y1 + y2) >> 1, (z1 + z2) >> 1);
  };

  const tgt = enc(target[0], target[1], target[2]);
  let cur = new Set(points.map((p) => enc(p[0], p[1], p[2])));

  if (cur.has(tgt)) return 0;

  for (let k = 1; ; k++) {
    const arr = [...cur];
    const next = new Set(cur);
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        next.add(mid(arr[i], arr[j]));
      }
    }
    if (next.has(tgt)) return k;
    // no new point produced: the set has converged
    if (next.size === cur.size) return -1;
    cur = next;
  }
};
// @lc code=end

// TEST:
const run = (points, target) => minGenerations(points, target);
console.log(run([[0, 0, 0], [6, 6, 6]], [3, 3, 3]) === 1); // 示例1
console.log(run([[0, 0, 0], [5, 5, 5]], [1, 1, 1]) === 2); // 示例2
console.log(run([[0, 0, 0], [2, 2, 2], [3, 3, 3]], [2, 2, 2]) === 0); // 示例3
console.log(run([[1, 2, 3]], [5, 5, 5]) === -1); // 示例4：单点无法配对
console.log(run([[0, 0, 0], [6, 6, 6]], [0, 0, 6]) === -1); // z=6 需要两个 z=6 的父点，永远只有 [6,6,6]
console.log(run([[0, 0, 0], [6, 6, 6]], [2, 2, 2]) === 3); // gen1:3, gen2:1/4, gen3: 0&4->2
console.log(run([[4, 4, 4]], [4, 4, 4]) === 0); // 单点即目标
