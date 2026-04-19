/*
 * @lc app=leetcode id=2493 lang=javascript
 *
 * [2493] Divide Nodes Into the Maximum Number of Groups
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var magnificentSets = function(n, edges) {
    const adj = Array.from({ length: n + 1 }, () => []);
    for (const [a, b] of edges) {
        adj[a].push(b);
        adj[b].push(a);
    }

    const visited = new Array(n + 1).fill(false);
    let ans = 0;

    for (let i = 1; i <= n; i++) {
        if (visited[i]) continue;
        const comp = [];
        const queue = [i];
        visited[i] = true;
        while (queue.length > 0) {
            const u = queue.shift();
            comp.push(u);
            for (const v of adj[u]) {
                if (!visited[v]) {
                    visited[v] = true;
                    queue.push(v);
                }
            }
        }

        let maxDepth = 0;
        for (const start of comp) {
            const depth = bfs(start, adj, n);
            if (depth === -1) return -1;
            maxDepth = Math.max(maxDepth, depth);
        }
        ans += maxDepth;
    }
    return ans;
};

const bfs = (start, adj, n) => {
    const dist = new Int16Array(n + 1).fill(-1);
    const queue = [start];
    dist[start] = 1;
    let maxD = 1, head = 0;
    while (head < queue.length) {
        const u = queue[head++];
        for (const v of adj[u]) {
            if (dist[v] === -1) {
                dist[v] = dist[u] + 1;
                if (dist[v] > maxD) maxD = dist[v];
                queue.push(v);
            } else if (Math.abs(dist[v] - dist[u]) !== 1) {
                return -1;
            }
        }
    }
    return maxD;
};
// @lc code=end

// TEST:
console.log(magnificentSets(6, [[1,2],[1,4],[1,5],[2,6],[2,3],[4,6]])); // 4
console.log(magnificentSets(3, [[1,2],[2,3],[3,1]])); // -1
console.log(magnificentSets(4, [[1,2],[2,3],[3,4]])); // 4
console.log(magnificentSets(5, [[1,2],[3,4]])); // 5 (comp1: 2 groups, comp2: 2 groups, node5: 1 group)
console.log(magnificentSets(1, [])); // 1
