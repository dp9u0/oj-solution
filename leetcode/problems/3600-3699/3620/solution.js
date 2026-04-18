/*
 * @lc app=leetcode id=3620 lang=javascript
 *
 * [3620] Network Recovery Pathways
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @param {boolean[]} online
 * @param {number} k
 * @return {number}
 */
var findMaxPathScore = function(edges, online, k) {
    const n = online.length;

    const adj = Array.from({ length: n }, () => []);
    const inDeg = new Array(n).fill(0);
    for (const [u, v, cost] of edges) {
        adj[u].push([v, cost]);
        inDeg[v]++;
    }

    const topo = [];
    const deg = [...inDeg];
    const q = [];
    for (let i = 0; i < n; i++) {
        if (deg[i] === 0) q.push(i);
    }
    for (let front = 0; front < q.length; front++) {
        const u = q[front];
        topo.push(u);
        for (const [v] of adj[u]) {
            if (--deg[v] === 0) q.push(v);
        }
    }

    function canReach(threshold) {
        const dist = new Array(n).fill(Infinity);
        dist[0] = 0;
        for (const u of topo) {
            if (dist[u] === Infinity) continue;
            for (const [v, cost] of adj[u]) {
                if (cost < threshold) continue;
                if (!online[v] && v !== n - 1) continue;
                const nd = dist[u] + cost;
                if (nd < dist[v] && nd <= k) {
                    dist[v] = nd;
                }
            }
        }
        return dist[n - 1] <= k;
    }

    let lo = 0, hi = 0;
    for (const e of edges) hi = Math.max(hi, e[2]);

    let ans = -1;
    while (lo <= hi) {
        const mid = (lo + hi) >>> 1;
        if (canReach(mid)) {
            ans = mid;
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(findMaxPathScore([[0,1,5],[1,3,10],[0,2,3],[2,3,4]], [true,true,true,true], 10)); // 3
console.log(findMaxPathScore([[0,1,7],[1,4,5],[0,2,6],[2,3,6],[3,4,2],[2,4,6]], [true,true,true,false,true], 12)); // 6
console.log(findMaxPathScore([[0,1,100]], [true,true], 10)); // -1
console.log(findMaxPathScore([[0,1,5]], [true,true], 5)); // 5
console.log(findMaxPathScore([[0,1,3],[0,2,5],[1,3,4],[2,3,1]], [true,true,true,true], 10)); // 3
