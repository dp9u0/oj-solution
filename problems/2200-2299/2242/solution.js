/*
 * @lc app=leetcode id=2242 lang=javascript
 *
 * [2242] Maximum Score of a Node Sequence
 */

// @lc code=start
/**
 * @param {number[]} scores
 * @param {number[][]} edges
 * @return {number}
 */
var maximumScore = function(scores, edges) {
    const n = scores.length;
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    // Keep top 3 neighbors by score for each node
    for (let i = 0; i < n; i++) {
        adj[i].sort((a, b) => scores[b] - scores[a]);
        if (adj[i].length > 3) adj[i].length = 3;
    }

    let ans = -1;
    for (const [b, c] of edges) {
        for (const a of adj[b]) {
            if (a === c) continue;
            for (const d of adj[c]) {
                if (d === b || d === a) continue;
                ans = Math.max(ans, scores[a] + scores[b] + scores[c] + scores[d]);
            }
        }
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(maximumScore([5,2,9,8,4], [[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]])); // 24
console.log(maximumScore([9,20,6,4,11,12], [[0,3],[5,3],[2,4],[1,3]])); // -1
console.log(maximumScore([1,2,3,4,5], [[0,1],[1,2],[2,3],[3,4]])); // 14 (1+2+3+4 or 2+3+4+5)
console.log(maximumScore([1,1,1,1], [[0,1],[1,2],[2,3]])); // 4
console.log(maximumScore([5,2,9,8,4], [[0,1],[1,2],[0,2]])); // -1 (no path of length 4)
