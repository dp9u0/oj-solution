# [3861] Minimum Capacity Box

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-capacity-box/description/)

* algorithms
* Easy (72.47%)
* Testcase Example:  '[1,5,3,7]\n3'

```md
You are given an integer array capacity, where capacity[i] represents the capacity of the i^th box, and an integer itemSize representing the size of an item.
The i^th box can store the item if capacity[i] >= itemSize.
Return an integer denoting the index of the box with the minimum capacity that can store the item. If multiple such boxes exist, return the smallest index.
If no box can store the item, return -1.

Example 1:
Input: capacity = [1,5,3,7], itemSize = 3
Output: 2
Explanation:
The box at index 2 has a capacity of 3, which is the minimum capacity that can store the item. Thus, the answer is 2.
Example 2:
Input: capacity = [3,5,4,3], itemSize = 2
Output: 0
Explanation:
The minimum capacity that can store the item is 3, and it appears at indices 0 and 3. Thus, the answer is 0.
Example 3:
Input: capacity = [4], itemSize = 5
Output: -1
Explanation:
No box has enough capacity to store the item, so the answer is -1.

Constraints:
1
1
1

```

## Solution

[SourceCode](./solution.js)

---

## 题目翻译

给定一个整数数组 capacity，其中 capacity[i] 表示第 i 个盒子的容量，和一个整数 itemSize 表示物品的大小。

第 i 个盒子可以存储物品当且仅当 capacity[i] >= itemSize。

返回能存储物品的最小容量的盒子的索引。如果有多个这样的盒子，返回最小的索引。
如果没有盒子能存储物品，返回 -1。

**示例 1：**
- 输入：capacity = [1,5,3,7], itemSize = 3
- 输出：2
- 解释：容量 >= 3 的盒子有索引 1(容量5)、2(容量3)、3(容量7)，最小容量是3，对应索引2

**示例 2：**
- 输入：capacity = [3,5,4,3], itemSize = 2
- 输出：0
- 解释：最小可存储容量是3，出现在索引0和3，返回最小索引0

**示例 3：**
- 输入：capacity = [4], itemSize = 5
- 输出：-1
- 解释：没有盒子容量足够

## Approach (解题思路)

**一次遍历**

遍历数组，维护两个变量：
- `minCap`: 能存储物品的最小容量
- `minIdx`: 对应的最小索引

对于每个盒子：
- 如果 capacity[i] >= itemSize 且 capacity[i] < minCap，更新 minCap 和 minIdx
- 如果 capacity[i] >= itemSize 且 capacity[i] == minCap 且 i < minIdx，更新 minIdx

**时间复杂度：** O(n)
**空间复杂度：** O(1)
