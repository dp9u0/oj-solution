/*
 * @lc app=leetcode.cn id=LCR 031 lang=javascript
 *
 * [LCR 031] LRU 缓存
 */

// @lc code=start
// 双向链表节点
function ListNode(key, value) {
  this.key = key;
  this.value = value;
  this.prev = null;
  this.next = null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.map = new Map(); // key -> 链表节点
  // 虚拟头尾节点，方便在 O(1) 内插入头部 / 删除尾部
  this.head = new ListNode(0, 0);
  this.tail = new ListNode(0, 0);
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/** 将节点移动到链表头部（最新使用） */
LRUCache.prototype.moveToHead = function(node) {
  // 先从原位置摘除
  node.prev.next = node.next;
  node.next.prev = node.prev;
  // 插入到 head 之后
  node.prev = this.head;
  node.next = this.head.next;
  this.head.next.prev = node;
  this.head.next = node;
};

/** 移除链表尾部节点并返回（最久未使用） */
LRUCache.prototype.removeTail = function() {
  const node = this.tail.prev;
  node.prev.next = this.tail;
  this.tail.prev = node.prev;
  return node;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  const node = this.map.get(key);
  if (node === undefined) {
    return -1;
  }
  this.moveToHead(node);
  return node.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  const node = this.map.get(key);
  if (node !== undefined) {
    // 已存在：更新值并移到头部
    node.value = value;
    this.moveToHead(node);
    return;
  }
  // 不存在：创建新节点并插入头部
  const newNode = new ListNode(key, value);
  this.map.set(key, newNode);
  newNode.prev = this.head;
  newNode.next = this.head.next;
  this.head.next.prev = newNode;
  this.head.next = newNode;
  this.size++;
  // 超出容量，删除最久未使用的尾部节点
  if (this.size > this.capacity) {
    const removed = this.removeTail();
    this.map.delete(removed.key);
    this.size--;
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

// TEST: 题目示例
{
  const cache = new LRUCache(2);
  cache.put(1, 1);
  cache.put(2, 2);
  console.assert(cache.get(1) === 1, 'get(1) = 1');
  cache.put(3, 3); // evicts key 2
  console.assert(cache.get(2) === -1, 'get(2) = -1');
  cache.put(4, 4); // evicts key 1
  console.assert(cache.get(1) === -1, 'get(1) = -1');
  console.assert(cache.get(3) === 3, 'get(3) = 3');
  console.assert(cache.get(4) === 4, 'get(4) = 4');
}

// TEST: 更新已有 key 不改变容量
{
  const cache = new LRUCache(2);
  cache.put(1, 1);
  cache.put(2, 2);
  cache.put(1, 100);
  console.assert(cache.get(1) === 100, 'get(1) = 100 (updated)');
  cache.put(3, 3); // evicts key 2
  console.assert(cache.get(2) === -1, 'get(2) = -1');
  console.assert(cache.get(3) === 3, 'get(3) = 3');
}

// TEST: get 更新使用顺序（最久未使用被淘汰）
{
  const cache = new LRUCache(2);
  cache.put(1, 1);
  cache.put(2, 2);
  cache.get(1); // 1 becomes most recent, 2 is now LRU
  cache.put(3, 3); // evicts key 2
  console.assert(cache.get(2) === -1, 'get(2) = -1');
  console.assert(cache.get(1) === 1, 'get(1) = 1');
  console.assert(cache.get(3) === 3, 'get(3) = 3');
}

// TEST: 容量为 1
{
  const cache = new LRUCache(1);
  cache.put(1, 1);
  cache.put(2, 2);
  console.assert(cache.get(1) === -1, 'get(1) = -1 (capacity 1)');
  console.assert(cache.get(2) === 2, 'get(2) = 2');
}

// TEST: 空缓存 get 返回 -1
{
  const cache = new LRUCache(3);
  console.assert(cache.get(0) === -1, 'get(0) = -1 (empty)');
  cache.put(0, 0);
  console.assert(cache.get(0) === 0, 'get(0) = 0');
  console.assert(cache.get(1) === -1, 'get(1) = -1');
}
