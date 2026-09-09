/*
 * @lc app=leetcode.cn id=LCP 70 lang=javascript
 *
 * [LCP 70] 沙地治理
 */

// @lc code=start
/**
 * @param {number} size
 * @return {number[][]}
 */
var sandyLandManagement = function(size) {
    const n = size, res = [];
    for (let i = 1; i <= n - 1; i++) {
        for (let j = 1; j <= 2 * i - 1; j += 4) res.push([i, j]);
    }
    res.push([n, 1]);
    if (n > 1) res.push([n, 2 * n - 1]);
    for (const start of [4, 7, 9]) {
        for (let j = start; j < 2 * n - 1; j += 8) res.push([n, j]);
    }
    return res;
};
// @lc code=end

// TEST:
// simulate the conversion and verify count matches the proven lower bound
const converts = (n, seeds) => {
    const id = (i, j) => { let s = 0; for (let r = 1; r < i; r++) s += 2 * r - 1; return s + (j - 1); };
    const total = n * n;
    const adj = Array.from({ length: total }, () => []);
    const add = (a, b) => { adj[a].push(b); adj[b].push(a); };
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= 2 * i - 1; j += 2) {
            const a = id(i, j);
            if (i < n) add(a, id(i + 1, j + 1));
            if (j > 1) add(a, id(i, j - 1));
            if (j < 2 * i - 1) add(a, id(i, j + 1));
        }
    }
    const green = new Uint8Array(total);
    for (const [i, j] of seeds) green[id(i, j)] = 1;
    for (;;) {
        let changed = false;
        for (let v = 0; v < total; v++) {
            if (green[v]) continue;
            let c = 0;
            for (const w of adj[v]) if (green[w]) c++;
            if (c >= 2) { green[v] = 1; changed = true; }
        }
        if (!changed) break;
    }
    for (let v = 0; v < total; v++) if (!green[v]) return false;
    return true;
};
console.log(JSON.stringify(sandyLandManagement(1)) === '[[1,1]]');
console.log(sandyLandManagement(2).length === 3 && converts(2, sandyLandManagement(2)));
console.log(sandyLandManagement(3).length === 5 && converts(3, sandyLandManagement(3)));
let allOk = true;
for (let n = 1; n <= 300; n++) {
    const seeds = sandyLandManagement(n);
    const formula = Math.floor((n * n + 3 * n + 2) / 4);
    if (seeds.length !== formula || !converts(n, seeds)) {
        allOk = false;
        console.log('FAIL n=' + n, 'count', seeds.length, 'formula', formula);
    }
}
console.log(allOk);
console.log(converts(3, [[1, 1], [2, 1], [2, 3], [3, 1], [3, 5]])); // official example 1 also valid
console.log(converts(2, [[1, 1], [2, 1], [2, 3]]));                 // official example 2
