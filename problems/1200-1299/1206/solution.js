/*
 * @lc app=leetcode id=1206 lang=javascript
 *
 * [1206] Design Skiplist
 */

// @lc code=start

var Skiplist = function() {
    this.maxLevel = 16;
    this.level = 1;
    this.head = { val: -Infinity, next: new Array(this.maxLevel).fill(null) };
};

/**
 * @param {number} target
 * @return {boolean}
 */
Skiplist.prototype.search = function(target) {
    let curr = this.head;
    for (let i = this.level - 1; i >= 0; i--) {
        while (curr.next[i] && curr.next[i].val < target) {
            curr = curr.next[i];
        }
    }
    curr = curr.next[0];
    return curr !== null && curr.val === target;
};

/**
 * @param {number} num
 * @return {void}
 */
Skiplist.prototype.add = function(num) {
    const update = new Array(this.maxLevel).fill(null);
    let curr = this.head;
    for (let i = this.level - 1; i >= 0; i--) {
        while (curr.next[i] && curr.next[i].val < num) {
            curr = curr.next[i];
        }
        update[i] = curr;
    }
    const lvl = (() => {
        let l = 1;
        while (Math.random() < 0.5 && l < this.maxLevel) l++;
        return l;
    })();
    if (lvl > this.level) {
        for (let i = this.level; i < lvl; i++) update[i] = this.head;
        this.level = lvl;
    }
    const node = { val: num, next: new Array(lvl).fill(null) };
    for (let i = 0; i < lvl; i++) {
        node.next[i] = update[i].next[i];
        update[i].next[i] = node;
    }
};

/**
 * @param {number} num
 * @return {boolean}
 */
Skiplist.prototype.erase = function(num) {
    const update = new Array(this.maxLevel).fill(null);
    let curr = this.head;
    for (let i = this.level - 1; i >= 0; i--) {
        while (curr.next[i] && curr.next[i].val < num) {
            curr = curr.next[i];
        }
        update[i] = curr;
    }
    curr = curr.next[0];
    if (!curr || curr.val !== num) return false;
    for (let i = 0; i < this.level; i++) {
        if (update[i].next[i] !== curr) break;
        update[i].next[i] = curr.next[i];
    }
    while (this.level > 1 && !this.head.next[this.level - 1]) this.level--;
    return true;
};

/**
 * Your Skiplist object will be instantiated and called as such:
 * var obj = new Skiplist()
 * var param_1 = obj.search(target)
 * obj.add(num)
 * var param_3 = obj.erase(num)
 */
// @lc code=end

// TEST:
const sl = new Skiplist();
sl.add(1); sl.add(2); sl.add(3);
console.log(sl.search(0)); // false
sl.add(4);
console.log(sl.search(1)); // true
console.log(sl.erase(0)); // false
console.log(sl.erase(1)); // true
console.log(sl.search(1)); // false
