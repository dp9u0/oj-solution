/*
 * @lc app=leetcode id=3621 lang=javascript
 *
 * [3621] Number of Integers With Popcount-Depth Equal to K I
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var popcountDepth = function(n, k) {
    if (k === 0) return 1;

    const popcount = (x) => {
        let c = 0;
        while (x > 0) { c += x & 1; x >>= 1; }
        return c;
    };

    const depth = new Array(51).fill(0);
    for (let v = 2; v <= 50; v++) {
        let x = v, d = 0;
        while (x !== 1) { x = popcount(x); d++; }
        depth[v] = d;
    }

    const targets = [];
    for (let v = 1; v <= 50; v++) {
        if (depth[v] === k - 1) targets.push(v);
    }
    if (targets.length === 0) return 0;

    const C = Array.from({ length: 51 }, () => new Array(51).fill(0));
    for (let i = 0; i <= 50; i++) {
        C[i][0] = 1;
        if (i > 0) C[i][i] = 1;
        for (let j = 1; j < i; j++) {
            C[i][j] = C[i - 1][j - 1] + C[i - 1][j];
        }
    }

    const countWithPopcount = (n, v) => {
        const bits = [];
        let temp = BigInt(n);
        while (temp > 0n) {
            bits.push(Number(temp & 1n));
            temp >>= 1n;
        }
        bits.reverse();

        const len = bits.length;
        if (v > len || v === 0) return 0;

        let count = 0;
        let onesNeeded = v;

        for (let i = 0; i < len; i++) {
            if (bits[i] === 1) {
                const remaining = len - i - 1;
                if (onesNeeded >= 0 && onesNeeded <= remaining) {
                    count += C[remaining][onesNeeded];
                }
                onesNeeded--;
            }
        }

        if (onesNeeded === 0) count++;
        return count;
    };

    let result = 0;
    for (const v of targets) {
        result += countWithPopcount(n, v);
    }

    if (k === 1) result--;

    return result;
};
// @lc code=end

// TEST:
console.log(popcountDepth(4, 1)); // 2
console.log(popcountDepth(7, 2)); // 3
console.log(popcountDepth(1, 0)); // 1
console.log(popcountDepth(15, 3)); // 4
console.log(popcountDepth(1000000000000000, 0)); // 1
