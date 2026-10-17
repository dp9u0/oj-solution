/*
 * @lc app=leetcode.cn id=面试题 10.10 lang=javascript
 *
 * [面试题 10.10] 数字流的秩
 */

// @lc code=start

var StreamRank = function() {
    // x <= 50000，Fenwick 树计出现次数（1 基）
    this.N = 50001;
    this.tree = new Uint32Array(this.N + 1);
};

StreamRank.prototype.update = function(i, d) {
    for (; i <= this.N; i += i & -i) this.tree[i] += d;
};

StreamRank.prototype.query = function(i) {
    let s = 0;
    for (; i > 0; i -= i & -i) s += this.tree[i];
    return s;
};

/**
 * @param {number} x
 * @return {void}
 */
StreamRank.prototype.track = function(x) {
    this.update(x + 1, 1);
};

/**
 * @param {number} x
 * @return {number}
 */
StreamRank.prototype.getRankOfNumber = function(x) {
    return this.query(x + 1);
};

/** 
 * Your StreamRank object will be instantiated and called as such:
 * var obj = new StreamRank()
 * obj.track(x)
 * var param_2 = obj.getRankOfNumber(x)
 */
// @lc code=end

// TEST:
const r = new StreamRank();
console.log(r.getRankOfNumber(1) === 0);
r.track(0);
console.log(r.getRankOfNumber(0) === 1);
console.log(r.getRankOfNumber(1) === 1);
const r2 = new StreamRank();
for (const x of [5, 1, 9, 5, 3]) r2.track(x);
console.log(r2.getRankOfNumber(1) === 1); // 1
console.log(r2.getRankOfNumber(5) === 4); // 1,3,5,5
console.log(r2.getRankOfNumber(0) === 0);
console.log(r2.getRankOfNumber(50000) === 5);
const r3 = new StreamRank();
r3.track(50000);
r3.track(50000);
console.log(r3.getRankOfNumber(50000) === 2);
