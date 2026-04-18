/*
 * @lc app=leetcode id=1654 lang=javascript
 *
 * [1654] Minimum Jumps to Reach Home
 */

// @lc code=start
/**
 * @param {number[]} forbidden
 * @param {number} a
 * @param {number} b
 * @param {number} x
 * @return {number}
 */
var minimumJumps = function(forbidden, a, b, x) {
  const forbid = new Set(forbidden);
  const maxPos = Math.max(...forbidden, x) + a + b;
  const visited = Array.from({ length: maxPos + 1 }, () => [false, false]);
  const queue = [[0, 0]];
  visited[0][0] = true;
  let steps = 0;
  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [pos, back] = queue.shift();
      if (pos === x) return steps;
      const fwd = pos + a;
      if (fwd <= maxPos && !forbid.has(fwd) && !visited[fwd][0]) {
        visited[fwd][0] = true;
        queue.push([fwd, 0]);
      }
      if (!back) {
        const bwd = pos - b;
        if (bwd >= 0 && !forbid.has(bwd) && !visited[bwd][1]) {
          visited[bwd][1] = true;
          queue.push([bwd, 1]);
        }
      }
    }
    steps++;
  }
  return -1;
};
// @lc code=end

// TEST:
console.log(minimumJumps([14, 4, 18, 1, 15], 3, 15, 9)); // 3
console.log(minimumJumps([8, 3, 16, 6, 12, 20], 15, 13, 11)); // -1
console.log(minimumJumps([1, 6, 2, 14, 5, 17, 4], 16, 9, 7)); // 2
console.log(minimumJumps([], 1, 1, 0)); // 0
console.log(minimumJumps([14, 4, 18, 1, 15], 3, 15, 9)); // 3
