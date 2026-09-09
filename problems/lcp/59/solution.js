/*
 * @lc app=leetcode.cn id=LCP 59 lang=javascript
 *
 * [LCP 59] 搭桥过河
 */

// @lc code=start
/**
 * @param {number} num
 * @param {number[][]} wood
 * @return {number}
 */
var buildBridge = function(num, wood) {
    const n = wood.length;
    if (n === 1) return 0;
    // minimize sum |d_i| s.t. g_i <= d_i - d_{i+1} <= h_i (adjacent logs overlap both ways)
    // slope trick: f(x) = minVal + sum_{l in L} max(0, l-x) + sum_{r in R} max(0, x-r)
    const L = [], R = []; // raw values; L: max-heap, R: min-heap
    const pushL = (v) => {
        L.push(v);
        let i = L.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (L[p] >= L[i]) break;
            [L[p], L[i]] = [L[i], L[p]];
            i = p;
        }
    };
    const pushR = (v) => {
        R.push(v);
        let i = R.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (R[p] <= R[i]) break;
            [R[p], R[i]] = [R[i], R[p]];
            i = p;
        }
    };
    const popL = () => {
        const top = L[0], last = L.pop();
        if (L.length) {
            L[0] = last;
            let i = 0;
            for (;;) {
                const a = 2 * i + 1, b = 2 * i + 2;
                let m = i;
                if (a < L.length && L[a] > L[m]) m = a;
                if (b < L.length && L[b] > L[m]) m = b;
                if (m === i) break;
                [L[m], L[i]] = [L[i], L[m]];
                i = m;
            }
        }
        return top;
    };
    const popR = () => {
        const top = R[0], last = R.pop();
        if (R.length) {
            R[0] = last;
            let i = 0;
            for (;;) {
                const a = 2 * i + 1, b = 2 * i + 2;
                let m = i;
                if (a < R.length && R[a] < R[m]) m = a;
                if (b < R.length && R[b] < R[m]) m = b;
                if (m === i) break;
                [R[m], R[i]] = [R[i], R[m]];
                i = m;
            }
        }
        return top;
    };
    pushL(0);
    pushR(0);
    let minVal = 0, offL = 0, offR = 0;
    for (let i = 0; i + 1 < n; i++) {
        const g = wood[i + 1][0] - wood[i][1]; // d_i - d_{i+1} >= g
        const h = wood[i + 1][1] - wood[i][0]; // d_i - d_{i+1} <= h
        offL -= h; // range-min over [x+g, x+h]: shift L by -h, R by -g
        offR -= g;
        pushL(-offL); // add |y|: 0 into both heaps
        pushR(-offR);
        while (L.length && R.length && L[0] + offL > R[0] + offR) {
            const l = popL() + offL, r = popR() + offR;
            minVal += l - r;
            pushL(r - offL);
            pushR(l - offR);
        }
    }
    return minVal;
};
// @lc code=end

// TEST:
// brute force: enumerate shifts on small cases (both overlap directions)
const bruteBridge = (num, wood) => {
    const n = wood.length;
    if (n === 1) return 0;
    let best = Infinity;
    const rec = (i, prevD, cost) => {
        if (cost >= best) return;
        if (i === n) { best = cost; return; }
        for (let dv = -16; dv <= 16; dv++) {
            if (i > 0) {
                const diff = prevD - dv;
                if (diff < wood[i][0] - wood[i - 1][1] || diff > wood[i][1] - wood[i - 1][0]) continue;
            }
            rec(i + 1, dv, cost + Math.abs(dv));
        }
    };
    rec(0, 0, 0);
    return best;
};
console.log(buildBridge(10, [[1, 2], [4, 7], [8, 9]]) === 3);
console.log(buildBridge(10, [[1, 5], [1, 1], [10, 10], [6, 7], [7, 8]]) === 10);
console.log(buildBridge(5, [[1, 2], [2, 4]]) === 0);
console.log(buildBridge(7, [[3, 3]]) === 0);
console.log(buildBridge(10, [[1, 1], [10, 10]]) === 9);
console.log(buildBridge(8, [[2, 8], [6, 7], [2, 4]]) === 2);
// randomized cross-check
let seed = 9527;
const rnd = (n) => { seed = (seed * 16807) % 2147483647; return seed % n; };
let allOk = true;
for (let t = 0; t < 400; t++) {
    const n = 2 + rnd(3);
    const wood = [];
    for (let i = 0; i < n; i++) {
        const a = 1 + rnd(10);
        wood.push([a, a + rnd(3)]);
    }
    const num = 20;
    const a = buildBridge(num, wood), b = bruteBridge(num, wood);
    if (a !== b) { allOk = false; console.log('MISMATCH', JSON.stringify(wood), a, b); }
}
console.log(allOk);
