# [432] All O`one Data Structure

## Description

[LeetCode Problem Description](https://leetcode.com/problems/all-oone-data-structure/description/)

* algorithms
* Hard (44.49%)
* Likes:    2257
* Dislikes: 224
* Testcase Example:  '["AllOne","inc","inc","getMaxKey","getMinKey","inc","getMaxKey","getMinKey"]\n' +

```md
'[[],["hello"],["hello"],[],[],["leet"],[],[]]'
Design a data structure to store the strings' count with the ability to return the strings with minimum and maximum counts.
Implement the AllOne class:
AllOne() Initializes the object of the data structure.
inc(String key) Increments the count of the string key by 1. If key does not exist in the data structure, insert it with count 1.
dec(String key) Decrements the count of the string key by 1. If the count of key is 0 after the decrement, remove it from the data structure. It is guaranteed that key exists in the data structure before the decrement.
getMaxKey() Returns one of the keys with the maximal count. If no element exists, return an empty string "".
getMinKey() Returns one of the keys with the minimum count. If no element exists, return an empty string "".
Note that each function must run in O(1) average time complexity.

Example 1:
Input
["AllOne", "inc", "inc", "getMaxKey", "getMinKey", "inc", "getMaxKey", "getMinKey"]
[[], ["hello"], ["hello"], [], [], ["leet"], [], []]
Output
[null, null, null, "hello", "hello", null, "hello", "leet"]
Explanation
AllOne allOne = new AllOne();
allOne.inc("hello");
allOne.inc("hello");
allOne.getMaxKey(); // return "hello"
allOne.getMinKey(); // return "hello"
allOne.inc("leet");
allOne.getMaxKey(); // return "hello"
allOne.getMinKey(); // return "leet"

Constraints:
1 <= key.length <= 10
key consists of lowercase English letters.
It is guaranteed that for each call to dec, key is existing in the data structure.
At most 5 * 104 calls will be made to inc, dec, getMaxKey, and getMinKey.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

设计一个存储字符串计数的数据结构，并能够返回计数最小和最大的字符串。

实现 `AllOne` 类：

- `AllOne()` 初始化数据结构对象。
- `inc(String key)` 将字符串 `key` 的计数加 1。如果 `key` 不存在，则以计数 1 插入。
- `dec(String key)` 将字符串 `key` 的计数减 1。如果减 1 后计数为 0，则将其从数据结构中移除。保证调用 `dec` 前 `key` 已存在于数据结构中。
- `getMaxKey()` 返回计数最大的任意一个 key。如果不存在元素，返回空字符串 `""`。
- `getMinKey()` 返回计数最小的任意一个 key。如果不存在元素，返回空字符串 `""`。

注意：每个函数的平均时间复杂度必须为 O(1)。

## 解题思路

桶 + 双向链表 + 哈希表（经典 O(1) 设计题）：

- **双向链表**按计数升序排列，每个节点（桶）存一个 `count` 和一个具有该计数的 key 集合 `Set`。头尾使用哨兵节点，`head.next` 即最小计数桶，`tail.prev` 即最大计数桶。
- **哈希表** `keyToNode` 记录每个 key 当前所在的桶节点，实现 O(1) 定位。

操作流程：

- `inc(key)`：
  - key 不存在 → 若 `head.next.count === 1` 则加入该桶，否则在 head 后新建计数为 1 的桶；
  - key 存在于计数为 c 的桶 → 从该桶移出，加入 `count === c+1` 的相邻桶（不存在则在当前桶后新建）；原桶空则从链表摘除。
- `dec(key)`：从当前桶移出；若 `c === 1` 直接从哈希表删除 key，否则加入 `count === c-1` 的相邻前驱桶（不存在则新建）；原桶空则摘除。
- `getMaxKey()` / `getMinKey()`：链表为空返回 `""`，否则取 `tail.prev` / `head.next` 桶中任意一个 key。

由于每次 inc/dec 只在相邻计数间移动、桶的创建与摘除均为 O(1)，所有操作平均 O(1)。
