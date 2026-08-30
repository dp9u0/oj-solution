/*
 * @lc app=leetcode id=3924 lang=javascript
 *
 * [3924] Minimum Threshold Path With Limited Heavy Edges
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} target
 * @param {number} k
 * @return {number}
 */
var minimumThreshold = function(n, edges, source, target, k) {
    if (source === target) return 0;
    if (edges.length === 0) return -1;

    const adj = Array.from({ length: n }, () => []);
    let maxW = 0;
    for (const [u, v, w] of edges) {
        adj[u].push([v, w]);
        adj[v].push([u, w]);
        if (w > maxW) maxW = w;
    }

    // 判定：阈值为 T 时（w > T 为重边），是否存在 source -> target 且重边数 <= k 的路径
    // 0-1 BFS（桶式 Dijkstra），dist 为最少重边数，只扩展到 k 层
    function feasible(T) {
        const dist = new Int32Array(n).fill(-1);
        const buckets = Array.from({ length: k + 1 }, () => []);
        dist[source] = 0;
        buckets[0].push(source);
        for (let d = 0; d <= k; d++) {
            for (let i = 0; i < buckets[d].length; i++) {
                const u = buckets[d][i];
                if (dist[u] !== d) continue; // 过期条目
                for (const [v, w] of adj[u]) {
                    const nd = d + (w > T ? 1 : 0);
                    if (nd <= k && (dist[v] === -1 || nd < dist[v])) {
                        dist[v] = nd;
                        buckets[nd].push(v);
                    }
                }
            }
        }
        return dist[target] !== -1;
    }

    if (!feasible(maxW)) return -1;

    let lo = 0;
    let hi = maxW;
    while (lo < hi) {
        const mid = lo + ((hi - lo) >> 1);
        if (feasible(mid)) hi = mid;
        else lo = mid + 1;
    }
    return lo;
};
// @lc code=end

// TEST:
console.log(minimumThreshold(6, [[0,1,5],[1,2,3],[3,4,4],[4,5,1],[1,4,2]], 0, 3, 1) === 4); // 示例1: 0→1→4→3 仅 1 条重边
console.log(minimumThreshold(6, [[0,1,3],[1,2,4],[3,4,5],[4,5,6]], 0, 4, 1) === -1); // 示例2: 不连通
console.log(minimumThreshold(4, [[0,1,2],[1,2,2],[2,3,2],[3,0,2]], 0, 0, 0) === 0); // 示例3: source == target
console.log(minimumThreshold(2, [[0,1,7]], 0, 1, 0) === 7); // k=0: 该边必须为轻边
console.log(minimumThreshold(2, [[0,1,7]], 0, 1, 1) === 0); // k=1: 允许 1 条重边, T=0 即可
console.log(minimumThreshold(3, [[0,1,1],[1,2,100],[0,2,50]], 0, 2, 0) === 50); // k=0: 只能走轻边直连
console.log(minimumThreshold(3, [[0,1,1],[1,2,100]], 0, 2, 1) === 1); // k=1: 0→1 轻边 + 借 1 次重边
console.log(minimumThreshold(3, [[0,1,1],[1,2,100]], 0, 2, 0) === 100); // k=0: 两边都必须为轻边
console.log(minimumThreshold(2, [], 0, 1, 0) === -1); // 无边且 source != target
