/*
 * @lc app=leetcode.cn id=1101 lang=javascript
 *
 * [1101] 彼此熟识的最早时间
 */

// @lc code=start
/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */
var earliestAcq = function(logs, n) {
    logs.sort((a, b) => a[0] - b[0]);
    const parent = Array.from({ length: n }, (_, i) => i);
    const find = (x) => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]]; // path halving
            x = parent[x];
        }
        return x;
    };
    let comps = n;
    for (const [t, x, y] of logs) {
        const rx = find(x), ry = find(y);
        if (rx !== ry) {
            parent[rx] = ry;
            if (--comps === 1) return t;
        }
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(earliestAcq([[20190101,0,1],[20190104,3,4],[20190107,2,3],[20190211,1,5],[20190224,2,4],[20190301,0,3],[20190312,1,2],[20190322,4,5]], 6)); // 20190301
console.log(earliestAcq([[0,2,0],[1,0,1],[3,0,3],[4,1,2],[7,3,1]], 4)); // 3
console.log(earliestAcq([[5,0,1]], 3)); // -1 (person 2 never connects)
console.log(earliestAcq([[1,0,1]], 2)); // 1
