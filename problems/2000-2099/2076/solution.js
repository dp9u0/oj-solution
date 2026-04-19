/*
 * @lc app=leetcode id=2076 lang=javascript
 *
 * [2076] Process Restricted Friend Requests
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} restrictions
 * @param {number[][]} requests
 * @return {boolean[]}
 */
var friendRequests = function(n, restrictions, requests) {
    const parent = Array.from({ length: n }, (_, i) => i);
    const rank = new Array(n).fill(0);

    const find = (x) => {
        if (parent[x] !== x) parent[x] = find(parent[x]);
        return parent[x];
    };

    const union = (a, b) => {
        const ra = find(a), rb = find(b);
        if (ra === rb) return;
        if (rank[ra] < rank[rb]) parent[ra] = rb;
        else if (rank[ra] > rank[rb]) parent[rb] = ra;
        else { parent[rb] = ra; rank[ra]++; }
    };

    return requests.map(([u, v]) => {
        if (find(u) === find(v)) return true;
        for (const [x, y] of restrictions) {
            if ((find(x) === find(u) && find(y) === find(v)) ||
                (find(x) === find(v) && find(y) === find(u))) {
                return false;
            }
        }
        union(u, v);
        return true;
    });
};
// @lc code=end

// TEST:
console.log(JSON.stringify(friendRequests(3, [[0,1]], [[0,2],[2,1]]))); // [true,false]
console.log(JSON.stringify(friendRequests(3, [[0,1]], [[1,2],[0,2]]))); // [true,false]
console.log(JSON.stringify(friendRequests(5, [[0,1],[1,2],[2,3]], [[0,4],[1,2],[3,1],[3,4]]))); // [true,false,true,false]
