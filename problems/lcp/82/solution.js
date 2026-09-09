/*
 * @lc app=leetcode.cn id=LCP 82 lang=javascript
 *
 * [LCP 82] 万灵之树
 */

// @lc code=start
/**
 * @param {number[]} gem
 * @param {number} p
 * @param {number} target
 * @return {number}
 */
var treeOfInfiniteSouls = function(gem, p, target) {
    const n = gem.length, MOD = p;
    const gmod = gem.map(g => g % MOD);
    const glen = gem.map(g => String(g).length);
    const pow10 = new Array(210);
    pow10[0] = 1 % MOD;
    for (let i = 1; i < 210; i++) pow10[i] = pow10[i - 1] * 10 % MOD;
    if (n === 1) {
        const v = (pow10[glen[0] + 1] + gmod[0] * 10 % MOD + 9) % MOD;
        return v === target ? 1 : 0;
    }
    // exact modular multiply for a, b < 2^30 (intermediates stay < 2^46)
    const mulmod = (a, b) => ((~~(a / 32768) * b % MOD) * 32768 + a % 32768 * b) % MOD;
    // enumerate full-binary-tree shapes over leaf ranges (subtrees shared via memo)
    const memo = new Map();
    const build = (l, r) => {
        if (l === r) return [{ leaf: l }];
        const key = l * 16 + r;
        if (memo.has(key)) return memo.get(key);
        const out = [];
        for (let m = l; m < r; m++) {
            for (const L of build(l, m)) for (const R of build(m + 1, r)) out.push({ L, R });
        }
        memo.set(key, out);
        return out;
    };
    const emit = (node, arr) => {
        if (node.leaf !== undefined) { arr.push(-1, node.leaf, -2); return; }
        arr.push(-1);
        emit(node.L, arr);
        emit(node.R, arr);
        arr.push(-2);
    };
    // right-to-left instruction list: paren segments as {C, L2}, slots as {slot}
    const mkInstr = (arr, pow) => {
        const instr = [];
        let i = arr.length - 1;
        while (i >= 0) {
            if (arr[i] >= 0) { instr.push({ slot: arr[i] }); i--; continue; }
            let C = 0, L2 = 0;
            while (i >= 0 && arr[i] < 0) {
                C = (C + (arr[i] === -1 ? 1 : 9) * pow[L2]) % MOD;
                L2++;
                i--;
            }
            instr.push({ C, L2 });
        }
        return instr;
    };
    const k1 = Math.ceil(n / 2); // left side slot count (lookup side)
    const fullMask = (1 << n) - 1;
    const totalGlen = glen.reduce((a, b) => a + b, 0);
    const used = new Uint8Array(n);
    let mask = 0, ans = 0;
    // gem·10^SL table (global) and split pow10 for cheap leaf multiplies
    const MAXSL = totalGlen + 2 * (2 * n - 1) + 2;
    const gp = Array.from({ length: n }, (_, g) => {
        const row = new Int32Array(MAXSL + 1);
        for (let s = 0; s <= MAXSL; s++) row[s] = mulmod(gmod[g], pow10[s]);
        return row;
    });
    const pHi = new Int32Array(MAXSL + 1), pLo = new Int32Array(MAXSL + 1);
    for (let s = 0; s <= MAXSL; s++) {
        pHi[s] = ~~(pow10[s] / 32768);
        pLo[s] = pow10[s] % 32768;
    }
    // open-addressing hash (versioned, no clearing): key = (gemMask, value)
    const HSIZE = 8192, HMASK = HSIZE - 1;
    const hVer = new Int32Array(HSIZE), hM = new Int32Array(HSIZE), hV = new Int32Array(HSIZE), hC = new Int32Array(HSIZE);
    let ver = 0;
    for (const root of build(0, n - 1)) {
        const toks = [];
        emit(root, toks);
        const b = toks.indexOf(k1 - 1) + 1;
        const s2 = toks.slice(b), s1 = toks.slice(0, b);
        const ins2 = mkInstr(s2, pow10), ins1 = mkInstr(s1, pow10);
        const parens2 = s2.reduce((a, t) => a + (t < 0 ? 1 : 0), 0);
        // per-segment value tables over all suffix lengths
        for (const list of [ins2, ins1]) {
            for (const ins of list) {
                if (ins.slot !== undefined) continue;
                ins.tab = new Int32Array(MAXSL + 1);
                for (let s = 0; s <= MAXSL; s++) ins.tab[s] = mulmod(ins.C, pow10[s]);
            }
        }
        ver++;
        const dfs2 = (ip, SL, v) => {
            if (ip === ins2.length) {
                let h = ((mask * 2654435761) ^ (v * 40503)) & HMASK;
                for (;;) {
                    if (hVer[h] !== ver) { hVer[h] = ver; hM[h] = mask; hV[h] = v; hC[h] = 1; return; }
                    if (hM[h] === mask && hV[h] === v) { hC[h]++; return; }
                    h = (h + 1) & HMASK;
                }
            }
            const ins = ins2[ip];
            if (ins.slot !== undefined) {
                for (let g = 0; g < n; g++) {
                    if (used[g]) continue;
                    used[g] = 1; mask |= 1 << g;
                    let nv = v + gp[g][SL];
                    if (nv >= MOD) nv -= MOD;
                    dfs2(ip + 1, SL + glen[g], nv);
                    used[g] = 0; mask &= ~(1 << g);
                }
            } else {
                let nv = v + ins.tab[SL];
                if (nv >= MOD) nv -= MOD;
                dfs2(ip + 1, SL + ins.L2, nv);
            }
        };
        const dfs1 = (ip, SL, v, usedLen) => {
            if (ip === ins1.length) {
                const l2 = parens2 + totalGlen - usedLen;
                let scaled = (v * pHi[l2] % MOD) * 32768 + v * pLo[l2];
                scaled %= MOD;
                const need = target >= scaled ? target - scaled : target - scaled + MOD;
                const bm = fullMask & ~mask;
                let h = ((bm * 2654435761) ^ (need * 40503)) & HMASK;
                for (;;) {
                    if (hVer[h] !== ver) return;
                    if (hM[h] === bm && hV[h] === need) { ans += hC[h]; return; }
                    h = (h + 1) & HMASK;
                }
            }
            const ins = ins1[ip];
            if (ins.slot !== undefined) {
                for (let g = 0; g < n; g++) {
                    if (used[g]) continue;
                    used[g] = 1; mask |= 1 << g;
                    let nv = v + gp[g][SL];
                    if (nv >= MOD) nv -= MOD;
                    dfs1(ip + 1, SL + glen[g], nv, usedLen + glen[g]);
                    used[g] = 0; mask &= ~(1 << g);
                }
            } else {
                let nv = v + ins.tab[SL];
                if (nv >= MOD) nv -= MOD;
                dfs1(ip + 1, SL + ins.L2, nv, usedLen);
            }
        };
        mask = 0;
        dfs2(0, 0, 0);
        mask = 0;
        dfs1(0, 0, 0, 0);
    }
    return ans;
};
// @lc code=end

// TEST:
// brute force: all shapes x all permutations, exact string mod via BigInt
const bruteSouls = (gem, p, target) => {
    const n = gem.length;
    let count = 0;
    const perm = (arr) => {
        if (arr.length === 1) return [arr];
        const out = [];
        for (let i = 0; i < arr.length; i++) {
            for (const rest of perm(arr.slice(0, i).concat(arr.slice(i + 1)))) out.push([arr[i], ...rest]);
        }
        return out;
    };
    // generate shapes as leaf orders with bracketing via recursion on token strings
    const gen = (l, r) => { // returns list of token strings covering leaves l..r
        if (l === r) return ['1<' + l + '>9'];
        const out = [];
        for (let m = l; m < r; m++) {
            for (const a of gen(l, m)) for (const b2 of gen(m + 1, r)) out.push('1' + a + b2 + '9');
        }
        return out;
    };
    const shapes = n === 1 ? ['1<0>9'] : gen(0, n - 1);
    for (const order of perm([...Array(n).keys()])) {
        for (const shape of shapes) {
            const s = shape.replace(/<(\d)>/g, (_, d) => String(gem[order[+d]]));
            let v = 0n;
            for (const ch of s) v = (v * 10n + BigInt(ch === '<' || ch === '>' ? NaN : ch)) % BigInt(p);
            count += Number(v) === target ? 1 : 0;
        }
    }
    return count;
};
console.log(treeOfInfiniteSouls([2, 3], 100000007, 11391299) === 1);
console.log(treeOfInfiniteSouls([3, 21, 3], 7, 5) === 4);
console.log(treeOfInfiniteSouls([0], 7, 4) === 1); // "109" = 109 % 7 = 4
console.log(treeOfInfiniteSouls([0], 7, 3) === 0);
// randomized cross-check for n <= 4
let seed = 31415;
const rnd = (nn) => { seed = (seed * 16807) % 2147483647; return seed % nn; };
let allOk = true;
for (let t = 0; t < 150; t++) {
    const n = 1 + rnd(4);
    const gem = Array.from({ length: n }, () => rnd(1000));
    const p = [2, 3, 5, 7, 11, 97, 1009][rnd(7)];
    const target = rnd(p);
    const a = treeOfInfiniteSouls(gem, p, target), b = bruteSouls(gem, p, target);
    if (a !== b) { allOk = false; console.log('MISMATCH', JSON.stringify(gem), p, target, a, b); }
}
console.log(allOk);
// worst-case performance probe: n = 9 distinct gems, large p
const t0 = Date.now();
const r9 = treeOfInfiniteSouls([1, 12, 123, 1234, 12345, 123456, 7654321, 88, 999999999], 999999937, 123456789);
console.log('n=9 result', r9, 'time', Date.now() - t0, 'ms');
