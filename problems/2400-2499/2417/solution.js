/*
 * @lc app=leetcode.cn id=2417 lang=javascript
 *
 * [2417] 最近的公平整数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var closestFair = function(n) {
    const d = String(n).length;
    for (let L = d % 2 === 0 ? d : d + 1; ; L += 2) {
        const s = String(n).split('').map(Number);
        const half = L / 2;
        let best = Infinity;
        for (let mask = 0; mask < (1 << L); mask++) {
            if (popcount(mask) !== half) continue;
            const cand = L > d
                ? minimalFill(mask, L)
                : minGE(mask, L, s);
            if (cand !== null && cand < best) best = cand;
        }
        if (best !== Infinity) return best;
    }
};
function popcount(x) {
    let c = 0;
    while (x) { x &= x - 1; c++; }
    return c;
}
function minAllowedDigit(odd, pos, lb) {
    // smallest digit >= lb with required parity, no leading zero
    for (let dgt = lb; dgt <= 9; dgt++) {
        if ((dgt % 2 === 1) !== odd) continue;
        if (pos === 0 && dgt === 0) continue;
        return dgt;
    }
    return -1;
}
function minimalFill(mask, L) {
    let val = 0;
    for (let pos = 0; pos < L; pos++) {
        val = val * 10 + minAllowedDigit(((mask >> pos) & 1) === 1, pos, 0);
    }
    return val;
}
function minGE(mask, L, s) {
    const res = new Array(L);
    for (let pos = 0; pos < L; pos++) {
        const dgt = minAllowedDigit(((mask >> pos) & 1) === 1, pos, s[pos]);
        if (dgt === -1) {
            // bump the latest earlier position that allows a larger digit
            for (let p = pos - 1; p >= 0; p--) {
                const up = minAllowedDigit(((mask >> p) & 1) === 1, p, s[p] + 1);
                if (up !== -1) {
                    let val = 0;
                    for (let q = 0; q < p; q++) val = val * 10 + s[q];
                    val = val * 10 + up;
                    for (let q = p + 1; q < L; q++) {
                        val = val * 10 + minAllowedDigit(((mask >> q) & 1) === 1, q, 0);
                    }
                    return val;
                }
            }
            return null;
        }
        res[pos] = dgt;
        if (dgt > s[pos]) {
            let val = 0;
            for (let q = 0; q <= pos; q++) val = val * 10 + res[q];
            for (let q = pos + 1; q < L; q++) {
                val = val * 10 + minAllowedDigit(((mask >> q) & 1) === 1, q, 0);
            }
            return val;
        }
    }
    let val = 0;
    for (let pos = 0; pos < L; pos++) val = val * 10 + res[pos];
    return val;
}
// @lc code=end

// TEST:
console.log(closestFair(2)); // 10
console.log(closestFair(403)); // 1001
console.log(closestFair(1)); // 10
console.log(closestFair(9999)); // 100011
console.log(closestFair(12)); // 12 (1 odd 1 even already fair)
