/*
 * @lc app=leetcode id=3348 lang=javascript
 *
 * [3348] Smallest Divisible Digit Product II
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} t
 * @return {string}
 */
var smallestNumber = function(num, t) {
    let needs = [0, 0, 0, 0]; // [2, 3, 5, 7]
    let tmp = t;
    for (const [pi, p] of [[0, 2], [1, 3], [2, 5], [3, 7]]) {
        while (tmp % p === 0) { needs[pi]++; tmp /= p; }
    }
    if (tmp !== 1) return '-1';

    const n = num.length;
    const C = [
        [0,0,0,0],[0,0,0,0],[1,0,0,0],[0,1,0,0],[2,0,0,0],
        [0,0,1,0],[1,1,0,0],[0,0,0,1],[3,0,0,0],[0,2,0,0]
    ];
    const sub = (a, b) => [a[0]-b[0],a[1]-b[1],a[2]-b[2],a[3]-b[3]];
    const clamp = (a) => [Math.max(0,a[0]),Math.max(0,a[1]),Math.max(0,a[2]),Math.max(0,a[3])];

    const minDigitsFor = (nd) => {
        const [a, b, c, d] = clamp(nd);
        let minR = Infinity;
        for (let m = 0; m <= Math.min(a, b); m++) {
            const r = m + Math.ceil((a - m) / 3) + Math.ceil((b - m) / 2);
            if (r < minR) minR = r;
        }
        return c + d + minR;
    };
    const feasible = (nd, k) => minDigitsFor(nd) <= k;

    const fill = (nd, k) => {
        const [a, b, c, d] = clamp(nd);
        const fixed = [];
        for (let i = 0; i < c; i++) fixed.push(5);
        for (let i = 0; i < d; i++) fixed.push(7);

        let bestDigits = null;
        for (let m = 0; m <= Math.min(a, b); m++) {
            const rem2 = a - m, rem3 = b - m;
            const digits = [];
            for (let i = 0; i < m; i++) digits.push(6);
            const q8 = Math.floor(rem2 / 3), r2 = rem2 % 3;
            for (let i = 0; i < q8; i++) digits.push(8);
            if (r2 === 1) digits.push(2);
            if (r2 === 2) digits.push(4);
            const q9 = Math.floor(rem3 / 2), r3 = rem3 % 2;
            for (let i = 0; i < q9; i++) digits.push(9);
            if (r3 === 1) digits.push(3);
            digits.sort((x, y) => x - y);
            if (!bestDigits || digits.length < bestDigits.length ||
                (digits.length === bestDigits.length && lexLess(digits, bestDigits))) {
                bestDigits = digits;
            }
        }

        const all = [...fixed, ...bestDigits].sort((x, y) => x - y);
        if (all.length > k) return '';
        return '1'.repeat(k - all.length) + all.join('');
    };

    const lexLess = (a, b) => {
        for (let i = 0; i < Math.min(a.length, b.length); i++) {
            if (a[i] < b[i]) return true;
            if (a[i] > b[i]) return false;
        }
        return a.length < b.length;
    };

    let fz = -1;
    for (let i = 0; i < n; i++) {
        if (num[i] === '0') { fz = i; break; }
    }

    const prefixNeeds = [needs.slice()];
    for (let i = 0; i < n; i++) {
        prefixNeeds.push(sub(prefixNeeds[i], C[num.charCodeAt(i) - 48]));
    }

    if (fz === -1 && feasible(prefixNeeds[n], 0)) return num;

    const startPos = fz === -1 ? n - 1 : fz;
    for (let i = startPos; i >= 0; i--) {
        const curNeed = prefixNeeds[i];
        const lo = (fz !== -1 && i === fz) ? 1 : (num.charCodeAt(i) - 48 + 1);
        for (let d = Math.max(lo, 1); d <= 9; d++) {
            const next = sub(curNeed, C[d]);
            if (feasible(next, n - i - 1)) {
                return num.slice(0, i) + d + fill(next, n - i - 1);
            }
        }
    }

    for (let k = n + 1; k <= n + 60; k++) {
        const res = fill(needs, k);
        if (res) return res;
    }
    return '-1';
};
// @lc code=end

// TEST:
console.log(smallestNumber('1234', 256) === '1488');
console.log(smallestNumber('12355', 50) === '12355');
console.log(smallestNumber('11111', 26) === '-1');
console.log(smallestNumber('10', 1) === '11');
console.log(smallestNumber('10', 320) === '588');
console.log(smallestNumber('12', 1968750) === '255555579');
console.log(smallestNumber('1', 1) === '1');
