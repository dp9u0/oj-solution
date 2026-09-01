# [677] Map Sum Pairs

## Description

[LeetCode Problem Description](https://leetcode.com/problems/map-sum-pairs/description/)

* algorithms
* Medium (57.14%)
* Likes:    1733
* Dislikes: 166
* Testcase Example:  '["MapSum","insert","sum","insert","sum"]\n' +

```md
'[[],["apple",3],["ap"],["app",2],["ap"]]'
Design a map that allows you to do the following:

Maps a string key to a given value.
Returns the sum of the values that have a key with a prefix equal to a given string.

Implement the MapSum class:

MapSum() Initializes the MapSum object.
void insert(String key, int val) Inserts the key-val pair into the map. If the key already existed, the original key-value pair will be overridden to the new one.
int sum(string prefix) Returns the sum of all the pairs&#39; value whose key starts with the prefix.


Example 1:

Input
['MapSum', 'insert', 'sum', 'insert', 'sum']
[[], ['apple', 3], ['ap'], ['app', 2], ['ap']]
Output
[null, null, 3, null, 5]
Explanation
MapSum mapSum = new MapSum();
mapSum.insert('apple', 3);
mapSum.sum('ap');           // return 3 (apple = 3)
mapSum.insert('app', 2);
mapSum.sum('ap');           // return 5 (apple + app = 3 + 2 = 5)


Constraints:

1 <= key.length, prefix.length <= 50
key and prefix consist of only lowercase English letters.
1 <= val <= 1000
At most 50 calls will be made to insert and sum.


```

## 中文翻译

设计一个支持前缀求和的 Map 数据结构。要求：
1. `insert(key, val)` — 插入键值对，若 key 已存在则覆盖旧值。
2. `sum(prefix)` — 返回所有以 prefix 为前缀的键的值之和。

## 解题思路

使用 Trie（前缀树）实现。每个 Trie 节点存储经过该节点的所有键的值之和（`prefixSum`）。另外用一个普通 Map 记录每个 key 的当前值，用于处理覆盖（insert 已存在的 key 时需要先减去旧值再加新值）。

- `insert(key, val)`: 若 key 已存在，计算 diff = val - 旧值；否则 diff = val。沿 key 的字符路径走 Trie，每个节点加上 diff。
- `sum(prefix)`: 沿 prefix 的字符路径走 Trie，走完后返回该节点的 `prefixSum`。若中途路径不存在则返回 0。

## Solution

[SourceCode](./solution.js)
