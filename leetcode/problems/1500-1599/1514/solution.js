/*
 * @lc app=leetcode id=1514 lang=javascript
 *
 * [1514] Path with Maximum Probability
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function(n, edges, succProb, start_node, end_node) {
  const adj = Array.from({ length: n }, () => []);
  for (let i = 0; i < edges.length; i++) {
    const [a, b] = edges[i];
    adj[a].push([b, succProb[i]]);
    adj[b].push([a, succProb[i]]);
  }

  const prob = new Float64Array(n);
  prob[start_node] = 1;
  // max-heap: [probability, node]
  const heap = [[1, start_node]];

  const siftDown = (i, size) => {
    while (true) {
      let largest = i;
      const l = 2 * i + 1, r = 2 * i + 2;
      if (l < size && heap[l][0] > heap[largest][0]) largest = l;
      if (r < size && heap[r][0] > heap[largest][0]) largest = r;
      if (largest === i) break;
      [heap[i], heap[largest]] = [heap[largest], heap[i]];
      i = largest;
    }
  };

  while (heap.length > 0) {
    const [p, u] = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    siftDown(0, heap.length);

    if (p < prob[u] - 1e-9) continue;
    if (u === end_node) return prob[u];

    for (const [v, w] of adj[u]) {
      if (prob[u] * w > prob[v] + 1e-9) {
        prob[v] = prob[u] * w;
        heap.push([prob[v], v]);
        // bubble up
        let idx = heap.length - 1;
        while (idx > 0) {
          const parent = (idx - 1) >> 1;
          if (heap[parent][0] >= heap[idx][0]) break;
          [heap[parent], heap[idx]] = [heap[idx], heap[parent]];
          idx = parent;
        }
      }
    }
  }

  return prob[end_node];
};
// @lc code=end

// TEST:
console.log(maxProbability(3, [[0,1],[1,2],[0,2]], [0.5,0.5,0.2], 0, 2)); // 0.25
console.log(maxProbability(3, [[0,1],[1,2],[0,2]], [0.5,0.5,0.3], 0, 2)); // 0.3
console.log(maxProbability(3, [[0,1]], [0.5], 0, 2)); // 0
console.log(maxProbability(5, [[0,1],[1,2],[2,3],[3,4]], [0.5,0.5,0.5,0.5], 0, 4)); // 0.0625
console.log(maxProbability(2, [[0,1]], [1.0], 0, 1)); // 1.0
