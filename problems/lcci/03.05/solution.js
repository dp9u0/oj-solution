/*
 * @lc app=leetcode.cn id=面试题 03.05 lang=javascript
 *
 * [面试题 03.05] 栈排序
 */

// @lc code=start

var SortedStack = function() {
    // 主栈自底向顶递减（栈顶 = 最小），temp 为唯一的辅助栈
    this.stack = [];
    this.temp = [];
};

/**
 * @param {number} val
 * @return {void}
 */
SortedStack.prototype.push = function(val) {
    // 栈顶比 val 小的先挪到 temp，压入 val 后倒回，保持有序
    while (this.stack.length && this.stack[this.stack.length - 1] < val) {
        this.temp.push(this.stack.pop());
    }
    this.stack.push(val);
    while (this.temp.length) {
        this.stack.push(this.temp.pop());
    }
};

/**
 * @return {void}
 */
SortedStack.prototype.pop = function() {
    this.stack.pop();
};

/**
 * @return {number}
 */
SortedStack.prototype.peek = function() {
    return this.stack.length ? this.stack[this.stack.length - 1] : -1;
};

/**
 * @return {boolean}
 */
SortedStack.prototype.isEmpty = function() {
    return this.stack.length === 0;
};

/** 
 * Your SortedStack object will be instantiated and called as such:
 * var obj = new SortedStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.isEmpty()
 */
// @lc code=end

// TEST:
const s = new SortedStack();
s.push(1);
s.push(2);
console.log(s.peek() === 1);
s.pop();
console.log(s.peek() === 2);
s.pop();
console.log(s.isEmpty() === true);
console.log(s.peek() === -1);
s.pop(); // 空栈 pop 不抛错
const s2 = new SortedStack();
for (const v of [3, 1, 4, 1, 5, 9, 2, 6]) s2.push(v);
const drained = [];
while (!s2.isEmpty()) {
    drained.push(s2.peek()); // 官方语义 pop() 返回 null，取值须走 peek
    s2.pop();
}
console.log(JSON.stringify(drained) === JSON.stringify([1, 1, 2, 3, 4, 5, 6, 9]));
