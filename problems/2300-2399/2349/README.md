# [2349] Design a Number Container System

## Description

[LeetCode Problem Description](https://leetcode.com/problems/design-a-number-container-system/description/)

* algorithms
* Medium (57.09%)
* Likes:    967
* Dislikes: 74
* Testcase Example:  '["NumberContainers","find","change","change","change","change","find","change","find"]\n' +

```md
'[[],[10],[2,10],[1,10],[3,10],[5,10],[10],[1,20],[10]]'
Design a number container system that can do the following:

Insert or Replace a number at the given index in the system.
Return the smallest index for the given number in the system.

Implement the NumberContainers class:

NumberContainers() Initializes the number container system.
void change(int index, int number) Fills the container at index with the number. If there is already a number at that index, replace it.
int find(int number) Returns the smallest index for the given number, or -1 if there is no index that is filled by number in the system.


Example 1:

Input
['NumberContainers', 'find', 'change', 'change', 'change', 'change', 'find', 'change', 'find']
[[], [10], [2, 10], [1, 10], [3, 10], [5, 10], [10], [1, 20], [10]]
Output
[null, -1, null, null, null, null, 1, null, 2]
Explanation
NumberContainers nc = new NumberContainers();
nc.find(10); // There is no index that is filled with number 10. Therefore, we return -1.
nc.change(2, 10); // Your container at index 2 will be filled with number 10.
nc.change(1, 10); // Your container at index 1 will be filled with number 10.
nc.change(3, 10); // Your container at index 3 will be filled with number 10.
nc.change(5, 10); // Your container at index 5 will be filled with number 10.
nc.find(10); // Number 10 is at the indices 1, 2, 3, and 5. Since the smallest index that is filled with 10 is 1, we return 1.
nc.change(1, 20); // Your container at index 1 will be filled with number 20. Note that index 1 was filled with 10 and then replaced with 20.
nc.find(10); // Number 10 is at the indices 2, 3, and 5. The smallest index that is filled with 10 is 2. Therefore, we return 2.


Constraints:

1 <= index, number <= 109
At most 105 calls will be made in total to change and find.


```

## 题目翻译

设计一个数字容器系统：
- `change(index, number)`: 在 index 处插入/替换 number
- `find(number)`: 返回该 number 的最小 index，不存在返回 -1

## 解题思路

**哈希表 + 最小堆 + 懒删除**

- `indexToNum`: index → 当前数字
- `numToHeap`: number → 最小堆（存储所有曾被设为该 number 的 index）

change 时：将 index 加入新 number 的堆（不删除旧的，懒处理）。
find 时：弹出堆顶直到 indexToNum[堆顶] === 当前 number，返回堆顶。

时间 O(log n) 每次，空间 O(n)。

## Solution

[SourceCode](./solution.js)
