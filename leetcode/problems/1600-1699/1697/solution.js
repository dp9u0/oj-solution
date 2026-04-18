/*
 * @lc app=leetcode id=1697 lang=javascript
 *
 * [1697] Checking Existence of Edge Length Limited Paths
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var distanceLimitedPathsExist = function(n, edgeList, queries) {
    edgeList.sort((a, b) => a[2] - b[2]);
    const qi = queries.map((q, i) => [q[0], q[1], q[2], i]).sort((a, b) => a[2] - b[2]);

    const parent = Array.from({ length: n }, (_, i) => i);
    const find = (x) => parent[x] === x ? x : (parent[x] = find(parent[x]));

    const res = new Array(queries.length);
    let ei = 0;
    for (const [p, q, limit, idx] of qi) {
        while (ei < edgeList.length && edgeList[ei][2] < limit) {
            parent[find(edgeList[ei][0])] = find(edgeList[ei][1]);
            ei++;
        }
        res[idx] = find(p) === find(q);
    }
    return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(distanceLimitedPathsExist(3, [[0,1,2],[1,2,4],[2,0,8],[1,0,16]], [[0,1,2],[0,2,5]]))); // [false,true]
console.log(JSON.stringify(distanceLimitedPathsExist(5, [[0,1,10],[1,2,5],[2,3,9],[3,4,13]], [[0,4,14],[1,4,13]]))); // [true,false]
console.log(JSON.stringify(distanceLimitedPathsExist(2, [[0,1,3]], [[0,1,4]]))); // [true]
console.log(JSON.stringify(distanceLimitedPathsExist(2, [[0,1,3]], [[0,1,2]]))); // [false]
console.log(JSON.stringify(distanceLimitedPathsExist(3, [[0,1,1],[1,2,2]], [[0,2,3]]))); // [true]
