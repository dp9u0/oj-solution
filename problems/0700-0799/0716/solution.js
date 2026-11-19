/*
 * @lc app=leetcode.cn id=716 lang=javascript
 *
 * [716] 最大栈
 */

// @lc code=start

var MaxStack = function() {
    this.stack = [];                 // elements in stack order
    this.sorted = [];                // all values, ascending (multiset)
};

/**
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
    this.stack.push(x);
    let lo = 0, hi = this.sorted.length;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (this.sorted[mid] < x) lo = mid + 1;
        else hi = mid;
    }
    this.sorted.splice(lo, 0, x);
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
    const v = this.stack.pop();
    let lo = 0, hi = this.sorted.length;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (this.sorted[mid] < v) lo = mid + 1;
        else hi = mid;
    }
    this.sorted.splice(lo, 1);
    return v;
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
    return this.sorted[this.sorted.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
    const max = this.sorted.pop();
    for (let i = this.stack.length - 1; i >= 0; i--) {
        if (this.stack[i] === max) { // topmost occurrence
            this.stack.splice(i, 1);
            break;
        }
    }
    return max;
};
// @lc code=end

// TEST:
const run = ops => {
    const obj = new MaxStack();
    return ops.map(([op, ...args]) => {
        if (op === 'push') { obj.push(args[0]); return null; }
        return obj[op]();
    });
};

console.log(JSON.stringify(run([
    ['push', 5], ['push', 1], ['push', 5], ['top'], ['popMax'],
    ['top'], ['peekMax'], ['pop'], ['top'],
]))); // [null,null,null,null,5,5,1,5,1,5]

console.log(JSON.stringify(run([
    ['push', 2], ['push', 2], ['push', 2], ['popMax'], ['peekMax'], ['pop'],
]))); // [null,null,null,2,2,2] (popMax removes topmost of the duplicates)

console.log(JSON.stringify(run([
    ['push', -5], ['push', -1], ['push', -3], ['peekMax'], ['popMax'], ['top'],
]))); // [null,null,null,-1,-1,-3] (negatives)

console.log(JSON.stringify(run([
    ['push', 5], ['popMax'], ['push', 3], ['peekMax'], ['pop'],
]))); // [null,5,null,3,3] (interleaved ops)
