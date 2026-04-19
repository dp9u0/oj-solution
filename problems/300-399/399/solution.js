/*
 * @lc app=leetcode id=399 lang=javascript
 *
 * [399] Evaluate Division
 */

// @lc code=start
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const parent = {};
    const weight = {};

    const find = (x) => {
        if (parent[x] !== x) {
            const origParent = parent[x];
            parent[x] = find(parent[x]);
            weight[x] *= weight[origParent];
        }
        return parent[x];
    };

    const union = (x, y, val) => {
        if (!(x in parent)) {
            parent[x] = x;
            weight[x] = 1.0;
        }
        if (!(y in parent)) {
            parent[y] = y;
            weight[y] = 1.0;
        }
        const rx = find(x), ry = find(y);
        if (rx !== ry) {
            parent[rx] = ry;
            weight[rx] = val * weight[y] / weight[x];
        }
    };

    for (let i = 0; i < equations.length; i++) {
        union(equations[i][0], equations[i][1], values[i]);
    }

    const result = [];
    for (const [c, d] of queries) {
        if (!(c in parent) || !(d in parent)) {
            result.push(-1.0);
        } else {
            const rc = find(c), rd = find(d);
            if (rc !== rd) {
                result.push(-1.0);
            } else {
                result.push(weight[c] / weight[d]);
            }
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(calcEquation([["a","b"],["b","c"]], [2.0,3.0], [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]])));
// [6,0.5,-1,1,-1]
console.log(JSON.stringify(calcEquation([["a","b"]], [0.5], [["a","b"],["b","a"],["a","c"],["x","y"]])));
// [0.5,2,-1,-1]
