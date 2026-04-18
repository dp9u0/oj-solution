/*
 * @lc app=leetcode id=2101 lang=javascript
 *
 * [2101] Detonate the Maximum Bombs
 */

// @lc code=start
/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function(bombs) {
    const n = bombs.length;
    const adj = Array.from({ length: n }, () => []);
    for (let i = 0; i < n; i++) {
        const [xi, yi, ri] = bombs[i];
        const r2 = BigInt(ri) * BigInt(ri);
        for (let j = 0; j < n; j++) {
            if (i === j) continue;
            const [xj, yj] = bombs[j];
            const dx = BigInt(xi - xj), dy = BigInt(yi - yj);
            if (dx * dx + dy * dy <= r2) adj[i].push(j);
        }
    }

    let ans = 0;
    for (let start = 0; start < n; start++) {
        const visited = new Uint8Array(n);
        visited[start] = 1;
        const queue = [start];
        let count = 1;
        while (queue.length) {
            const u = queue.shift();
            for (const v of adj[u]) {
                if (!visited[v]) {
                    visited[v] = 1;
                    queue.push(v);
                    count++;
                }
            }
        }
        ans = Math.max(ans, count);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maximumDetonation([[2,1,3],[6,1,4]])); // 2
console.log(maximumDetonation([[1,1,5],[10,10,5]])); // 1
console.log(maximumDetonation([[1,2,3],[2,3,1],[3,4,2],[4,5,3],[5,6,4]])); // 5
console.log(maximumDetonation([[1,1,1]])); // 1
console.log(maximumDetonation([[1,1,10],[2,2,10],[3,3,10]])); // 3
