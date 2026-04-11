# [886] Possible Bipartition

## Description

[LeetCode Problem Description](https://leetcode.com/problems/possible-bipartition/description/)

* algorithms
* Medium (52.52%)
* Likes:    4917
* Dislikes: 120
* Testcase Example:  '4\n[[1,2],[1,3],[2,4]]'

```md
We want to split a group of n people (labeled from 1 to n) into two groups of any size. Each person may dislike some other people, and they should not go into the same group.
Given the integer n and the array dislikes where dislikes[i] = [ai, bi] indicates that the person labeled ai does not like the person labeled bi, return true if it is possible to split everyone into two groups in this way.

Example 1:

Input: n = 4, dislikes = [[1,2],[1,3],[2,4]]
Output: true
Explanation: The first group has [1,4], and the second group has [2,3].

Example 2:

Input: n = 3, dislikes = [[1,2],[1,3],[2,3]]
Output: false
Explanation: We need at least 3 groups to divide them. We cannot put them in two groups.


Constraints:

1 <= n <= 2000
0 <= dislikes.length <= 104
dislikes[i].length == 2
1 <= ai < bi <= n
All the pairs of dislikes are unique.


```

## 题目翻译

将 n 个人（编号 1 到 n）分成两组。给定 dislikes 数组，dislikes[i] = [ai, bi] 表示 ai 不喜欢 bi，他们不能在同一组。判断是否能将所有人分成两组。

**示例 1：**
输入：n = 4, dislikes = [[1,2],[1,3],[2,4]]
输出：true（第一组 [1,4]，第二组 [2,3]）

**示例 2：**
输入：n = 3, dislikes = [[1,2],[1,3],[2,3]]
输出：false

**约束：**
- 1 <= n <= 2000
- 0 <= dislikes.length <= 10^4

## 解题思路 (Approach)

经典的二分图判定问题。将每个人看作图中的节点，dislikes 关系看作边，问题转化为判断该图是否为二分图。使用 BFS 染色法：将每个人染成颜色 0 或 1，相邻节点（互相不喜欢的人）必须不同颜色。如果染色过程中发现冲突，则返回 false。

时间复杂度：O(n + m)，空间复杂度：O(n + m)。

## Solution

[SourceCode](./solution.js)
