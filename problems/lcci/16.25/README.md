# [面试题 16.25] LRU 缓存

## Description


```md
https://leetcode.cn/problems/lru-cache-lcci/description/
* lcci
* Medium (55.84%)
* Likes:    212
* Dislikes: -
* Testcase Example:  '["LRUCache","put","put","get","put","get","put","get","get","get"]\n' +
'[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]'
设计和构建一个“最近最少使用”缓存，该缓存会删除最近最少使用的项目。缓存应该从键映射到值(允许你插入和检索特定键对应的值)，并在初始化时指定最大容量。当缓存被填满时，它应该删除最近最少使用的项目。
它应该支持以下操作： 获取数据 get 和 写入数据 put 。
获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
写入数据 put(key, value) - 如果密钥不存在，则写入其数据值。当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。
示例：
LRUCache cache = new LRUCache( 2 /* 缓存容量 */ );
cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4
Hint 1: 首先明确问题。你到底想要什么功能？
Hint 2: 什么数据结构对查找最有用？维护元素顺序最有用的数据结构是什么？
Hint 3: 散列表和双向链表都很有用。你能把这两者结合起来吗？

```

## Description (English)

Design and build a "Least Recently Used" (LRU) cache that evicts the least recently used item. The cache maps keys to values (with insert and retrieve operations) and has a maximum capacity fixed at initialization. When full, it should evict the least recently used item before inserting a new one.

Supported operations:
- get(key): return the value if the key exists (values are always positive), otherwise -1.
- put(key, value): insert or update the value; when capacity is reached, evict the least recently used item first.

Example:
LRUCache cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
cache.get(1);    // returns 1
cache.put(3, 3); // evicts key 2
cache.get(2);    // returns -1
cache.put(4, 4); // evicts key 1
cache.get(1);    // returns -1
cache.get(3);    // returns 3
cache.get(4);    // returns 4

## 思路

利用 JS `Map` 保持插入序的特性当哈希 + 双向链表用：get 命中先 delete 再 set（移到末尾即最新）；put 同样刷新位置，超出容量时删除迭代器的首个 key（最旧）。每步操作均摊 O(1)，无需手写链表节点。

## Solution

[SourceCode](./solution.js)
