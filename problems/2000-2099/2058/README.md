# [2058] Find the Minimum and Maximum Number of Nodes Between Critical Points

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/description/)

* algorithms
* Medium (69.43%)
* Likes:    1521
* Dislikes: 79
* Testcase Example:  '[3,1]'

```md
A critical point in a linked list is defined as either a local maxima or a local minima.
A node is a local maxima if the current node has a value strictly greater than the previous node and the next node.
A node is a local minima if the current node has a value strictly smaller than the previous node and the next node.
Note that a node can only be a local maxima/minima if there exists both a previous node and a next node.
Given a linked list head, return an array of length 2 containing [minDistance, maxDistance] where minDistance is the minimum distance between any two distinct critical points and maxDistance is the maximum distance between any two distinct critical points. If there are fewer than two critical points, return [-1, -1].

Example 1:
Input: head = [3,1]
Output: [-1,-1]
Explanation: There are no critical points in [3,1].
Example 2:
Input: head = [5,3,1,2,5,1,2]
Output: [1,3]
Explanation: There are three critical points:
- [5,3,1,2,5,1,2]: The third node is a local minima because 1 is less than 3 and 2.
- [5,3,1,2,5,1,2]: The fifth node is a local maxima because 5 is greater than 2 and 1.
- [5,3,1,2,5,1,2]: The sixth node is a local minima because 1 is less than 5 and 2.
The minimum distance is between the fifth and the sixth node. minDistance = 6 - 5 = 1.
The maximum distance is between the third and the sixth node. maxDistance = 6 - 3 = 3.
Example 3:
Input: head = [1,3,2,2,3,2,2,2,7]
Output: [3,3]
Explanation: There are two critical points:
- [1,3,2,2,3,2,2,2,7]: The second node is a local maxima because 3 is greater than 1 and 2.
- [1,3,2,2,3,2,2,2,7]: The fifth node is a local maxima because 3 is greater than 2 and 2.
Both the minimum and maximum distances are between the second and the fifth node.
Thus, minDistance and maxDistance is 5 - 2 = 3.
Note that the last node is not considered a local maxima because it does not have a next node.

Constraints:
The number of nodes in the list is in the range [2, 105].
1 <= Node.val <= 105
Hint 1: The maximum distance must be the distance between the first and last critical point.
Hint 2: For each adjacent critical point, calculate the difference and check if it is the minimum distance.

```

## Solution

[SourceCode](./solution.js)

---

## 题目翻译（中文）

链表中的一个**临界点（critical point）**定义为局部最大值或局部最小值。

- 一个节点是**局部最大值**，当且仅当它的值严格大于前一个节点和后一个节点的值。
- 一个节点是**局部最小值**，当且仅当它的值严格小于前一个节点和后一个节点的值。
- 注意：只有同时存在前一个节点和后一个节点时，该节点才可能是局部最大/最小值（即首尾节点永远不可能是临界点）。

给定链表头节点 `head`，返回一个长度为 2 的数组 `[minDistance, maxDistance]`：
- `minDistance` 是任意两个**不同的**临界点之间的最小距离；
- `maxDistance` 是任意两个**不同的**临界点之间的最大距离。

如果临界点少于两个，返回 `[-1, -1]`。

**示例 1：**
输入：`head = [3,1]`
输出：`[-1,-1]`
解释：`[3,1]` 中没有临界点。

**示例 2：**
输入：`head = [5,3,1,2,5,1,2]`
输出：`[1,3]`
解释：共有 3 个临界点：第 3 个节点（局部最小值 1）、第 5 个节点（局部最大值 5）、第 6 个节点（局部最小值 1）。
最小距离在第 5 和第 6 个节点之间：`6 - 5 = 1`。
最大距离在第 3 和第 6 个节点之间：`6 - 3 = 3`。

**示例 3：**
输入：`head = [1,3,2,2,3,2,2,2,7]`
输出：`[3,3]`
解释：共有 2 个临界点：第 2 个节点（局部最大值 3）、第 5 个节点（局部最大值 3）。
最小和最大距离都在第 2 和第 5 个节点之间：`5 - 2 = 3`。

**约束：**
- 节点数量范围：`[2, 105]`
- `1 <= Node.val <= 105`

**提示：**
1. 最大距离一定是第一个和最后一个临界点之间的距离。
2. 对每一对相邻临界点计算差值，并检查是否是最小距离。

---

## 解题思路

**方法：单次遍历（一次线性扫描）**

- 从第三个节点开始，依次判断每个节点是否为临界点（局部最大/最小），即当前节点值同时大于（或小于）其前后相邻节点的值。
- 用一个变量 `firstPos` 记录**第一个临界点**的位置（索引从 1 开始计数），用 `lastPos` 记录**上一个临界点**的位置，用 `minGap` 维护相邻临界点之间的最小距离，用 `maxGap` 维护最大距离。
- 当遇到新的临界点 `i` 时：
  - 若这是第一个临界点，记录 `firstPos = i`；
  - 否则，计算与上一个临界点的距离 `i - lastPos`，更新 `minGap` 与 `maxGap`；并将当前 `i` 作为 `lastPos`。
- 最大距离一定等于 `lastPos - firstPos`（最后一个与第一个临界点的距离），可以在遍历结束后直接计算。
- 若临界点少于两个，返回 `[-1, -1]`。

**时间复杂度：** O(n)，只需一次遍历。**空间复杂度：** O(1)。
