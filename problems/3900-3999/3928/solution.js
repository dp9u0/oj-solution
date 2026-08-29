/*
 * @lc app=leetcode id=3928 lang=javascript
 *
 * [3928] Minimum Cost to Buy Apples
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} prices
 * @param {number[][]} roads
 * @return {number[]}
 */
var minCost = function(n, prices, roads) {
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v, cost, taxi] of roads) {
    adj[u].push([v, cost, cost * taxi]);
    adj[v].push([u, cost, cost * taxi]);
  }
  const ans = Array(n);
  const visited = Array(n).fill(false);
  for (let start = 0; start < n; start++) {
    if (adj[start].length === 0) {
      ans[start] = prices[start];
      visited[start] = true;
      continue;
    }
    if (visited[start]) continue;
    // collect component
    const comp = [];
    const stack = [start];
    visited[start] = true;
    while (stack.length) {
      const v = stack.pop();
      comp.push(v);
      for (const [to] of adj[v]) {
        if (!visited[to]) {
          visited[to] = true;
          stack.push(to);
        }
      }
    }
    const k = comp.length;
    const localId = new Map();
    comp.forEach((v, i) => localId.set(v, i));
    const cadj = comp.map((v) => adj[v].map(([to, c, ct]) => [localId.get(to), c, ct]));
    const cprice = comp.map((v) => prices[v]);
    // layered dijkstra per source within component
    for (let si = 0; si < k; si++) {
      const dist = Array(2 * k).fill(Infinity);
      dist[si] = 0;
      let bound = cprice[si];
      const heap = [[0, si]];
      const push = (d, state) => {
        heap.push([d, state]);
        let i = heap.length - 1;
        while (i > 0) {
          const p = (i - 1) >> 1;
          if (heap[p][0] <= heap[i][0]) break;
          [heap[p], heap[i]] = [heap[i], heap[p]];
          i = p;
        }
      };
      const pop = () => {
        const a = heap;
        const top = a[0];
        const last = a.pop();
        if (a.length > 0) {
          a[0] = last;
          let i = 0;
          while (true) {
            const l = 2 * i + 1;
            const r = 2 * i + 2;
            let m = i;
            if (l < a.length && a[l][0] < a[m][0]) m = l;
            if (r < a.length && a[r][0] < a[m][0]) m = r;
            if (m === i) break;
            [a[m], a[i]] = [a[i], a[m]];
            i = m;
          }
        }
        return top;
      };
      while (heap.length) {
        const [d, state] = pop();
        if (d > dist[state] || d >= bound) continue;
        const layer = state >= k ? 1 : 0;
        const v = state % k;
        if (layer === 0) {
          const ns = k + v;
          if (d + cprice[v] < dist[ns] && d + cprice[v] < bound) {
            dist[ns] = d + cprice[v];
            if (v === si && dist[ns] < bound) bound = dist[ns];
            push(dist[ns], ns);
          }
          for (const [to, c] of cadj[v]) {
            if (d + c < dist[to] && d + c < bound) {
              dist[to] = d + c;
              push(dist[to], to);
            }
          }
        } else {
          if (v === si && d < bound) {
            bound = d;
          }
          for (const [to, , ct] of cadj[v]) {
            const ns = k + to;
            if (d + ct < dist[ns] && d + ct < bound) {
              dist[ns] = d + ct;
              push(dist[ns], ns);
            }
          }
        }
      }
      ans[comp[si]] = Math.min(dist[k + si], cprice[si]);
    }
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(minCost(2, [8, 3], [[0, 1, 1, 2]])) === JSON.stringify([6, 3]));
console.log(JSON.stringify(minCost(1, [5], [])) === JSON.stringify([5]));
console.log(JSON.stringify(minCost(2, [1, 2], [])) === JSON.stringify([1, 2]));
console.log(JSON.stringify(minCost(3, [10, 1, 10], [[0, 1, 1, 1], [1, 2, 1, 1]])) === JSON.stringify([3, 1, 3]));
console.log(JSON.stringify(minCost(4, [4, 4, 4, 1], [[0, 1, 1, 5], [2, 3, 1, 5]])) === JSON.stringify([4, 4, 4, 1]));
