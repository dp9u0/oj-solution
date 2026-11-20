/*
 * @lc app=leetcode.cn id=1429 lang=javascript
 *
 * [1429] 第一个唯一数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var FirstUnique = function(nums) {
    this.count = new Map();
    this.queue = [];
    this.head = 0;
    for (const v of nums) this.add(v);
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
    const q = this.queue;
    while (this.head < q.length && this.count.get(q[this.head]) > 1) this.head++;
    return this.head < q.length ? q[this.head] : -1;
};

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
    this.count.set(value, (this.count.get(value) || 0) + 1);
    this.queue.push(value);
};

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
// @lc code=end

// TEST:
let fu = new FirstUnique([2,3,5]);
console.log(fu.showFirstUnique()); // 2
fu.add(5);
console.log(fu.showFirstUnique()); // 2
fu.add(2);
console.log(fu.showFirstUnique()); // 3
fu.add(3);
console.log(fu.showFirstUnique()); // -1

fu = new FirstUnique([7,7,7,7,7,7]);
console.log(fu.showFirstUnique()); // -1
fu.add(7); fu.add(3); fu.add(3); fu.add(7); fu.add(17);
console.log(fu.showFirstUnique()); // 17

fu = new FirstUnique([809]);
console.log(fu.showFirstUnique()); // 809
fu.add(809);
console.log(fu.showFirstUnique()); // -1
