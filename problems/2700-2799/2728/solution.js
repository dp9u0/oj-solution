/*
 * @lc app=leetcode.cn id=2728 lang=javascript
 *
 * [2728] 计算一个环形街道上的房屋数量
 */

// @lc code=start
/**
 * Definition for a street.
 * class Street {
 *     @param {number[]} doors
 *     constructor(doors);
 * 
 *     @return {void}
 *     openDoor();
 * 
 *     @return {void}
 *     closeDoor();
 * 
 *     @return {boolean}
 *     isDoorOpen();
 * 
 *     @return {void}
 *     moveRight();
 * 
 *     @return {void}
 *     moveLeft();
 * }
 */
/**
 * @param {Street} street
 * @param {number} k
 * @return {number}
 */
var houseCount = function(street, k) {
    // close k doors going right (all houses get closed since n <= k)
    for (let i = 0; i < k; i++) {
        street.closeDoor();
        street.moveRight();
    }
    // mark current house, walk right until we come back to it
    street.openDoor();
    street.moveRight();
    let count = 1;
    while (!street.isDoorOpen()) {
        count++;
        street.moveRight();
    }
    return count;
};
// @lc code=end

// TEST:
class Street {
    constructor(doors) {
        this.doors = doors;
        this.pos = 0;
    }
    openDoor() { this.doors[this.pos] = 1; }
    closeDoor() { this.doors[this.pos] = 0; }
    isDoorOpen() { return this.doors[this.pos] === 1; }
    moveRight() { this.pos = (this.pos + 1) % this.doors.length; }
    moveLeft() { this.pos = (this.pos - 1 + this.doors.length) % this.doors.length; }
}
console.log(houseCount(new Street([0, 0, 0, 0]), 10)); // 4
console.log(houseCount(new Street([1, 0, 1, 1, 0]), 5)); // 5
console.log(houseCount(new Street([1]), 1)); // 1
console.log(houseCount(new Street([0, 1]), 3)); // 2
console.log(houseCount(new Street([1, 1, 1]), 5)); // 3
