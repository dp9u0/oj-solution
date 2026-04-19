/*
 * @lc app=leetcode id=1622 lang=javascript
 *
 * [1622] Fancy Sequence
 */

// @lc code=start
const MOD = 1e9 + 7;
const MOD_BI = BigInt(MOD);

const mulMod = (a, b) => Number(BigInt(a) * BigInt(b) % MOD_BI);

const modPow = (base, exp) => {
    let result = 1;
    base %= MOD;
    while (exp > 0) {
        if (exp & 1) result = mulMod(result, base);
        base = mulMod(base, base);
        exp >>= 1;
    }
    return result;
};

var Fancy = function() {
    this.seq = [];
    this.mul = 1;
    this.invMul = 1;
    this.add = 0;
};

Fancy.prototype.append = function(val) {
    this.seq.push(mulMod((val - this.add + MOD) % MOD, this.invMul));
};

Fancy.prototype.addAll = function(inc) {
    this.add = (this.add + inc) % MOD;
};

Fancy.prototype.multAll = function(m) {
    this.mul = mulMod(this.mul, m);
    this.add = mulMod(this.add, m);
    this.invMul = mulMod(this.invMul, modPow(m, MOD - 2));
};

Fancy.prototype.getIndex = function(idx) {
    if (idx >= this.seq.length) return -1;
    return (mulMod(this.mul, this.seq[idx]) + this.add) % MOD;
};
// @lc code=end

// TEST:
const f = new Fancy();
f.append(2);
f.addAll(3);
f.append(7);
f.multAll(2);
console.log(f.getIndex(0)); // 10
f.addAll(3);
f.append(10);
f.multAll(2);
console.log(f.getIndex(0)); // 26
console.log(f.getIndex(1)); // 34
console.log(f.getIndex(2)); // 20
console.log(f.getIndex(3)); // -1
