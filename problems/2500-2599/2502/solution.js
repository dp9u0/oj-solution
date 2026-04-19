/*
 * @lc app=leetcode id=2502 lang=javascript
 *
 * [2502] Design Memory Allocator
 */

// @lc code=start
/**
 * @param {number} n
 */
var Allocator = function(n) {
    this.mem = new Array(n).fill(0);
};

/**
 * @param {number} size
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.allocate = function(size, mID) {
    let count = 0;
    for (let i = 0; i < this.mem.length; i++) {
        if (this.mem[i] === 0) {
            count++;
            if (count === size) {
                const start = i - size + 1;
                for (let j = start; j <= i; j++) {
                    this.mem[j] = mID;
                }
                return start;
            }
        } else {
            count = 0;
        }
    }
    return -1;
};

/**
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.freeMemory = function(mID) {
    let freed = 0;
    for (let i = 0; i < this.mem.length; i++) {
        if (this.mem[i] === mID) {
            this.mem[i] = 0;
            freed++;
        }
    }
    return freed;
};

/**
 * Your Allocator object will be instantiated and called as such:
 * var obj = new Allocator(n)
 * var param_1 = obj.allocate(size,mID)
 * var param_2 = obj.freeMemory(mID)
 */
// @lc code=end

// TEST:
var loc = new Allocator(10);
console.log(loc.allocate(1, 1)); // 0
console.log(loc.allocate(1, 2)); // 1
console.log(loc.allocate(1, 3)); // 2
console.log(loc.freeMemory(2)); // 1
console.log(loc.allocate(3, 4)); // 3
console.log(loc.allocate(1, 1)); // 1
console.log(loc.allocate(1, 1)); // 6
console.log(loc.freeMemory(1)); // 3
console.log(loc.allocate(10, 2)); // -1
console.log(loc.freeMemory(7)); // 0
