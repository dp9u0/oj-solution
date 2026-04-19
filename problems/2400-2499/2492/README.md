# [2492] Minimum Score of a Path Between Two Cities

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/description/)

* algorithms
* Medium (58.71%)
* Likes:    1912
* Dislikes: 322
* Testcase Example:  '4\n[[1,2,9],[2,3,6],[2,4,5],[1,4,7]]'

```md
You are given a positive integer n representing n cities numbered from 1 to n. You are also given a 2D array roads where roads[i] = [ai, bi, distancei] indicates that there is a bidirectional road between cities ai and bi with a distance equal to distancei. The cities graph is not necessarily connected.
The score of a path between two cities is defined as the minimum distance of a road in this path.
Return the minimum possible score of a path between cities 1 and n.
Note:

A path is a sequence of roads between two cities.
It is allowed for a path to contain the same road multiple times, and you can visit cities 1 and n multiple times along the path.
The test cases are generated such that there is at least one path between 1 and n.


Example 1:


Input: n = 4, roads = [[1,2,9],[2,3,6],[2,4,5],[1,4,7]]
Output: 5
Explanation: The path from city 1 to 4 with the minimum score is: 1 -> 2 -> 4. The score of this path is min(9,5) = 5.
It can be shown that no other path has less score.

Example 2:


Input: n = 4, roads = [[1,2,2],[1,3,4],[3,4,7]]
Output: 2
Explanation: The path from city 1 to 4 with the minimum score is: 1 -> 2 -> 1 -> 3 -> 4. The score of this path is min(2,2,4,7) = 2.


Constraints:

2 <= n <= 105
1 <= roads.length <= 105
roads[i].length == 3
1 <= ai, bi <= n
ai != bi
1 <= distancei <= 104
There are no repeated edges.
There is at least one path between 1 and n.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定 n 个城市和双向道路 roads[i] = [ai, bi, distancei]。路径的分数为路径上最短边的距离。路径可以重复走边，可以重复访问城市。返回城市 1 到城市 n 的路径的最小可能分数。

## 解题思路

因为路径可以重复走边，所以城市1到n的路径可以经过城市1所在连通分量中的任意边。答案就是城市1所在连通分量中所有边的最小权值。用 BFS/DFS 从城市1遍历连通分量，记录最小边权即可。O(n+m)。
