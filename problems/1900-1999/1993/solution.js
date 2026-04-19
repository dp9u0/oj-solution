/*
 * @lc app=leetcode id=1993 lang=javascript
 *
 * [1993] Operations on Tree
 */

// @lc code=start
/**
 * @param {number[]} parent
 */
var LockingTree = function(parent) {
    this.parent = parent;
    this.locked = new Array(parent.length).fill(0);
    this.children = Array.from({ length: parent.length }, () => []);
    for (let i = 1; i < parent.length; i++) {
        this.children[parent[i]].push(i);
    }
};

LockingTree.prototype.lock = function(num, user) {
    if (this.locked[num]) return false;
    this.locked[num] = user;
    return true;
};

LockingTree.prototype.unlock = function(num, user) {
    if (this.locked[num] !== user) return false;
    this.locked[num] = 0;
    return true;
};

LockingTree.prototype.upgrade = function(num, user) {
    if (this.locked[num]) return false;
    if (!this._hasLockedDesc(num)) return false;
    if (this._hasLockedAnc(num)) return false;
    this.locked[num] = user;
    this._unlockDesc(num);
    return true;
};

LockingTree.prototype._hasLockedDesc = function(num) {
    for (const c of this.children[num]) {
        if (this.locked[c]) return true;
        if (this._hasLockedDesc(c)) return true;
    }
    return false;
};

LockingTree.prototype._hasLockedAnc = function(num) {
    let p = this.parent[num];
    while (p !== -1) {
        if (this.locked[p]) return true;
        p = this.parent[p];
    }
    return false;
};

LockingTree.prototype._unlockDesc = function(num) {
    for (const c of this.children[num]) {
        this.locked[c] = 0;
        this._unlockDesc(c);
    }
};

/**
 * Your LockingTree object will be instantiated and called as such:
 * var obj = new LockingTree(parent)
 * var param_1 = obj.lock(num,user)
 * var param_2 = obj.unlock(num,user)
 * var param_3 = obj.upgrade(num,user)
 */
// @lc code=end

// TEST:
var obj = new LockingTree([-1,0,0,1,1,2,2]);
console.log(obj.lock(2, 2));     // true
console.log(obj.unlock(2, 3));   // false
console.log(obj.unlock(2, 2));   // true
console.log(obj.lock(4, 5));     // true
console.log(obj.upgrade(0, 1));  // true
console.log(obj.lock(0, 1));     // false
