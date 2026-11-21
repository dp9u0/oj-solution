/*
 * @lc app=leetcode.cn id=2378 lang=javascript
 *
 * [2378] 选择边来最大化树的得分
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number}
 */
var maxScore = function(edges) {
    const n = edges.length;
    const children = Array.from({ length: n }, () => []);
    for (let i = 1; i < n; i++) children[edges[i][0]].push(i);
    const dp0 = new Float64Array(n);
    const dp1 = new Float64Array(n);
    const order = [0];
    for (let qi = 0; qi < order.length; qi++) {
        for (const c of children[order[qi]]) order.push(c);
    }
    for (let k = order.length - 1; k >= 0; k--) {
        const u = order[k];
        let base = 0, bestGain = 0;
        for (const c of children[u]) {
            base += dp0[c];
            if (dp1[c] - dp0[c] > bestGain) bestGain = dp1[c] - dp0[c];
            dp1[u] += dp0[c];
        }
        dp0[u] = base + bestGain; // at most one child edge may touch u
        dp1[u] += u === 0 ? 0 : edges[u][1];
    }
    return dp0[0];
};
// @lc code=end

// TEST:
console.log(maxScore([[-1,-1],[0,5],[0,10],[2,6],[2,4]])); // 11
console.log(maxScore([[-1,-1],[0,5],[0,-6],[0,7]])); // 7
console.log(maxScore([[-1,-1]])); // 0
console.log(maxScore([[-1,-1],[0,3],[1,4]])); // 4 (chain: pick edge (0,1) or (1,2), not both -> max 4)
console.log(maxScore([[-1,-1],[0,-5]])); // 0
