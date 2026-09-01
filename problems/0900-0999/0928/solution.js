/*
 * @lc app=leetcode id=928 lang=javascript
 *
 * [928] Minimize Malware Spread II
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @param {number[]} initial
 * @return {number}
 */
var minMalwareSpread = function(graph, initial) {
    const n = graph.length;
    const initSet = new Set(initial);

    // Reverse approach: for each non-initial node, find which initial nodes can reach it
    // without passing through other initial nodes
    const sources = Array.from({ length: n }, () => []);

    for (const src of initial) {
        const visited = new Uint8Array(n);
        visited[src] = 1;
        const queue = [src];
        for (let qi = 0; qi < queue.length; qi++) {
            const u = queue[qi];
            for (let v = 0; v < n; v++) {
                if (graph[u][v] === 0 || visited[v]) continue;
                // Don't pass through other initial nodes
                if (v !== src && initSet.has(v)) continue;
                visited[v] = 1;
                queue.push(v);
            }
        }
        for (let i = 0; i < n; i++) {
            if (visited[i] && !initSet.has(i)) {
                sources[i].push(src);
            }
        }
    }

    // Count saves: if node i has exactly 1 source, removing that source saves i
    const saveCount = new Map();
    for (const src of initial) saveCount.set(src, 0);

    for (let i = 0; i < n; i++) {
        if (initSet.has(i)) continue;
        if (sources[i].length === 1) {
            const src = sources[i][0];
            saveCount.set(src, saveCount.get(src) + 1);
        }
    }

    let best = -1;
    let bestNode = Math.min(...initial);
    for (const src of initial) {
        const saved = saveCount.get(src);
        if (saved > best || (saved === best && src < bestNode)) {
            best = saved;
            bestNode = src;
        }
    }

    return bestNode;
};
// @lc code=end

// TEST:
console.log(minMalwareSpread([[1,1,0],[1,1,0],[0,0,1]], [0,1])); // 0
console.log(minMalwareSpread([[1,1,0],[1,1,1],[0,1,1]], [0,1])); // 1
console.log(minMalwareSpread([[1,1,0,0],[1,1,1,0],[0,1,1,1],[0,0,1,1]], [0,1])); // 1
