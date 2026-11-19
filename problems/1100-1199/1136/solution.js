/*
 * @lc app=leetcode.cn id=1136 lang=javascript
 *
 * [1136] 并行课程
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} relations
 * @return {number}
 */
var minimumSemesters = function(n, relations) {
    const adj = Array.from({ length: n + 1 }, () => []);
    const indeg = new Array(n + 1).fill(0);
    for (const [p, q] of relations) {
        adj[p].push(q);
        indeg[q]++;
    }

    let queue = [];
    for (let i = 1; i <= n; i++) if (indeg[i] === 0) queue.push(i);

    let semesters = 0, taken = 0;
    while (queue.length) {
        semesters++;
        const next = [];
        for (const u of queue) {
            taken++;
            for (const v of adj[u]) {
                if (--indeg[v] === 0) next.push(v);
            }
        }
        queue = next;
    }
    return taken === n ? semesters : -1; // cycle leaves some courses untakeable
};
// @lc code=end

// TEST:
console.log(minimumSemesters(3, [[1,3],[2,3]])); // 2
console.log(minimumSemesters(3, [[1,2],[2,3],[3,1]])); // -1 (cycle)
console.log(minimumSemesters(1, [])); // 1
console.log(minimumSemesters(4, [[1,2],[2,3],[3,4]])); // 4 (chain)
console.log(minimumSemesters(5, [[1,2]])); // 2 (4 free courses + 2 chained)
