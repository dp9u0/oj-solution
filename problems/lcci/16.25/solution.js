/*
 * @lc app=leetcode.cn id=面试题 16.25 lang=javascript
 *
 * [面试题 16.25] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    // Map 保持插入序：末尾即最新，首个 key 即最旧
    this.capacity = capacity;
    this.cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) return -1;
    const val = this.cache.get(key);
    // 命中即移到末尾（刷新为最新）
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
        this.cache.delete(this.cache.keys().next().value); // 驱逐最旧
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

// TEST:
const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1) === 1);
cache.put(3, 3); // 驱逐 2
console.log(cache.get(2) === -1);
cache.put(4, 4); // 驱逐 1
console.log(cache.get(1) === -1);
console.log(cache.get(3) === 3);
console.log(cache.get(4) === 4);
// 容量 1 反复覆盖
const c1 = new LRUCache(1);
c1.put(5, 50);
console.log(c1.get(5) === 50);
c1.put(6, 60);
console.log(c1.get(5) === -1 && c1.get(6) === 60);
// put 已存在的 key 刷新顺序且不驱逐
const c2 = new LRUCache(2);
c2.put(1, 1);
c2.put(2, 2);
c2.put(1, 10);
c2.put(3, 3); // 驱逐 2（1 刚刷新过）
console.log(c2.get(1) === 10 && c2.get(2) === -1 && c2.get(3) === 3);
