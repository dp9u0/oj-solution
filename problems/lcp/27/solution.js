/*
 * @lc app=leetcode.cn id=LCP 27 lang=javascript
 *
 * [LCP 27] 黑盒光线反射
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 */
var BlackBox = function(n, m) {
    this.n = n;
    this.m = m;
    const total = 2 * (n + m);
    const idxR = new Int32Array(total), idxC = new Int32Array(total);
    let h = 0;
    for (let c = 0; c <= m; c++, h++) { idxR[h] = 0; idxC[h] = c; }        // top, L→R
    for (let r = 1; r <= n; r++, h++) { idxR[h] = r; idxC[h] = m; }        // right, T→B
    for (let c = m - 1; c >= 0; c--, h++) { idxR[h] = n; idxC[h] = c; }    // bottom, R→L
    for (let r = n - 1; r >= 1; r--, h++) { idxR[h] = r; idxC[h] = 0; }    // left, B→T
    const pos2idx = new Map();
    for (h = 0; h < total; h++) pos2idx.set(idxR[h] * (m + 1) + idxC[h], h);

    const vIdx = (dr, dc) => (dr > 0 ? 2 : 0) + (dc > 0 ? 1 : 0);
    // state = hole * 4 + velocityIdx; next is a permutation over valid states
    const next = new Int32Array(total * 4);
    const valid = [];
    for (h = 0; h < total; h++) {
        const r = idxR[h], c = idxC[h];
        const drs = r === 0 ? [1] : r === n ? [-1] : [-1, 1];
        const dcs = c === 0 ? [1] : c === m ? [-1] : [-1, 1];
        valid.push([]);
        for (const dr of drs) for (const dc of dcs) {
            const v = vIdx(dr, dc);
            valid[h].push(v);
            const t = Math.min(dr > 0 ? n - r : r, dc > 0 ? m - c : c);
            const r2 = r + t * dr, c2 = c + t * dc;
            const ndr = (r2 === 0 || r2 === n) ? -dr : dr;   // reflect off top/bottom
            const ndc = (c2 === 0 || c2 === m) ? -dc : dc;   // reflect off left/right (corners: both)
            next[h * 4 + v] = pos2idx.get(r2 * (m + 1) + c2) * 4 + vIdx(ndr, ndc);
        }
    }
    // cycle decomposition
    const cycleOf = new Int32Array(total * 4).fill(-1);
    const posOf = new Int32Array(total * 4);
    const cycLen = [], cycStart = [], flat = [];
    for (let s = 0; s < total * 4; s++) {
        if (cycleOf[s] !== -1 || valid[s >> 2].indexOf(s & 3) === -1) continue;
        const cyc = cycLen.length;
        cycStart.push(flat.length);
        let len = 0, cur = s;
        do {
            cycleOf[cur] = cyc;
            posOf[cur] = len++;
            flat.push(cur);
            cur = next[cur];
        } while (cur !== s);
        cycLen.push(len);
    }
    const cycOff = [];
    let bits = 0;
    for (let c = 0; c < cycLen.length; c++) { cycOff.push(bits); bits += cycLen[c] + 1; }
    this.idxR = idxR;
    this.idxC = idxC;
    this.valid = valid;
    this.next = next;
    this.cycleOf = cycleOf;
    this.posOf = posOf;
    this.cycLen = cycLen;
    this.cycStart = cycStart;
    this.cycOff = cycOff;
    this.flatState = Int32Array.from(flat);
    this.bit = new Int32Array(bits);
    this.openFlag = new Uint8Array(total);
};

BlackBox.prototype.bitAdd = function(cyc, p, delta) {
    const off = this.cycOff[cyc], len = this.cycLen[cyc];
    for (let i = p + 1; i <= len; i += i & -i) this.bit[off + i] += delta;
};

BlackBox.prototype.bitPrefix = function(cyc, x) {
    const off = this.cycOff[cyc];
    let s = 0;
    for (let i = x; i > 0; i -= i & -i) s += this.bit[off + i];
    return s;
};

BlackBox.prototype.bitKth = function(cyc, k) {
    const off = this.cycOff[cyc], len = this.cycLen[cyc];
    let idx = 0;
    for (let step = 1 << 17; step > 0; step >>= 1) {
        if (idx + step <= len && this.bit[off + idx + step] < k) {
            idx += step;
            k -= this.bit[off + idx];
        }
    }
    return idx; // 0-based position of the k-th open mark
};

/**
 * @param {number} index
 * @param {number} direction
 * @return {number}
 */
BlackBox.prototype.open = function(index, direction) {
    if (!this.openFlag[index]) {
        this.openFlag[index] = 1;
        for (const v of this.valid[index]) {
            const s = index * 4 + v;
            this.bitAdd(this.cycleOf[s], this.posOf[s], 1);
        }
    }
    const r = this.idxR[index], c = this.idxC[index], d = direction;
    let dr, dc;
    if (r === 0) { dr = 1; dc = -d; }
    else if (r === this.n) { dr = -1; dc = d; }
    else if (c === 0) { dr = -d; dc = 1; }
    else { dr = d; dc = -1; }
    const s0 = index * 4 + ((dr > 0 ? 2 : 0) + (dc > 0 ? 1 : 0));
    const s1 = this.next[s0];
    const cyc = this.cycleOf[s1];
    let k = this.bitPrefix(cyc, this.posOf[s1]) + 1;
    if (k > this.bitPrefix(cyc, this.cycLen[cyc])) k = 1; // wrap around the cycle
    const q = this.bitKth(cyc, k);
    return this.flatState[this.cycStart[cyc] + q] >> 2;
};

/**
 * @param {number} index
 * @return {void}
 */
BlackBox.prototype.close = function(index) {
    if (this.openFlag[index]) {
        this.openFlag[index] = 0;
        for (const v of this.valid[index]) {
            const s = index * 4 + v;
            this.bitAdd(this.cycleOf[s], this.posOf[s], -1);
        }
    }
};
// @lc code=end

// TEST:
// step-by-step simulator for cross-checking
class BruteBox {
    constructor(n, m) {
        this.n = n; this.m = m;
        const total = 2 * (n + m);
        this.idxR = new Int32Array(total); this.idxC = new Int32Array(total);
        let h = 0;
        for (let c = 0; c <= m; c++, h++) { this.idxR[h] = 0; this.idxC[h] = c; }
        for (let r = 1; r <= n; r++, h++) { this.idxR[h] = r; this.idxC[h] = m; }
        for (let c = m - 1; c >= 0; c--, h++) { this.idxR[h] = n; this.idxC[h] = c; }
        for (let r = n - 1; r >= 1; r--, h++) { this.idxR[h] = r; this.idxC[h] = 0; }
        this.pos2idx = new Map();
        for (h = 0; h < total; h++) this.pos2idx.set(this.idxR[h] * (m + 1) + this.idxC[h], h);
        this.openFlag = new Uint8Array(total);
    }
    open(index, direction) {
        this.openFlag[index] = 1;
        const n = this.n, m = this.m;
        const r = this.idxR[index], c = this.idxC[index], d = direction;
        let dr, dc;
        if (r === 0) { dr = 1; dc = -d; }
        else if (r === n) { dr = -1; dc = d; }
        else if (c === 0) { dr = -d; dc = 1; }
        else { dr = d; dc = -1; }
        let cr = r, cc = c;
        for (let hop = 0; hop < 8 * (n + m) + 8; hop++) {
            const t = Math.min(dr > 0 ? n - cr : cr, dc > 0 ? m - cc : cc);
            cr += t * dr; cc += t * dc;
            const hh = this.pos2idx.get(cr * (m + 1) + cc);
            if (this.openFlag[hh]) return hh;
            if (cr === 0 || cr === n) dr = -dr;
            if (cc === 0 || cc === m) dc = -dc;
        }
        return -1;
    }
    close(index) { this.openFlag[index] = 0; }
}
// example 1
let b = new BlackBox(2, 3);
console.log(b.open(6, -1) === 6, b.open(4, -1) === 4, b.open(0, -1) === 6);
b.close(6);
console.log(b.open(0, -1) === 4);
// example 2
b = new BlackBox(3, 3);
console.log(b.open(1, -1) === 1, b.open(5, 1) === 1, b.open(11, -1) === 5, b.open(11, 1) === 1);
b.close(1);
console.log(b.open(11, 1) === 5);
b.close(5);
console.log(b.open(11, -1) === 11);
// randomized cross-check
let seed = 987654321;
const rnd = (n) => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed % n; };
let allOk = true;
for (let t = 0; t < 300; t++) {
    const n = 1 + rnd(5), m = 1 + rnd(5);
    const fast = new BlackBox(n, m), slow = new BruteBox(n, m);
    const opened = [];
    for (let op = 0; op < 30; op++) {
        if (opened.length && rnd(3) === 0) {
            const i = rnd(opened.length);
            const idx = opened.splice(i, 1)[0];
            fast.close(idx); slow.close(idx);
        } else {
            let idx = rnd(2 * (n + m));
            // pick a direction valid for the hole (corners: single option)
            const r = fast.idxR[idx], c = fast.idxC[idx];
            let d = rnd(2) ? 1 : -1;
            if ((r === 0 && c === fast.m) || (r === fast.n && c === 0)) d = 1;
            if ((r === 0 && c === 0) || (r === fast.n && c === fast.m)) d = -1;
            if (!fast.openFlag[idx]) opened.push(idx);
            const a1 = fast.open(idx, d), a2 = slow.open(idx, d);
            if (a1 !== a2) { allOk = false; console.log('MISMATCH', n, m, idx, d, a1, a2); }
        }
    }
}
console.log(allOk);
