/*
 * @lc app=leetcode.cn id=面试题 03.03 lang=javascript
 *
 * [面试题 03.03] 堆盘子
 */

// @lc code=start
/**
 * @param {number} cap
 */
var StackOfPlates = function(cap) {
    // 子栈列表，空栈即删除
    this.cap = cap;
    this.stacks = [];
};

/**
 * @param {number} val
 * @return {void}
 */
StackOfPlates.prototype.push = function(val) {
    if (this.cap <= 0) return;
    const last = this.stacks[this.stacks.length - 1];
    if (last && last.length < this.cap) {
        last.push(val);
    } else {
        this.stacks.push([val]);
    }
};

/**
 * @return {number}
 */
StackOfPlates.prototype.pop = function() {
    return this.popAt(this.stacks.length - 1);
};

/**
 * @param {number} index
 * @return {number}
 */
StackOfPlates.prototype.popAt = function(index) {
    if (index < 0 || index >= this.stacks.length) return -1;
    const stack = this.stacks[index];
    const val = stack.pop();
    if (stack.length === 0) this.stacks.splice(index, 1);
    return val;
};

/** 
 * Your StackOfPlates object will be instantiated and called as such:
 * var obj = new StackOfPlates(cap)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAt(index)
 */
// @lc code=end

// TEST:
const s1 = new StackOfPlates(1);
s1.push(1);
s1.push(2);
console.log(s1.popAt(1) === 2);
console.log(s1.pop() === 1);
console.log(s1.pop() === -1);
const s2 = new StackOfPlates(2);
s2.push(1);
s2.push(2);
s2.push(3);
console.log(s2.popAt(0) === 2);
console.log(s2.popAt(0) === 1);
console.log(s2.popAt(0) === 3);
const s3 = new StackOfPlates(0);
s3.push(5);
console.log(s3.pop() === -1); // cap=0 不收元素
const s4 = new StackOfPlates(3);
s4.push(1);
s4.push(2);
s4.push(3);
console.log(s4.popAt(5) === -1); // 越界
console.log(s4.popAt(0) === 3 && s4.popAt(0) === 2 && s4.popAt(0) === 1);
