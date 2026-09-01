# [380] Insert Delete GetRandom O(1)

## Description

[LeetCode Problem Description](https://leetcode.com/problems/insert-delete-getrandom-o1/description/)

* algorithms
* Medium (55.33%)
* Testcase Example:  '["RandomizedSet","insert","remove","insert","getRandom","remove","insert","getRandom"]\n' +

```md
'[[],[1],[2],[2],[],[1],[2],[]]'
Implement the RandomizedSet class:
RandomizedSet() Initializes the RandomizedSet object.
bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
You must implement the functions of the class such that each function works in average O(1) time complexity.

Example 1:
Input
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
Output
[null, true, false, true, 2, true, false, 2]
Explanation
RandomizedSet randomizedSet = new RandomizedSet();
randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
randomizedSet.insert(2); // 2 was already in the set, so return false.
randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.

Constraints:
-2^31
At most 2 * 10^5 calls will be made to insert, remove, and getRandom.
There will be at least one element in the data structure when getRandom is called.

```

## Solution

[SourceCode](./solution.js)

### 题目描述 (翻译)
实现 `RandomizedSet` 类：
- `RandomizedSet()` 初始化 `RandomizedSet` 对象。
- `bool insert(int val)` 当元素 `val` 不存在时，向集合中插入该项。如果项不存在则返回 true，否则返回 false。
- `bool remove(int val)` 当元素 `val` 存在时，从集合中移除该项。如果项存在则返回 true，否则返回 false。
- `int getRandom()` 随机返回现有集合中的一项（保证在调用此方法时集合中至少存在一个元素）。每个元素必须有相同的概率被返回。

你必须实现类的函数，使得每个函数的**平均时间复杂度为 O(1)**。

示例 1:
输入
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
输出
[null, true, false, true, 2, true, false, 2]

约束:
-2^31 <= val <= 2^31 - 1
最多调用 2 * 10^5 次 `insert`, `remove`, 和 `getRandom`。
调用 `getRandom` 时数据结构中至少有一个元素。

### 解题思路 (Approach)
要实现 O(1) 的插入和删除，我们首先想到哈希表（Map/Set）。
但是，要实现 O(1) 的 `getRandom` 且每个元素概率相同，我们必须能在 O(1) 时间内获取一个随机元素。哈希表做不到这一点，因为它里面的元素在内存中是不连续的（或者说无法通过 O(1) 的索引来访问）。
能做到 O(1) 随机访问的数据结构是数组 (Array)。

所以，我们可以将哈希表和数组结合起来：
1. **数组 `list`**：用来存储所有的元素。我们可以通过 `Math.random()` 生成一个随机索引来 O(1) 地获取一个元素。
2. **哈希表 `map`**：用来存储 `val -> 数组中的索引` 的映射。这让我们能 O(1) 地判断元素是否存在，以及 O(1) 地找到元素在数组中的位置。

具体操作：
- **`insert(val)`**：
  如果 `val` 已经在 `map` 中，返回 `false`。
  否则，把 `val` 添加到 `list` 的末尾，并把它的索引（`list.length - 1`）记录在 `map` 中，返回 `true`。
  
- **`remove(val)`**：
  如果 `val` 不在 `map` 中，返回 `false`。
  如果在，由于数组中间元素的删除是 O(N) 的，我们可以巧妙地：
  1. 从 `map` 中找到 `val` 在 `list` 中的索引 `idx`。
  2. 获取 `list` 的最后一个元素 `lastVal`。
  3. 用 `lastVal` 覆盖 `idx` 位置的元素：`list[idx] = lastVal`。
  4. 更新 `map` 中 `lastVal` 的索引为 `idx`。
  5. 从 `list` 中弹出最后一个元素（现在是冗余的），并从 `map` 中删除 `val`。
  这样删除操作也是 O(1) 的。

- **`getRandom()`**：
  生成一个 `0` 到 `list.length - 1` 之间的随机数，返回 `list[randomIndex]`。
