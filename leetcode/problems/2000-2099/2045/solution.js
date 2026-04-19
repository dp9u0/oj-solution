/*
 * @lc app=leetcode id=2045 lang=javascript
 *
 * [2045] Second Minimum Time to Reach Destination
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} time
 * @param {number} change
 * @return {number}
 */
var secondMinimum = function(n, edges, time, change) {
    const adj = Array.from({ length: n + 1 }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const bfs = (start) => {
        const dist = new Array(n + 1).fill(-1);
        dist[start] = 0;
        const queue = [start];
        let head = 0;
        while (head < queue.length) {
            const u = queue[head++];
            for (const v of adj[u]) {
                if (dist[v] === -1) {
                    dist[v] = dist[u] + 1;
                    queue.push(v);
                }
            }
        }
        return dist;
    };

    const dist1 = bfs(1);
    const dist2 = bfs(n);
    const d = dist1[n];

    // Check if any edge enables a path of length d+1
    let hasD1 = false;
    for (const [u, v] of edges) {
        if (dist1[u] + 1 + dist2[v] === d + 1 || dist1[v] + 1 + dist2[u] === d + 1) {
            hasD1 = true;
            break;
        }
    }

    const L = hasD1 ? d + 1 : d + 2;

    let t = 0;
    for (let i = 0; i < L; i++) {
        const cycle = Math.floor(t / change);
        if (cycle % 2 === 1) t = (cycle + 1) * change;
        t += time;
    }

    return t;
};
// @lc code=end

// TEST:
console.log(secondMinimum(5, [[1,2],[1,3],[1,4],[3,4],[4,5]], 3, 5)); // 13
console.log(secondMinimum(2, [[1,2]], 3, 2)); // 11
console.log(secondMinimum(3, [[1,2],[2,3]], 1, 1)); // 7 (d=2, no d+1, L=4)
console.log(secondMinimum(4, [[1,2],[2,3],[3,4],[1,3]], 1, 1)); // d=2, edge(1,3): 0+1+1=2≠3; edge(3,4): 1+1+0=2≠3. But dist1[1]+1+dist2[3]=0+1+1=2≠3. dist1[3]+1+dist2[1]=1+1+3=5≠3. Hmm
console.log(secondMinimum(3, [[1,2],[1,3]], 1, 1)); // 5 (d=2, L=4)
