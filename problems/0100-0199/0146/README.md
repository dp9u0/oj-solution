# [146] LRU Cache

## Description

[LeetCode Problem Description](https://leetcode.com/problems/lru-cache/description/)

* algorithms
* Hard (23.78%)
* Testcase Example:  '["LRUCache","put","put","get","put","get","put","get","get","get"]\n[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]'

```md
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.
get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
Follow up:
Could you do both operations in O(1) time complexity?
Example:
LRUCache cache = new LRUCache( 2 /* capacity */ );
cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4

```

## Solution

重点是 O(1) 怎么才能在 O(1) 时间内找到需要替换的 key

考虑使用双向链表,每个Key对应一个Node,每次访问Key,将双向该节点移动到链表头部(或尾部),当需要移除一个Key时,移除尾部(或头部)即可.

[SourceCode](./solution.js)