# [407] Trapping Rain Water II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/trapping-rain-water-ii/description/)

* algorithms
* Hard (64.05%)
* Likes:    5007
* Dislikes: 172
* Testcase Example:  '[[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]'

```md
Given an m x n integer matrix heightMap representing the height of each unit cell in a 2D elevation map, return the volume of water it can trap after raining.

Example 1:


Input: heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]
Output: 4
Explanation: After the rain, water is trapped between the blocks.
We have two small ponds 1 and 3 units trapped.
The total volume of water trapped is 4.

Example 2:


Input: heightMap = [[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]
Output: 10


Constraints:

m == heightMap.length
n == heightMap[i].length
1 <= m, n <= 200
0 <= heightMap[i][j] <= 2 * 104


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个 m x n 的整数矩阵 heightMap 表示二维海拔图，返回下雨后能接住的雨水量。

## 解题思路

**最小堆（优先队列）+ BFS**

从外边界开始，用最小堆维护当前"水位线"。核心思想：木桶效应——水位由最低的边界决定。

1. 将所有边界格子加入最小堆，标记已访问
2. 每次从堆中弹出高度最小的格子，作为当前水位线
3. 检查其四个邻居：如果邻居高度低于水位线，则可以接水（水量 = 水位线 - 邻居高度），然后水位线提升到 max(水位线, 邻居高度)；否则邻居自身就是新的边界
4. 将邻居加入堆，继续直到堆为空

时间复杂度 O(mn log(mn))，空间复杂度 O(mn)。
