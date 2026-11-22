/*
 * @lc app=leetcode.cn id=2753 lang=javascript
 *
 * [2753] 计算一个环形街道上的房屋数量 II
 */

// @lc code=start
/**
 * Definition for a street.
 * class Street {
 *     @param {number[]} doors
 *     constructor(doors);
 *
 *     @return {void}
 *     closeDoor();
 *
 *     @return {boolean}
 *     isDoorOpen();
 *
 *     @return {void}
 *     moveRight();
 * }
 */
/**
 * @param {Street} street
 * @param {number} k
 * @return {number}
 */
var houseCount = function(street, k) {
    let total = 0;
    while (!street.isDoorOpen()) { street.moveRight(); total++; }
    const q1 = total; // first open door: the return point, left open
    let last = q1;
    let since = 0; // consecutive closed houses since last sighting
    for (;;) {
        street.moveRight(); total++; since++;
        if (street.isDoorOpen()) {
            street.closeDoor();
            last = total;
            since = 0;
        } else if (since >= k) {
            // k >= n closed houses in a row: full circle covered, all closed;
            // last sighting was the return point, n = last - q1
            return last - q1;
        }
    }
};
// @lc code=end

// TEST:
class Street {
    constructor(doors) { this.doors = doors.slice(); this.cur = 0; this.calls = 0; }
    closeDoor() { this.calls++; this.doors[this.cur] = 0; }
    isDoorOpen() { this.calls++; return this.doors[this.cur] === 1; }
    moveRight() { this.calls++; this.cur = (this.cur + 1) % this.doors.length; }
};
const check = (doors, k, expected) => {
    const s = new Street(doors);
    const got = houseCount(s, k);
    console.log(JSON.stringify(doors), "k=" + k, "->", got, got === expected ? "OK (" + s.calls + " calls)" : "FAIL, expected " + expected);
};
check([1, 1, 1, 1], 10, 4);
check([1, 0, 1, 1, 0], 5, 5);
check([0, 1, 0], 3, 3);
check([0, 0, 0, 1], 7, 4);
check([1, 1], 2, 2);
check([1], 1, 1);
