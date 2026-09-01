/*
 * @lc app=leetcode id=432 lang=javascript
 *
 * [432] All O`one Data Structure
 */

// @lc code=start

var AllOne = function() {
    // 双向链表哨兵：head <-> [按 count 升序的桶] <-> tail
    this.head = { count: 0, keys: new Set(), prev: null, next: null };
    this.tail = { count: 0, keys: new Set(), prev: this.head, next: null };
    this.head.next = this.tail;
    this.keyToNode = new Map(); // key -> 所在桶节点
};

/**
 * 在 prev 节点之后插入一个新桶（count, key），返回新节点
 */
AllOne.prototype.insertAfter = function(prev, count, key) {
    const node = { count, keys: new Set([key]), prev, next: prev.next };
    prev.next.prev = node;
    prev.next = node;
    return node;
};

/**
 * 从链表中摘除空桶节点
 */
AllOne.prototype.removeNode = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
};

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function(key) {
    const node = this.keyToNode.get(key);
    if (!node) {
        if (this.head.next.count === 1) {
            this.head.next.keys.add(key);
            this.keyToNode.set(key, this.head.next);
        } else {
            this.keyToNode.set(key, this.insertAfter(this.head, 1, key));
        }
        return;
    }
    node.keys.delete(key);
    const next = node.next;
    if (next.count === node.count + 1) {
        next.keys.add(key);
        this.keyToNode.set(key, next);
    } else {
        this.keyToNode.set(key, this.insertAfter(node, node.count + 1, key));
    }
    if (node.keys.size === 0) this.removeNode(node);
};

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
    const node = this.keyToNode.get(key);
    node.keys.delete(key);
    if (node.count === 1) {
        this.keyToNode.delete(key);
    } else {
        const prev = node.prev;
        if (prev.count === node.count - 1) {
            prev.keys.add(key);
            this.keyToNode.set(key, prev);
        } else {
            this.keyToNode.set(key, this.insertAfter(node.prev, node.count - 1, key));
        }
    }
    if (node.keys.size === 0) this.removeNode(node);
};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
    return this.head.next === this.tail
        ? ''
        : this.tail.prev.keys.values().next().value;
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
    return this.head.next === this.tail
        ? ''
        : this.head.next.keys.values().next().value;
};

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
// @lc code=end

// TEST:
const assert = (actual, expected) =>
    console.log(actual === expected ? `✔ ${JSON.stringify(actual)}` : `✘ ${JSON.stringify(actual)} (期望 ${JSON.stringify(expected)})`);

// 用例 1：题目示例
let allOne = new AllOne();
allOne.inc('hello');
allOne.inc('hello');
assert(allOne.getMaxKey(), 'hello');
assert(allOne.getMinKey(), 'hello');
allOne.inc('leet');
assert(allOne.getMaxKey(), 'hello');
assert(allOne.getMinKey(), 'leet');

// 用例 2：空数据结构
allOne = new AllOne();
assert(allOne.getMaxKey(), '');
assert(allOne.getMinKey(), '');

// 用例 3：dec 到 0 后移除 key
allOne = new AllOne();
allOne.inc('a');
allOne.inc('a');
allOne.dec('a');
assert(allOne.getMaxKey(), 'a');
allOne.dec('a');
assert(allOne.getMaxKey(), '');
assert(allOne.getMinKey(), '');

// 用例 4：多 key 同计数共享桶，计数交错变化
allOne = new AllOne();
allOne.inc('a');
allOne.inc('b');
allOne.inc('b');
allOne.inc('c');
allOne.inc('c');
allOne.inc('c');
assert(allOne.getMaxKey(), 'c');
assert(allOne.getMinKey(), 'a');
allOne.dec('c');
allOne.dec('c');
assert(allOne.getMaxKey(), 'b'); // c 计数降为 1，最大为 b(2)
assert(allOne.getMinKey(), 'a');

// 用例 5：dec 跨桶下移需要新建桶
allOne = new AllOne();
allOne.inc('x');
allOne.inc('x');
allOne.inc('x');
allOne.inc('y');
allOne.dec('x');
assert(allOne.getMaxKey(), 'x'); // x:2, y:1
assert(allOne.getMinKey(), 'y');
allOne.dec('x');
allOne.dec('x');
assert(allOne.getMaxKey(), 'y'); // 只剩 y:1
assert(allOne.getMinKey(), 'y');

module.exports = { AllOne };
