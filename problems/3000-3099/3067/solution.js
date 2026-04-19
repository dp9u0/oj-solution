/*
 * @lc app=leetcode id=3067 lang=javascript
 *
 * [3067] Count Pairs of Connectable Servers in a Weighted Tree Network
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @param {number} signalSpeed
 * @return {number[]}
 */
var countPairsOfConnectableServers = function(edges, signalSpeed) {
    const n = edges.length + 1;
    const adj = Array.from({ length: n }, () => []);
    for (const [a, b, w] of edges) {
        adj[a].push([b, w]);
        adj[b].push([a, w]);
    }

    const countInSubtree = (node, parent, dist) => {
        let cnt = dist % signalSpeed === 0 ? 1 : 0;
        for (const [nei, w] of adj[node]) {
            if (nei !== parent) {
                cnt += countInSubtree(nei, node, dist + w);
            }
        }
        return cnt;
    };

    const result = new Array(n).fill(0);

    for (let c = 0; c < n; c++) {
        let total = 0;
        for (const [nei, w] of adj[c]) {
            const cnt = countInSubtree(nei, c, w);
            result[c] += total * cnt;
            total += cnt;
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(countPairsOfConnectableServers([[0,1,1],[1,2,5],[2,3,13],[3,4,9],[4,5,2]], 1))); // [0,4,6,6,4,0]
console.log(JSON.stringify(countPairsOfConnectableServers([[0,6,3],[6,5,3],[0,3,1],[3,2,7],[3,1,6],[3,4,2]], 3))); // [2,0,0,0,0,0,2]
