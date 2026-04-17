/*
 * @lc app=leetcode id=2699 lang=javascript
 *
 * [2699] Modify Graph Edge Weights
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @param {number} target
 * @return {number[][]}
 */
var modifiedGraphEdges = function(n, edges, source, destination, target) {
    const INF = 2e9;

    const dijkstra = (src, getW) => {
        const dist = new Float64Array(n).fill(Infinity);
        dist[src] = 0;
        const visited = new Uint8Array(n);
        const adj = Array.from({ length: n }, () => []);
        for (let i = 0; i < edges.length; i++) {
            const [u, v, w] = edges[i];
            const wt = w === -1 ? getW(i) : w;
            adj[u].push([v, wt]);
            adj[v].push([u, wt]);
        }
        for (let i = 0; i < n; i++) {
            let u = -1;
            for (let j = 0; j < n; j++) {
                if (!visited[j] && (u === -1 || dist[j] < dist[u])) u = j;
            }
            if (u === -1 || dist[u] === Infinity) break;
            visited[u] = 1;
            for (const [v, w] of adj[u]) {
                const nd = dist[u] + w;
                if (nd < dist[v]) dist[v] = nd;
            }
        }
        return dist;
    };

    const makeResult = (getW) => edges.map(([u, v, w], i) => [u, v, w === -1 ? getW(i) : w]);

    const shortest = (getW) => dijkstra(source, getW)[destination];

    const d1 = shortest(() => 1);
    if (d1 > target) return [];
    if (d1 === target) return makeResult(() => 1);

    const d2 = shortest(() => INF);
    if (d2 < target) return [];
    if (d2 === target) return makeResult(() => INF);

    // Binary search for uniform weight w
    let lo = 1, hi = INF, bestW = -1;
    while (lo <= hi) {
        const mid = lo + ((hi - lo) >> 1);
        const d = shortest(() => mid);
        if (d === target) { bestW = mid; break; }
        if (d < target) lo = mid + 1;
        else hi = mid - 1;
    }
    if (bestW !== -1) return makeResult(() => bestW);

    // Single -1 edge adjustment: compute dist with all -1 = 1
    const distS = dijkstra(source, () => 1);
    const distD = dijkstra(destination, () => 1);

    // For each -1 edge on shortest path, try changing only it
    for (let idx = 0; idx < edges.length; idx++) {
        const [u, v, w] = edges[idx];
        if (w !== -1) continue;
        for (const [a, b] of [[u, v], [v, u]]) {
            if (distS[a] + 1 + distD[b] !== d1) continue;
            const newW = target - distS[a] - distD[b];
            if (newW < 1 || newW > INF) continue;
            const getW = (i) => i === idx ? newW : 1;
            if (shortest(getW) === target) return makeResult(getW);
        }
    }

    // Try increasing all shortest-path -1 edges
    const onSP = new Set();
    for (let idx = 0; idx < edges.length; idx++) {
        const [u, v, w] = edges[idx];
        if (w !== -1) continue;
        if (distS[u] + 1 + distD[v] === d1 || distS[v] + 1 + distD[u] === d1) {
            onSP.add(idx);
        }
    }
    const wSP = target - d1 + 1;
    if (wSP >= 1) {
        const getW1 = (i) => onSP.has(i) ? wSP : INF;
        if (shortest(getW1) === target) return makeResult(getW1);
        const getW2 = (i) => onSP.has(i) ? wSP : 1;
        if (shortest(getW2) === target) return makeResult(getW2);
    }

    // Iterative: adjust edges one at a time
    const weights = edges.map(([,,w]) => w === -1 ? 1 : w);
    for (let iter = 0; iter < edges.length + 5; iter++) {
        const getW = (i) => weights[i];
        const d = shortest(getW);
        if (d === target) return edges.map(([u, v, w], i) => [u, v, w === -1 ? weights[i] : w]);
        if (d > target) break;
        // Find a -1 edge on current shortest path and increase it
        const ds = dijkstra(source, getW);
        const dd = dijkstra(destination, getW);
        let found = false;
        for (let idx = 0; idx < edges.length; idx++) {
            const [u, v, w] = edges[idx];
            if (w !== -1) continue;
            if (ds[u] + weights[idx] + dd[v] === d || ds[v] + weights[idx] + dd[u] === d) {
                weights[idx] = Math.min(INF, target - Math.min(ds[u] + dd[v], ds[v] + dd[u]));
                found = true;
                break;
            }
        }
        if (!found) break;
    }

    return [];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(modifiedGraphEdges(5, [[4,1,-1],[2,0,-1],[0,3,-1],[4,3,-1]], 0, 1, 5)));
console.log(JSON.stringify(modifiedGraphEdges(3, [[0,1,-1],[0,2,5]], 0, 2, 6))); // []
console.log(JSON.stringify(modifiedGraphEdges(4, [[1,0,4],[1,2,3],[2,3,5],[0,3,-1]], 0, 2, 6)));
