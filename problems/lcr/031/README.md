# [LCR 031] LRU 缓存

## Description


```md
https://leetcode.cn/problems/OrIXps/description/
* algorithms
* Medium (55.65%)
* Likes:    119
* Dislikes: -
* Testcase Example:  '["LRUCache","put","put","get","put","get","put","get","get","get"]\n' +
'[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]'
运用所掌握的数据结构，设计和实现一个  LRU (Least Recently Used，最近最少使用) 缓存机制 。
实现 LRUCache 类：
LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。

示例：
输入
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
输出
[null, null, null, 1, null, -1, null, -1, 3, 4]
解释
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4

提示：
1 <= capacity <= 3000
0 <= key <= 10000
0 <= value <= 105
最多调用 2 * 105 次 get 和 put

进阶：是否可以在 O(1) 时间复杂度内完成这两种操作？

注意：本题与主站 146 题相同：https://leetcode.cn/problems/lru-cache/

```

## Solution

[SourceCode](./solution.js)

## English Description

Design a data structure that follows the constraints of a **Least Recently Used (LRU) cache**.

Implement the `LRUCache` class:

- `LRUCache(int capacity)` Initialize the LRU cache with **positive** size `capacity`.
- `int get(int key)` Return the value of the `key` if the key exists, otherwise return `-1`.
- `void put(int key, int value)` Update the value of the `key` if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the `capacity` from this operation, **evict the least recently used key**.

**Example:**
```
Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]
```

**Constraints:**
- `1 <= capacity <= 3000`
- `0 <= key <= 10000`
- `0 <= value <= 105`
- At most `2 * 105` calls will be made to `get` and `put`.

**Follow up:** Could you do `get` and `put` in `O(1)` time complexity?

## Solution Approach

**思路：哈希表 + 双向链表（时间复杂度 O(1)，空间复杂度 O(capacity)）**

LRU 要求 get 与 put 均为 O(1)，单个哈希表无法维护"最近使用"顺序，因此需要哈希表 + 双向链表组合：

1. **双向链表**维护 key 的使用顺序：头部是最新使用，尾部是最久未使用。
2. **哈希表** key → 链表节点，实现 O(1) 定位。
3. **get(key)**：若存在，将该节点移到链表头部并返回值；否则返回 -1。
4. **put(key, value)**：若已存在，更新值并移到头部；若不存在，创建节点插入头部。若超出容量，删除链表尾部节点，并从哈希表中移除对应 key。

节点删除/移动均为 O(1)（有前后指针），get 和 put 整体 O(1)。
