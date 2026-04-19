# [2959] Number of Possible Sets of Closing Branches

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-possible-sets-of-closing-branches/description/)

* algorithms
* Hard (50.78%)
* Likes:    205
* Dislikes: 17
* Testcase Example:  '3\n5\n[[0,1,2],[1,2,10],[0,2,10]]'

```md
There is a company with n branches across the country, some of which are connected by roads. Initially, all branches are reachable from each other by traveling some roads.
The company has realized that they are spending an excessive amount of time traveling between their branches. As a result, they have decided to close down some of these branches (possibly none). However, they want to ensure that the remaining branches have a distance of at most maxDistance from each other.
The distance between two branches is the minimum total traveled length needed to reach one branch from another.
You are given integers n, maxDistance, and a 0-indexed 2D array roads, where roads[i] = [ui, vi, wi] represents the undirected road between branches ui and vi with length wi.
Return the number of possible sets of closing branches, so that any branch has a distance of at most maxDistance from any other.
Note that, after closing a branch, the company will no longer have access to any roads connected to it.
Note that, multiple roads are allowed.

Example 1:


Input: n = 3, maxDistance = 5, roads = [[0,1,2],[1,2,10],[0,2,10]]
Output: 5
Explanation: The possible sets of closing branches are:
- The set [2], after closing, active branches are [0,1] and they are reachable to each other within distance 2.
- The set [0,1], after closing, the active branch is [2].
- The set [1,2], after closing, the active branch is [0].
- The set [0,2], after closing, the active branch is [1].
- The set [0,1,2], after closing, there are no active branches.
It can be proven, that there are only 5 possible sets of closing branches.

Example 2:


Input: n = 3, maxDistance = 5, roads = [[0,1,20],[0,1,10],[1,2,2],[0,2,2]]
Output: 7
Explanation: The possible sets of closing branches are:
- The set [], after closing, active branches are [0,1,2] and they are reachable to each other within distance 4.
- The set [0], after closing, active branches are [1,2] and they are reachable to each other within distance 2.
- The set [1], after closing, active branches are [0,2] and they are reachable to each other within distance 2.
- The set [0,1], after closing, the active branch is [2].
- The set [1,2], after closing, the active branch is [0].
- The set [0,2], after closing, the active branch is [1].
- The set [0,1,2], after closing, there are no active branches.
It can be proven, that there are only 7 possible sets of closing branches.

Example 3:

Input: n = 1, maxDistance = 10, roads = []
Output: 2
Explanation: The possible sets of closing branches are:
- The set [], after closing, the active branch is [0].
- The set [0], after closing, there are no active branches.
It can be proven, that there are only 2 possible sets of closing branches.


Constraints:

1 <= n <= 10
1 <= maxDistance <= 105
0 <= roads.length <= 1000
roads[i].length == 3
0 <= ui, vi <= n - 1
ui != vi
1 <= wi <= 1000
All branches are reachable from each other by traveling some roads.


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定 n 个分支点和道路信息，可以关闭任意分支（关闭后相关道路不可用）。求关闭方案数，使得剩余分支之间任意两点的最短距离都不超过 maxDistance。

## 解题思路

枚举子集 + Floyd-Warshall。n ≤ 10，枚举所有 2^n 个活跃分支子集。对每个子集，只保留两端都在子集中的道路，用 Floyd-Warshall 求全源最短路，检查所有对是否 ≤ maxDistance。
