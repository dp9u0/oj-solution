/*
 * @lc app=leetcode id=1845 lang=javascript
 *
 * [1845] Seat Reservation Manager
 */

// @lc code=start
/**
 * @param {number} n
 */
var SeatManager = function(n) {
    this.heap = [];
    for (let i = 1; i <= n; i++) this.heap.push(i);
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function() {
    const h = this.heap;
    const top = h[0];
    h[0] = h[h.length - 1];
    h.pop();
    this._sinkDown(0);
    return top;
};

/**
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function(seatNumber) {
    const h = this.heap;
    h.push(seatNumber);
    let i = h.length - 1;
    while (i > 0) {
        const p = (i - 1) >> 1;
        if (h[p] > h[i]) {
            [h[p], h[i]] = [h[i], h[p]];
            i = p;
        } else break;
    }
};

SeatManager.prototype._sinkDown = function(i) {
    const h = this.heap;
    const n = h.length;
    while (true) {
        let s = i;
        const l = 2 * i + 1, r = 2 * i + 2;
        if (l < n && h[l] < h[s]) s = l;
        if (r < n && h[r] < h[s]) s = r;
        if (s !== i) {
            [h[i], h[s]] = [h[s], h[i]];
            i = s;
        } else break;
    }
};
// @lc code=end

// TEST:
const sm = new SeatManager(5);
console.log(sm.reserve());     // 1
console.log(sm.reserve());     // 2
sm.unreserve(2);
console.log(sm.reserve());     // 2
console.log(sm.reserve());     // 3
console.log(sm.reserve());     // 4
console.log(sm.reserve());     // 5
sm.unreserve(5);

const sm2 = new SeatManager(1);
console.log(sm2.reserve());    // 1
sm2.unreserve(1);
console.log(sm2.reserve());    // 1

const sm3 = new SeatManager(3);
console.log(sm3.reserve());    // 1
console.log(sm3.reserve());    // 2
console.log(sm3.reserve());    // 3
sm3.unreserve(1);
sm3.unreserve(3);
console.log(sm3.reserve());    // 1
console.log(sm3.reserve());    // 3
