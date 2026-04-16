/*
 * @lc app=leetcode id=855 lang=javascript
 *
 * [855] Exam Room
 */

// @lc code=start
/**
 * @param {number} n
 */
var ExamRoom = function(n) {
    this.n = n;
    this.seats = [];
};

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function() {
    const { n, seats } = this;

    if (seats.length === 0) {
        seats.push(0);
        return 0;
    }

    let maxDist = seats[0]; // distance to seat 0
    let pos = 0;

    for (let i = 1; i < seats.length; i++) {
        const dist = (seats[i] - seats[i - 1]) >> 1;
        if (dist > maxDist) {
            maxDist = dist;
            pos = seats[i - 1] + dist;
        }
    }

    // distance to last seat
    const lastDist = n - 1 - seats[seats.length - 1];
    if (lastDist > maxDist) {
        pos = n - 1;
    }

    // Insert pos into sorted seats
    let idx = seats.length;
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] > pos) {
            idx = i;
            break;
        }
    }
    seats.splice(idx, 0, pos);

    return pos;
};

/**
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function(p) {
    const idx = this.seats.indexOf(p);
    if (idx !== -1) this.seats.splice(idx, 1);
};

/**
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(n)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */
// @lc code=end

// TEST:
const room = new ExamRoom(10);
console.log(room.seat()); // 0
console.log(room.seat()); // 9
console.log(room.seat()); // 4
console.log(room.seat()); // 2
room.leave(4);
console.log(room.seat()); // 5
