# [381] Insert Delete GetRandom O(1) - Duplicates allowed

## Description

[LeetCode Problem Description](https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/description/)

* algorithms
* Hard (36.50%)
* Testcase Example:  '["RandomizedCollection","insert","insert","insert","getRandom","remove","getRandom"]\n' +

```md
'[[],[1],[1],[2],[],[1],[]]'
RandomizedCollection is a data structure that contains a collection of numbers, possibly duplicates (i.e., a multiset). It should support inserting and removing specific elements and also reporting a random element.
Implement the RandomizedCollection class:
RandomizedCollection() Initializes the empty RandomizedCollection object.
bool insert(int val) Inserts an item val into the multiset, even if the item is already present. Returns true if the item is not present, false otherwise.
bool remove(int val) Removes an item val from the multiset if present. Returns true if the item is present, false otherwise. Note that if val has multiple occurrences in the multiset, we only remove one of them.
int getRandom() Returns a random element from the current multiset of elements. The probability of each element being returned is linearly related to the number of the same values the multiset contains.
You must implement the functions of the class such that each function works on average O(1) time complexity.
Note: The test cases are generated such that getRandom will only be called if there is at least one item in the RandomizedCollection.

Example 1:
Input
["RandomizedCollection", "insert", "insert", "insert", "getRandom", "remove", "getRandom"]
[[], [1], [1], [2], [], [1], []]
Output
[null, true, false, true, 2, true, 1]
Explanation
RandomizedCollection randomizedCollection = new RandomizedCollection();
randomizedCollection.insert(1);   // return true since the collection does not contain 1.
// Inserts 1 into the collection.
randomizedCollection.insert(1);   // return false since the collection contains 1.
// Inserts another 1 into the collection. Collection now contains [1,1].
randomizedCollection.insert(2);   // return true since the collection does not contain 2.
// Inserts 2 into the collection. Collection now contains [1,1,2].
randomizedCollection.getRandom(); // getRandom should:
// - return 1 with probability 2/3, or
// - return 2 with probability 1/3.
randomizedCollection.remove(1);   // return true since the collection contains 1.
// Removes 1 from the collection. Collection now contains [1,2].
randomizedCollection.getRandom(); // getRandom should return 1 or 2, both equally likely.

Constraints:
-2^31
At most 2 * 10^5 calls in total will be made to insert, remove, and getRandom.
There will be at least one element in the data structure when getRandom is called.

```

## Solution

[SourceCode](./solution.js)

### 题目描述 (翻译)
`RandomizedCollection` 是一种包含数字集合的数据结构，可能包含重复项（即多重集）。它应该支持插入和删除特定元素，并返回随机元素。
实现 `RandomizedCollection` 类：
- `RandomizedCollection()` 初始化空的 `RandomizedCollection` 对象。
- `bool insert(int val)` 将项 `val` 插入多重集中，即使该项已经存在。如果该项不存在返回 `true`，否则返回 `false`。
- `bool remove(int val)` 如果存在的话，从多重集中移除项 `val`。如果该项存在返回 `true`，否则返回 `false`。注意，如果 `val` 在多重集中有多个匹配项，我们只移除其中的一个。
- `int getRandom()` 从当前元素的多重集中返回一个随机元素。每个元素返回的概率与其在多重集中的数量线性相关。
你必须实现类的函数，使得每个函数的平均时间复杂度为 `O(1)`。
注意：测试用例的生成方式是只有在 `RandomizedCollection` 中至少有一项时才会调用 `getRandom`。

### 解题思路 (Approach)
这道题是 380 题的进阶版。主要的区别是集合中可能包含重复元素，而 `getRandom` 的随机返回概率与元素数量成正比，即如果 `val` 有两个，那么它被选中的概率就是单个元素被选中的两倍。
为了保持概率线性相关并且能 `O(1)` 地随机返回，我们仍然需要一个数组 `list`。
对于相同的元素，由于可能存在多个，并且我们需要在 `remove` 的时候能够 `O(1)` 找到其中一个位置，我们需要用一个哈希表，但是哈希表的值不能是单一索引，而应该是一个集合 (Set) 来保存这个值所有出现的索引。
具体操作：
- **`insert(val)`**：
  检查 `val` 是否存在并且其索引集合是否为空。如果不存在或集合为空则返回 `true`，否则返回 `false`。
  然后把 `val` 放入数组末尾，并把新索引（`list.length - 1`）加入 `map.get(val)` 的集合中。
  
- **`remove(val)`**：
  如果 `val` 不在 `map` 中或者其索引集合为空，返回 `false`。
  如果有：
  1. 从 `map.get(val)` 的集合中获取并移除任意一个索引 `idx` (例如通过迭代器取第一个元素)。
  2. 获取 `list` 的最后一个元素 `lastVal`，以及它的索引 `lastIdx = list.length - 1`。
  3. 将 `list[idx] = lastVal`。
  4. 如果 `idx !== lastIdx`，则在 `map.get(lastVal)` 对应的集合中移除旧索引 `lastIdx`，并加入新索引 `idx`。
  5. 从 `list` 中弹出最后一个元素。

- **`getRandom()`**：
  和上一题一样，随机生成 `[0, list.length - 1]` 范围内的随机数，返回 `list[randomIndex]`。
