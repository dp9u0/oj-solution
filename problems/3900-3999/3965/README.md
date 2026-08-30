# [3965] Finish Time of Tasks I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/finish-time-of-tasks-i/description/)

* algorithms
* Medium (61.89%)
* Likes:    51
* Dislikes: 3
* Testcase Example:  '3\n[[0,1],[1,2]]\n[9,5,3]'

```md
You are given an integer n representing the number of tasks in a project, numbered from 0 to n - 1. These tasks are connected as a tree rooted at task 0. This is represented by a 2D integer array edges of length n - 1, where edges[i] = [ui, vi] indicates that task ui is the parent of task vi.
You are also given an array baseTime of length n, where baseTime[i] represents the time to complete task i.
The finish time of each task is calculated as follows:
Leaf task: The finish time is baseTime[i].
Non-leaf task:

Let earliest be the minimum finish time among its children, and latest be the maximum finish time among its children.
Let ownDuration be (latest - earliest) + baseTime[i].
The finish time of task i is latest + ownDuration.


Return the finish time of the root task 0.

Example 1:
Input: n = 3, edges = [[0,1],[1,2]], baseTime = [9,5,3]
Output: 17
Explanation:
0 9  1 5  2 3
Task 2 is a leaf, so its finish time is baseTime[2] = 3.
Task 1 has one child task 2:

earliest = latest = 3
ownDuration = (latest - earliest) + baseTime[1] = 5
Finish time of task 1 is 3 + 5 = 8


Task 0 has one child with finish time 8:

earliest = latest = 8
ownDuration = (latest - earliest) + baseTime[0] = 9
Finish time of task 0 is 8 + 9 = 17


Example 2:
Input: n = 3, edges = [[0,1],[0,2]], baseTime = [4,7,6]
Output: 12
Explanation:
0 4  1 7  2 6
Task 1 is a leaf, so its finish time is baseTime[1] = 7.
Task 2 is a leaf, so its finish time is baseTime[2] = 6.
Task 0 has two children with finish times 7 and 6:

earliest = 6, latest = 7
ownDuration = (latest - earliest) + baseTime[0] = (7 - 6) + 4 = 5
Finish time of task 0 is latest + ownDuration = 7 + 5 = 12


Example 3:
Input: n = 4, edges = [[0,1],[0,2],[2,3]], baseTime = [5,8,2,1]
Output: 18
Explanation:
Task 1 is a leaf, so its finish time is baseTime[1] = 8.
Task 3 is a leaf, so its finish time is baseTime[3] = 1.
Task 2 has one child task 3:

earliest = latest = 1
ownDuration = (latest - earliest) + baseTime[2] = 0 + 2 = 2
Finish time of task 2 is latest + ownDuration = 1 + 2 = 3


Task 0 has two children with finish times 8 and 3:

earliest = 3, latest = 8
ownDuration = (latest - earliest) + baseTime[0] = (8 - 3) + 5 = 10
Finish time of task 0 is latest + ownDuration = 8 + 10 = 18



Constraints:
1 <= n <= 105
edges.length = n - 1
edges[i] == [ui, vi]
0 <= ui, vi <= n - 1
ui != vi
The input is generated such that edges represents a valid tree.
baseTime.length == n
1 <= baseTime[i] <= 105​​​​​​​
The finish time of every task is guaranteed to be less than 253.
Hint 1: Build the children list from edges, since the tree is rooted and each edge already points from parent to child.
Hint 2: Compute finish times using a postorder DFS, so all children of a task are processed before the task itself.
Hint 3: For each non-leaf task, keep only the minimum and maximum finish times among its children.

```

## Solution

[SourceCode](./solution.js)

## 中文翻译

给你一个整数 `n`，表示项目中的任务数量，任务编号从 `0` 到 `n - 1`。这些任务连接成一棵以任务 `0` 为根的树，由长度为 `n - 1` 的二维整数数组 `edges` 表示，其中 `edges[i] = [ui, vi]` 表示任务 `ui` 是任务 `vi` 的父节点。

另给你一个长度为 `n` 的数组 `baseTime`，其中 `baseTime[i]` 表示完成任务 `i` 所需的时间。

每个任务的完成时间计算方式如下：

- **叶子任务**：完成时间为 `baseTime[i]`。
- **非叶子任务**：
  - 设 `earliest` 为其所有子任务完成时间的最小值，`latest` 为最大值。
  - 设 `ownDuration = (latest - earliest) + baseTime[i]`。
  - 任务 `i` 的完成时间为 `latest + ownDuration`。

返回根任务 `0` 的完成时间。

**示例 1**：`n = 3, edges = [[0,1],[1,2]], baseTime = [9,5,3]` → 输出 `17`（链式：叶子 2 完成于 3，任务 1 完成于 8，任务 0 完成于 17）

**示例 2**：`n = 3, edges = [[0,1],[0,2]], baseTime = [4,7,6]` → 输出 `12`（earliest=6, latest=7, ownDuration=5, 7+5=12）

**示例 3**：`n = 4, edges = [[0,1],[0,2],[2,3]], baseTime = [5,8,2,1]` → 输出 `18`

**约束**：`1 <= n <= 10^5`，输入保证 `edges` 构成一棵合法的树，`1 <= baseTime[i] <= 10^5`，每个任务的完成时间保证小于 `2^53`。

## 解题思路

树形自底向上（后序）计算。由于 `n` 最大 `10^5` 且树可能退化成链，递归 DFS 有栈溢出风险，改用**叶向根的拓扑排序（Kahn）**迭代实现：

1. 扫描 `edges`（边天然从父指向子），统计每个节点的子节点数 `childCount[u]`，同时记录 `parent[v]`。
2. 所有 `childCount === 0` 的叶子节点完成时间即 `baseTime[i]`，入队。
3. 逐个出队：把该节点完成时间上报给父节点，维护父节点已知的子节点完成时间最小值 `earliest` 与最大值 `latest`；当父节点收齐所有子节点（`--childCount === 0`）时，其完成时间 = `latest + (latest - earliest) + baseTime[p]`，即 `2 * latest - earliest + baseTime[p]`，入队。
4. 最终返回 `finish[0]`。

时间复杂度 `O(n)`，空间复杂度 `O(n)`。
