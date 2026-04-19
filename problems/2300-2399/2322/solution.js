/*
 * @lc app=leetcode id=2322 lang=javascript
 *
 * [2322] Minimum Score After Removals on a Tree
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} edges
 * @return {number}
 */
var minimumScore = function(nums, edges) {
    const n = nums.length;
    const adj = Array.from({ length: n }, () => []);
    for (const [a, b] of edges) { adj[a].push(b); adj[b].push(a); }

    const parent = new Int32Array(n);
    const tin = new Int32Array(n);
    const tout = new Int32Array(n);
    const subXor = new Int32Array(n);
    let timer = 0;

    const dfs = (u, p) => {
        parent[u] = p;
        tin[u] = ++timer;
        subXor[u] = nums[u];
        for (const v of adj[u]) {
            if (v === p) continue;
            dfs(v, u);
            subXor[u] ^= subXor[v];
        }
        tout[u] = ++timer;
    };
    dfs(0, -1);

    const isAncestor = (a, b) => tin[a] <= tin[b] && tout[b] <= tout[a];

    const total = subXor[0];
    let ans = Infinity;

    // Edges are (child, parent[child]) for all non-root nodes
    const nodes = [];
    for (let i = 1; i < n; i++) nodes.push(i);

    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const u = nodes[i], v = nodes[j];
            let x, y, z;
            if (isAncestor(u, v)) {
                x = subXor[v];
                y = subXor[u] ^ subXor[v];
                z = total ^ subXor[u];
            } else if (isAncestor(v, u)) {
                x = subXor[u];
                y = subXor[v] ^ subXor[u];
                z = total ^ subXor[v];
            } else {
                x = subXor[u];
                y = subXor[v];
                z = total ^ subXor[u] ^ subXor[v];
            }
            ans = Math.min(ans, Math.max(x, y, z) - Math.min(x, y, z));
        }
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(minimumScore([1,5,5,4,11], [[0,1],[1,2],[1,3],[3,4]]));  // 9
console.log(minimumScore([5,5,2,4,4,2], [[0,1],[1,2],[5,2],[4,3],[1,3]])); // 0
console.log(minimumScore([1,2,3], [[0,1],[1,2]]));  // 0 (remove both edges: [1],[2],[3] → 1,2,3)
console.log(minimumScore([1,1,1], [[0,1],[0,2]]));   // 0
console.log(minimumScore([7,5,3,2], [[0,1],[1,2],[1,3]])); // ?
