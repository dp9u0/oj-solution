/*
 * @lc app=leetcode.cn id=2307 lang=javascript
 *
 * [2307] 检查方程中的矛盾之处
 */

// @lc code=start
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @return {boolean}
 */
var checkContradictions = function(equations, values) {
    const idx = new Map();
    const getId = (s) => {
        if (!idx.has(s)) idx.set(s, idx.size);
        return idx.get(s);
    };
    const n = 2 * equations.length;
    const parent = new Int32Array(n);
    const ratio = new Float64Array(n).fill(1);
    for (let i = 0; i < n; i++) parent[i] = i;
    const find = (x) => {
        if (parent[x] === x) return [x, 1];
        const [root, f] = find(parent[x]);
        parent[x] = root;
        ratio[x] *= f;
        return [root, ratio[x]];
    };
    for (let e = 0; e < equations.length; e++) {
        const a = getId(equations[e][0]);
        const b = getId(equations[e][1]);
        const v = values[e];
        const [ra, fa] = find(a);
        const [rb, fb] = find(b);
        if (ra === rb) {
            if (Math.abs(fa / fb - v) >= 1e-5) return true;
        } else {
            // fa * ra = v * fb * rb  =>  ra = (v * fb / fa) * rb
            parent[ra] = rb;
            ratio[ra] = (v * fb) / fa;
        }
    }
    return false;
};
// @lc code=end

// TEST:
console.log(checkContradictions([["a","b"],["b","c"],["a","c"]], [3,0.5,1.5])); // false
console.log(checkContradictions([["le","et"],["le","code"],["code","et"]], [2,5,0.5])); // true
console.log(checkContradictions([["a","a"]], [2])); // true (a/a != 1)
console.log(checkContradictions([["a","b"],["b","c"],["c","a"]], [2,3,1/6])); // false
console.log(checkContradictions([["a","b"],["b","c"]], [2,3])); // false
