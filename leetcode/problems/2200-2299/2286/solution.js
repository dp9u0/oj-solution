/*
 * @lc app=leetcode id=2286 lang=javascript
 *
 * [2286] Booking Concert Tickets in Groups
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 */
var BookMyShow = function(n, m) {
    this.n = n;
    this.m = m;
    this.used = new Array(n).fill(0);
    this.sum = new Array(4 * n).fill(0);
    this.mx = new Array(4 * n).fill(0);
    this._build(1, 0, n - 1);
    this.firstNonFull = 0;
};

BookMyShow.prototype._build = function(node, lo, hi) {
    if (lo === hi) {
        this.mx[node] = this.m;
        return;
    }
    const mid = (lo + hi) >> 1;
    this._build(node * 2, lo, mid);
    this._build(node * 2 + 1, mid + 1, hi);
    this.mx[node] = Math.max(this.mx[node * 2], this.mx[node * 2 + 1]);
};

BookMyShow.prototype._update = function(node, lo, hi, idx) {
    if (lo === hi) {
        this.sum[node] = this.used[idx];
        this.mx[node] = this.m - this.used[idx];
        return;
    }
    const mid = (lo + hi) >> 1;
    if (idx <= mid) this._update(node * 2, lo, mid, idx);
    else this._update(node * 2 + 1, mid + 1, hi, idx);
    this.sum[node] = this.sum[node * 2] + this.sum[node * 2 + 1];
    this.mx[node] = Math.max(this.mx[node * 2], this.mx[node * 2 + 1]);
};

BookMyShow.prototype._querySum = function(node, lo, hi, l, r) {
    if (l > r || lo > r || hi < l) return 0;
    if (l <= lo && hi <= r) return this.sum[node];
    const mid = (lo + hi) >> 1;
    return this._querySum(node * 2, lo, mid, l, r) +
           this._querySum(node * 2 + 1, mid + 1, hi, l, r);
};

BookMyShow.prototype._findFirst = function(node, lo, hi, r, k) {
    if (lo > r || this.mx[node] < k) return -1;
    if (lo === hi) return lo;
    const mid = (lo + hi) >> 1;
    const left = this._findFirst(node * 2, lo, mid, r, k);
    if (left !== -1) return left;
    return this._findFirst(node * 2 + 1, mid + 1, hi, r, k);
};

/**
 * @param {number} k
 * @param {number} maxRow
 * @return {number[]}
 */
BookMyShow.prototype.gather = function(k, maxRow) {
    const r = this._findFirst(1, 0, this.n - 1, maxRow, k);
    if (r === -1) return [];
    const seat = this.used[r];
    this.used[r] += k;
    this._update(1, 0, this.n - 1, r);
    return [r, seat];
};

/**
 * @param {number} k
 * @param {number} maxRow
 * @return {boolean}
 */
BookMyShow.prototype.scatter = function(k, maxRow) {
    const totalUsed = this._querySum(1, 0, this.n - 1, 0, maxRow);
    if ((maxRow + 1) * this.m - totalUsed < k) return false;

    let remaining = k;
    while (remaining > 0) {
        if (this.firstNonFull > maxRow) break;
        if (this.used[this.firstNonFull] === this.m) {
            this.firstNonFull++;
            continue;
        }
        const avail = this.m - this.used[this.firstNonFull];
        const take = Math.min(avail, remaining);
        this.used[this.firstNonFull] += take;
        this._update(1, 0, this.n - 1, this.firstNonFull);
        remaining -= take;
    }
    return true;
};
// @lc code=end

// TEST:
{
    const bms = new BookMyShow(2, 5);
    console.log(JSON.stringify(bms.gather(4, 0))); // [0,0]
    console.log(JSON.stringify(bms.gather(2, 0))); // []
    console.log(bms.scatter(5, 1)); // true
    console.log(bms.scatter(5, 1)); // false
}
console.log('---');
{
    const bms = new BookMyShow(1, 5);
    console.log(JSON.stringify(bms.gather(3, 0))); // [0,0]
    console.log(JSON.stringify(bms.gather(3, 0))); // []
    console.log(bms.scatter(2, 0)); // true
    console.log(bms.scatter(1, 0)); // false
}
console.log('---');
{
    const bms = new BookMyShow(3, 3);
    console.log(bms.scatter(9, 2)); // true
    console.log(JSON.stringify(bms.gather(1, 2))); // []
    console.log(bms.scatter(1, 2)); // false
}
console.log('---');
{
    const bms = new BookMyShow(3, 5);
    console.log(bms.scatter(7, 2)); // true (row0:5, row1:2)
    console.log(JSON.stringify(bms.gather(3, 2))); // [1,2]
    console.log(bms.scatter(1, 1)); // false
}
console.log('---');
{
    const bms = new BookMyShow(2, 5);
    console.log(JSON.stringify(bms.gather(10, 1))); // []
    console.log(bms.scatter(10, 1)); // true
}
