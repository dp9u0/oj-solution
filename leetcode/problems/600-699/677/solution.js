/*
 * @lc app=leetcode id=677 lang=javascript
 *
 * [677] Map Sum Pairs
 */

// @lc code=start

var MapSum = function() {
    this.map = new Map();
    this.root = { children: {}, sum: 0 };
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    const diff = val - (this.map.get(key) || 0);
    this.map.set(key, val);
    let node = this.root;
    for (const ch of key) {
        if (!node.children[ch]) node.children[ch] = { children: {}, sum: 0 };
        node = node.children[ch];
        node.sum += diff;
    }
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let node = this.root;
    for (const ch of prefix) {
        if (!node.children[ch]) return 0;
        node = node.children[ch];
    }
    return node.sum;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
// @lc code=end

// TEST:
var obj = new MapSum();
obj.insert("apple", 3);
console.log(obj.sum("ap")); // 3
obj.insert("app", 2);
console.log(obj.sum("ap")); // 5
obj.insert("apple", 2);
console.log(obj.sum("ap")); // 4
