/*
 * @lc app=leetcode id=1172 lang=javascript
 *
 * [1172] Dinner Plate Stacks
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var DinnerPlates = function(capacity) {
    this.cap = capacity;
    this.stacks = [];
    this.available = new Set(); // indices of non-full stacks
};

/**
 * @param {number} val
 * @return {void}
 */
DinnerPlates.prototype.push = function(val) {
    if (this.available.size === 0) {
        this.stacks.push([val]);
        if (this.cap > 1) this.available.add(this.stacks.length - 1);
    } else {
        const idx = Math.min(...this.available);
        this.stacks[idx].push(val);
        if (this.stacks[idx].length === this.cap) this.available.delete(idx);
    }
};

/**
 * @return {number}
 */
DinnerPlates.prototype.pop = function() {
    let i = this.stacks.length - 1;
    while (i >= 0 && this.stacks[i].length === 0) i--;
    if (i < 0) return -1;
    const val = this.stacks[i].pop();
    this.available.add(i);
    // Clean up trailing empty stacks
    while (this.stacks.length > 0 && this.stacks[this.stacks.length - 1].length === 0) {
        const last = this.stacks.length - 1;
        this.available.delete(last);
        this.stacks.pop();
    }
    return val;
};

/**
 * @param {number} index
 * @return {number}
 */
DinnerPlates.prototype.popAtStack = function(index) {
    if (index >= this.stacks.length || this.stacks[index].length === 0) return -1;
    const val = this.stacks[index].pop();
    this.available.add(index);
    return val;
};

/** 
 * Your DinnerPlates object will be instantiated and called as such:
 * var obj = new DinnerPlates(capacity)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAtStack(index)
 */
// @lc code=end

// TEST:
var D = new DinnerPlates(2);
D.push(1); D.push(2); D.push(3); D.push(4); D.push(5);
console.log(D.popAtStack(0)); // 2
D.push(20); D.push(21);
console.log(D.popAtStack(0)); // 20
console.log(D.popAtStack(2)); // 21
console.log(D.pop()); // 5
console.log(D.pop()); // 4
console.log(D.pop()); // 3
console.log(D.pop()); // 1
console.log(D.pop()); // -1
