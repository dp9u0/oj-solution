/*
 * @lc app=leetcode.cn id=LCP 42 lang=javascript
 *
 * [LCP 42] 玩具套圈
 */

// @lc code=start
/**
 * @param {number[][]} toys
 * @param {number[][]} circles
 * @param {number} r
 * @return {number}
 */
var circleGame = function(toys, circles, r) {
  // A circle of radius r fully covers a toy disk (xi, yi, ri) iff the
  // distance between centers <= r - ri.
  const distSq = (ax, ay, bx, by) => {
    const dx = ax - bx, dy = ay - by;
    return dx * dx + dy * dy;
  };

  // Spatial hash: put each toy in the grid cell of size 20 = r_max + ri_max.
  // A circle can only fully cover a toy when |cx - xi| <= r - ri <= 9, so the
  // covering toy's center lies in the circle's own grid cell or an adjacent one.
  const CELL = 20;
  const grid = new Map();
  for (let i = 0; i < toys.length; i++) {
    const [xi, yi, ri] = toys[i];
    const key = `${Math.floor(xi / CELL)},${Math.floor(yi / CELL)}`;
    if (!grid.has(key)) grid.set(key, []);
    grid.get(key).push(i);
  }

  const covered = new Array(toys.length).fill(false);

  for (const [cx, cy] of circles) {
    const gx = Math.floor(cx / CELL), gy = Math.floor(cy / CELL);
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        const bucket = grid.get(`${gx + dx},${gy + dy}`);
        if (!bucket) continue;
        for (const i of bucket) {
          if (covered[i]) continue;
          const ri = toys[i][2];
          // skip toys that can't possibly be covered: ri > r is impossible to cover fully
          if (ri > r) continue;
          if (distSq(cx, cy, toys[i][0], toys[i][1]) <= (r - ri) * (r - ri)) {
            covered[i] = true;
          }
        }
      }
    }
  }

  let ans = 0;
  for (const c of covered) if (c) ans++;
  return ans;
};
// @lc code=end

// TEST:
const assert = require('assert');

// O(n*m) brute force reference
function brute(toys, circles, r) {
  let count = 0;
  for (const [xi, yi, ri] of toys) {
    if (ri > r) continue; // a ring smaller than the toy can never fully cover it
    const lim = r - ri;   // >= 0 now, squaring is safe
    let ok = false;
    for (const [xj, yj] of circles) {
      const dx = xi - xj, dy = yi - yj;
      if (dx * dx + dy * dy <= lim * lim) { ok = true; break; }
    }
    if (ok) count++;
  }
  return count;
}

// LeetCode examples
assert.strictEqual(circleGame([[3,3,1],[3,2,1]], [[4,3]], 2), 1);
assert.strictEqual(circleGame([[1,3,2],[4,3,1],[7,1,2]], [[1,0],[3,3]], 4), 2);

// hand cases
assert.strictEqual(circleGame([[0,0,1]], [[0,0]], 1), 1);      // centered over toy
assert.strictEqual(circleGame([[0,0,10]], [[0,0]], 5), 0);     // toy radius > r, cannot cover
assert.strictEqual(circleGame([[0,0,1],[10,0,1],[100,0,1]], [[0,0],[100,0]], 2), 2); // far toys, two circles
assert.strictEqual(circleGame([[5,5,1],[6,5,1]], [[5,5]], 2), 2);  // one circle covers both close toys
assert.strictEqual(circleGame([], [], 1), 0);                 // empty toys

// randomized cross-check vs brute force (use integer coords, small radii)
let seed = 987654321;
function rnd() { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }
for (let t = 0; t < 400; t++) {
  const nt = 1 + Math.floor(rnd() * 12);
  const nc = 1 + Math.floor(rnd() * 8);
  const r = 1 + Math.floor(rnd() * 6);
  const toys = [], circles = [];
  for (let i = 0; i < nt; i++) toys.push([Math.floor(rnd() * 80), Math.floor(rnd() * 80), 1 + Math.floor(rnd() * 6)]);
  for (let j = 0; j < nc; j++) circles.push([Math.floor(rnd() * 80), Math.floor(rnd() * 80)]);
  const got = circleGame(toys, circles, r);
  const exp = brute(toys, circles, r);
  assert.strictEqual(got, exp, `mismatch toys=${JSON.stringify(toys)} circles=${JSON.stringify(circles)} r=${r}`);
}

console.log('All tests passed!');
console.log('ex1 =', circleGame([[3,3,1],[3,2,1]], [[4,3]], 2));
console.log('ex2 =', circleGame([[1,3,2],[4,3,1],[7,1,2]], [[1,0],[3,3]], 4));
