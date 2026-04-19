/*
 * @lc app=leetcode id=2642 lang=javascript
 *
 * [2642] Design Graph With Shortest Path Calculator
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 */
var Graph = function(n, edges) {
  this.n = n;
  this.adj = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) {
    this.adj[u].push([v, w]);
  }
};

/**
 * @param {number[]} edge
 * @return {void}
 */
Graph.prototype.addEdge = function(edge) {
  this.adj[edge[0]].push([edge[1], edge[2]]);
};

/**
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
Graph.prototype.shortestPath = function(node1, node2) {
  const dist = new Array(this.n).fill(Infinity);
  dist[node1] = 0;
  const heap = [[0, node1]];

  const swap = (i, j) => { [heap[i], heap[j]] = [heap[j], heap[i]]; };
  const siftUp = (i) => {
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p][0] <= heap[i][0]) break;
      swap(p, i);
      i = p;
    }
  };
  const siftDown = (i) => {
    const len = heap.length;
    while (true) {
      let s = i, l = 2 * i + 1, r = 2 * i + 2;
      if (l < len && heap[l][0] < heap[s][0]) s = l;
      if (r < len && heap[r][0] < heap[s][0]) s = r;
      if (s === i) break;
      swap(s, i);
      i = s;
    }
  };

  while (heap.length) {
    const [d, u] = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    if (heap.length) siftDown(0);
    if (d > dist[u]) continue;
    if (u === node2) return d;
    for (const [v, w] of this.adj[u]) {
      if (dist[v] > d + w) {
        dist[v] = d + w;
        heap.push([d + w, v]);
        siftUp(heap.length - 1);
      }
    }
  }

  return -1;
};

/**
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */
// @lc code=end

// TEST:
let g = new Graph(4, [[0,2,5],[0,1,2],[1,2,1],[3,0,3]]);
console.log(g.shortestPath(3, 2)); // 6
console.log(g.shortestPath(0, 3)); // -1
g.addEdge([1,3,4]);
console.log(g.shortestPath(0, 3)); // 6
console.log(g.shortestPath(1, 3)); // 4
console.log(g.shortestPath(0, 0)); // 0
