/*
 * @lc app=leetcode id=4003 lang=javascript
 *
 * [4003] Minimum Path Cost With Parity Rules
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} penalty
 * @return {number}
 */
var minCost = function(m, n, penalty) {
  // state: (i, j, p) where p = parity of NEXT action (0: odd, 1: even)
  const S = 2 * m * n;
  const dist = new Float64Array(S).fill(Infinity);
  const encode = (i, j, p) => (i * n + j) * 2 + p;
  const startState = encode(0, 0, 0);
  dist[startState] = 1; // entry cost (0+1)*(0+1)
  const heap = [[1, startState]];
  const push = (d, s) => {
    heap.push([d, s]);
    let i = heap.length - 1;
    while (i > 0) {
      const par = (i - 1) >> 1;
      if (heap[par][0] <= heap[i][0]) break;
      [heap[par], heap[i]] = [heap[i], heap[par]];
      i = par;
    }
  };
  const pop = () => {
    const top = heap[0];
    const last = heap.pop();
    if (heap.length > 0) {
      heap[0] = last;
      let i = 0;
      while (true) {
        const l = 2 * i + 1;
        const r = 2 * i + 2;
        let mi = i;
        if (l < heap.length && heap[l][0] < heap[mi][0]) mi = l;
        if (r < heap.length && heap[r][0] < heap[mi][0]) mi = r;
        if (mi === i) break;
        [heap[mi], heap[i]] = [heap[i], heap[mi]];
        i = mi;
      }
    }
    return top;
  };
  const target = (m - 1) * n + (n - 1);
  const DIRS = [[0, 1, 0], [1, 0, 0], [0, -1, 1], [-1, 0, 1]]; // [di, dj, isLeftUp]
  while (heap.length) {
    const [d, s] = pop();
    if (d > dist[s]) continue;
    const idx = s >> 1;
    const p = s & 1;
    const i = Math.floor(idx / n);
    const j = idx % n;
    if (idx === target) return d;
    const np = 1 - p;
    // wait
    const ws = encode(i, j, np);
    if (d + penalty[i][j] < dist[ws]) {
      dist[ws] = d + penalty[i][j];
      push(dist[ws], ws);
    }
    for (const [di, dj, isLeftUp] of DIRS) {
      const ni = i + di;
      const nj = j + dj;
      if (ni < 0 || ni >= m || nj < 0 || nj >= n) continue;
      const compliant = p === 0 ? isLeftUp === 0 : isLeftUp === 1;
      const cost = (ni + 1) * (nj + 1) + (compliant ? 0 : penalty[i][j]);
      const ns = encode(ni, nj, np);
      if (d + cost < dist[ns]) {
        dist[ns] = d + cost;
        push(dist[ns], ns);
      }
    }
  }
  return -1;
};
// @lc code=end

// TEST:
console.log(minCost(2, 2, [[5, 3], [1, 4]]) === 8);
console.log(minCost(1, 2, [[0, 100000]]) === 3);
console.log(minCost(1, 1, [[7]]) === 1);
