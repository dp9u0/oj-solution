/*
 * @lc app=leetcode id=2662 lang=javascript
 *
 * [2662] Minimum Cost of a Path With Special Roads
 */

// @lc code=start
/**
 * @param {number[]} start
 * @param {number[]} target
 * @param {number[][]} specialRoads
 * @return {number}
 */
var minimumCost = function(start, target, specialRoads) {
  // Collect all unique points (nodes)
  const points = [];
  const idx = new Map();

  function getIdx(x, y) {
    const key = x * 100001 + y;
    if (idx.has(key)) return idx.get(key);
    const i = points.length;
    points.push([x, y]);
    idx.set(key, i);
    return i;
  }

  const si = getIdx(start[0], start[1]);
  const ti = getIdx(target[0], target[1]);

  // Special road edges: from index -> [[to index, cost], ...]
  const special = new Map();
  for (const [x1, y1, x2, y2, cost] of specialRoads) {
    const fi = getIdx(x1, y1);
    const toi = getIdx(x2, y2);
    if (!special.has(fi)) special.set(fi, []);
    special.get(fi).push([toi, cost]);
  }

  const n = points.length;
  const dist = new Float64Array(n).fill(Infinity);
  dist[si] = 0;

  // Min-heap [cost, node]
  const heap = [[0, si]];

  function push(item) {
    heap.push(item);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p][0] <= heap[i][0]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  }

  function pop() {
    const top = heap[0];
    const last = heap.pop();
    if (heap.length) {
      heap[0] = last;
      let i = 0;
      while (true) {
        let m = i;
        const l = 2 * i + 1, r = 2 * i + 2;
        if (l < heap.length && heap[l][0] < heap[m][0]) m = l;
        if (r < heap.length && heap[r][0] < heap[m][0]) m = r;
        if (m === i) break;
        [heap[m], heap[i]] = [heap[i], heap[m]];
        i = m;
      }
    }
    return top;
  }

  while (heap.length) {
    const [d, u] = pop();
    if (d > dist[u]) continue;
    if (u === ti) return d;

    const [ux, uy] = points[u];

    // Walk to all other nodes via Manhattan distance
    for (let v = 0; v < n; v++) {
      const md = Math.abs(ux - points[v][0]) + Math.abs(uy - points[v][1]);
      if (d + md < dist[v]) {
        dist[v] = d + md;
        push([dist[v], v]);
      }
    }

    // Use special roads from this node
    if (special.has(u)) {
      for (const [v, cost] of special.get(u)) {
        if (d + cost < dist[v]) {
          dist[v] = d + cost;
          push([dist[v], v]);
        }
      }
    }
  }

  return dist[ti];
};
// @lc code=end

// TEST:
console.log(minimumCost([1, 1], [4, 5], [[1, 2, 3, 3, 2], [3, 4, 4, 5, 1]])); // 5
console.log(minimumCost([3, 2], [5, 7], [[5, 7, 3, 2, 1], [3, 2, 3, 4, 4], [3, 3, 5, 5, 5], [3, 4, 5, 6, 6]])); // 7
console.log(minimumCost([1, 1], [10, 4], [[4, 2, 1, 1, 3], [1, 2, 7, 4, 4], [10, 3, 6, 1, 2], [6, 1, 1, 2, 3]])); // 8
console.log(minimumCost([1, 1], [1, 1], [])); // 0
console.log(minimumCost([1, 1], [10, 10], [])); // 18
