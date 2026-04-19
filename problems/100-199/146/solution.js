/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.map = {};
  this.capacity = capacity;
  this.size = 0;
  this.head = {
    flag: "head",
    pre: null,
    next: null
  };
  this.tail = {
    flag: "tail",
    pre: null,
    next: null
  };
  this.head.next = this.tail;
  this.tail.pre = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map[key]) {
    this.remove(this.map[key]);
    this.insert(this.map[key]);
    return this.map[key].value;
  }
  return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (!this.map[key]) {
    // 新增
    this.map[key] = {
      key,
      value,
      pre: null,
      next: null
    };
  } else {
    // 更新 value
    this.map[key].value = value;
    // 先移除
    this.remove(this.map[key]);
  }
  // 添加 node
  this.insert(this.map[key]);
};

LRUCache.prototype.remove = function (node) {
  node.next.pre = node.pre;
  node.pre.next = node.next;
  node.pre = null;
  node.next = null;
  this.size--;
};

LRUCache.prototype.insert = function (node) {
  node.pre = this.head;
  node.next = this.head.next;
  this.head.next.pre = node;
  this.head.next = node;
  this.size++;
  if (this.size > this.capacity) {
    let node = this.tail.pre;
    this.remove(node);
    this.map[node.key] = null;
  }
};

/**
// TEST:

let cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
cache.get(1); // returns 1
cache.put(3, 3); // evicts key 2
cache.get(2); // returns -1 (not found)
cache.put(4, 4); // evicts key 1
cache.get(1); // returns -1 (not found)
cache.get(3); // returns 3
cache.get(4); // returns 4
*/