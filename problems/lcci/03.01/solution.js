/*
 * @lc app=leetcode.cn id=面试题 03.01 lang=javascript
 *
 * [面试题 03.01] 三合一
 */

// @lc code=start
/**
 * @param {number} stackSize
 */
var TripleInOne = function(stackSize) {
    // 一数组三等分，第 i 栈占 [i*size, (i+1)*size)
    this.size = stackSize;
    this.data = new Array(stackSize * 3);
    this.tops = [0, 0, 0];
};

/**
 * @param {number} stackNum
 * @param {number} value
 * @return {void}
 */
TripleInOne.prototype.push = function(stackNum, value) {
    if (this.tops[stackNum] === this.size) return;
    this.data[stackNum * this.size + this.tops[stackNum]] = value;
    this.tops[stackNum]++;
};

/**
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.pop = function(stackNum) {
    if (this.tops[stackNum] === 0) return -1;
    const v = this.data[stackNum * this.size + this.tops[stackNum] - 1];
    this.tops[stackNum]--;
    return v;
};

/**
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.peek = function(stackNum) {
    if (this.tops[stackNum] === 0) return -1;
    return this.data[stackNum * this.size + this.tops[stackNum] - 1];
};

/**
 * @param {number} stackNum
 * @return {boolean}
 */
TripleInOne.prototype.isEmpty = function(stackNum) {
    return this.tops[stackNum] === 0;
};

/** 
 * Your TripleInOne object will be instantiated and called as such:
 * var obj = new TripleInOne(stackSize)
 * obj.push(stackNum,value)
 * var param_2 = obj.pop(stackNum)
 * var param_3 = obj.peek(stackNum)
 * var param_4 = obj.isEmpty(stackNum)
 */
// @lc code=end

// TEST:
const t1 = new TripleInOne(1);
t1.push(0, 1);
t1.push(0, 2); // 已满，丢弃
console.log(t1.pop(0) === 1);
console.log(t1.pop(0) === -1);
console.log(t1.pop(0) === -1);
console.log(t1.isEmpty(0) === true);
const t2 = new TripleInOne(2);
t2.push(0, 1);
t2.push(0, 2);
t2.push(0, 3); // 已满
console.log(t2.pop(0) === 2);
console.log(t2.pop(0) === 1);
console.log(t2.pop(0) === -1);
console.log(t2.peek(0) === -1);
const t3 = new TripleInOne(3);
t3.push(1, 7);
t3.push(2, 8);
console.log(t3.peek(1) === 7 && t3.peek(2) === 8 && t3.isEmpty(0) === true);
