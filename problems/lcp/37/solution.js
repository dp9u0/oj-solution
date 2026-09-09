/*
 * @lc app=leetcode.cn id=LCP 37 lang=javascript
 *
 * [LCP 37] 最小矩形面积
 */

// @lc code=start
/**
 * @param {number[][]} lines
 * @return {number}
 */
var minRecSize = function(lines) {
    if (lines.length < 2) return 0;
    const xOf = (p, q) => (q[1] - p[1]) / (p[0] - q[0]);
    const yOf = (p, q) => (p[0] * q[1] - q[0] * p[1]) / (p[0] - q[0]);
    // min/max of f over adjacent pairs with distinct k in the given order
    const extreme = (arr, f, takeMin) => {
        let best = takeMin ? Infinity : -Infinity;
        for (let i = 0; i + 1 < arr.length; i++) {
            if (arr[i][0] === arr[i + 1][0]) continue; // parallel, no intersection
            const v = f(arr[i], arr[i + 1]);
            if (takeMin ? v < best : v > best) best = v;
        }
        return best;
    };
    const byKbDesc  = lines.slice().sort((a, b) => a[0] - b[0] || b[1] - a[1]); // order at x = -inf
    const byKdescB  = lines.slice().sort((a, b) => b[0] - a[0] || b[1] - a[1]); // order at x = +inf
    const byKbAsc   = lines.slice().sort((a, b) => a[0] - b[0] || a[1] - b[1]); // transformed +inf order
    const byKdescA  = lines.slice().sort((a, b) => b[0] - a[0] || a[1] - b[1]); // transformed -inf order
    const minX = extreme(byKbDesc, xOf, true);
    const maxX = extreme(byKdescB, xOf, false);
    const maxY = extreme(byKbAsc, yOf, false);
    const minY = extreme(byKdescA, yOf, true);
    if (minX === Infinity || minY === Infinity || maxY === -Infinity) return 0;
    return (maxX - minX) * (maxY - minY);
};
// @lc code=end

// TEST:
const brute = (lines) => {
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    for (let i = 0; i < lines.length; i++) {
        for (let j = i + 1; j < lines.length; j++) {
            const [k1, b1] = lines[i], [k2, b2] = lines[j];
            if (k1 === k2) continue;
            const x = (b2 - b1) / (k1 - k2), y = (k1 * b2 - k2 * b1) / (k1 - k2);
            minX = Math.min(minX, x); maxX = Math.max(maxX, x);
            minY = Math.min(minY, y); maxY = Math.max(maxY, y);
        }
    }
    if (minX === Infinity || maxX === minX || maxY === minY) return 0;
    return (maxX - minX) * (maxY - minY);
};
const approx = (a, b) => Number.isFinite(a) && Number.isFinite(b) && Math.abs(a - b) <= 1e-6 * Math.max(1, Math.abs(a), Math.abs(b));
console.log(approx(minRecSize([[2, 3], [3, 0], [4, 1]]), 48));
console.log(approx(minRecSize([[1, 1], [2, 3]]), 0));
console.log(approx(minRecSize([[5, 1]]), 0));
console.log(approx(minRecSize([[2, 0], [20, -2], [1, -1], [22, 8]]), brute([[2, 0], [20, -2], [1, -1], [22, 8]])));
console.log(approx(minRecSize([[2, 0], [20, -2], [1, -1], [22, 8]]), (5 + 1 / 9) * (102 + 2 / 9))); // x∈[−5,1/9], y∈[−102,2/9]
console.log(approx(minRecSize([[1, 0], [2, 0], [3, 0], [4, 0]]), 0)); // all through origin
console.log(approx(minRecSize([[1, 5], [1, 3], [2, 4]]), 8)); // two intersections: (1,6) & (−1,2) → box 2×4
// random stress test
let seed = 12345;
const rnd = (n) => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed % n; };
let allOk = true;
for (let t = 0; t < 500; t++) {
    const n = 2 + rnd(9);
    const ls = [];
    for (let i = 0; i < n; i++) ls.push([1 + rnd(9), rnd(21) - 10]);
    if (!approx(minRecSize(ls), brute(ls))) { allOk = false; console.log('MISMATCH', JSON.stringify(ls)); }
}
console.log(allOk);
