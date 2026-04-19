/*
 * @lc app=leetcode id=2359 lang=javascript
 *
 * [2359] Find Closest Node to Given Two Nodes
 */

// @lc code=start
/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function(edges, node1, node2) {
    const n = edges.length;
    const getDist = (start) => {
        const dist = new Array(n).fill(-1);
        let d = 0, cur = start;
        while (cur !== -1 && dist[cur] === -1) {
            dist[cur] = d++;
            cur = edges[cur];
        }
        return dist;
    };
    const d1 = getDist(node1), d2 = getDist(node2);
    let ans = -1, minMax = Infinity;
    for (let i = 0; i < n; i++) {
        if (d1[i] === -1 || d2[i] === -1) continue;
        const mx = Math.max(d1[i], d2[i]);
        if (mx < minMax) {
            minMax = mx;
            ans = i;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
const test = (fn, args, expected) => {
    const result = fn(...args);
    console.log(JSON.stringify(args), '=>', result, result === expected ? 'OK' : 'FAIL expected ' + expected);
};
test(closestMeetingNode, [[2,2,3,-1], 0, 1], 2);
test(closestMeetingNode, [[1,2,-1], 0, 2], 2);
test(closestMeetingNode, [[4,4,8,-1,9,8,4,4,1,1], 5, 6], 1);
test(closestMeetingNode, [[-1], 0, 0], 0);
test(closestMeetingNode, [[1,-1], 0, 1], 1);
