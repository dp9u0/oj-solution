# [3665] Twisted Mirror Path Count

## Description

[LeetCode Problem Description](https://leetcode.com/problems/twisted-mirror-path-count/description/)

* algorithms
* Medium (48.18%)
* Likes:    85
* Dislikes: 5
* Testcase Example:  '[[0,1,0],[0,0,1],[1,0,0]]'

```md
Given an m x n binary grid grid where:

grid[i][j] == 0 represents an empty cell, and
grid[i][j] == 1 represents a mirror.

A robot starts at the top-left corner of the grid (0, 0) and wants to reach the bottom-right corner (m - 1, n - 1). It can move only right or down. If the robot attempts to move into a mirror cell, it is reflected before entering that cell:

If it tries to move right into a mirror, it is turned down and moved into the cell directly below the mirror.
If it tries to move down into a mirror, it is turned right and moved into the cell directly to the right of the mirror.

If this reflection would cause the robot to move outside the grid boundaries, the path is considered invalid and should not be counted.
Return the number of unique valid paths from (0, 0) to (m - 1, n - 1).
Since the answer may be very large, return it modulo 109 + 7.
Note: If a reflection moves the robot into a mirror cell, the robot is immediately reflected again based on the direction it used to enter that mirror: if it entered while moving right, it will be turned down; if it entered while moving down, it will be turned right. This process will continue until either the last cell is reached, the robot moves out of bounds or the robot moves to a non-mirror cell.

Example 1:

Input: grid = [[0,1,0],[0,0,1],[1,0,0]]
Output: 5
Explanation:



Number
Full Path




1
(0, 0) &rarr; (0, 1) [M] &rarr; (1, 1) &rarr; (1, 2) [M] &rarr; (2, 2)


2
(0, 0) &rarr; (0, 1) [M] &rarr; (1, 1) &rarr; (2, 1) &rarr; (2, 2)


3
(0, 0) &rarr; (1, 0) &rarr; (1, 1) &rarr; (1, 2) [M] &rarr; (2, 2)


4
(0, 0) &rarr; (1, 0) &rarr; (1, 1) &rarr; (2, 1) &rarr; (2, 2)


5
(0, 0) &rarr; (1, 0) &rarr; (2, 0) [M] &rarr; (2, 1) &rarr; (2, 2)





[M] indicates the robot attempted to enter a mirror cell and instead reflected.



Example 2:

Input: grid = [[0,0],[0,0]]
Output: 2
Explanation:



Number
Full Path




1
(0, 0) &rarr; (0, 1) &rarr; (1, 1)


2
(0, 0) &rarr; (1, 0) &rarr; (1, 1)




Example 3:

Input: grid = [[0,1,1],[1,1,0]]
Output: 1
Explanation:



Number
Full Path




1
(0, 0) &rarr; (0, 1) [M] &rarr; (1, 1) [M] &rarr; (1, 2)



(0, 0) &rarr; (1, 0) [M] &rarr; (1, 1) [M] &rarr; (2, 1) goes out of bounds, so it is invalid.

Constraints:

m == grid.length
n == grid[i].length
2 <= m, n <= 500
grid[i][j] is either 0 or 1.
grid[0][0] == grid[m - 1][n - 1] == 0


```

## 翻译

给定 m×n 二值网格，0=空格，1=镜子。机器人从(0,0)到(m-1,n-1)，只能右移或下移。碰镜子时：右移碰镜→向下反射，下移碰镜→向右反射。链式反射直到到达空格、出界或到达终点。求有效路径数，模 10^9+7。

## 解题思路

**关键转化**：镜像反射可视为"跳转"——从(i,j)尝试进入(i,j+1)或(i+1,j)，经过镜链后实际落点可能跳过多个格子。

**算法**：
1. `resolve(i,j,d)` 递归+记忆化：追踪镜链，返回最终落点。
2. DP 按对角线 (i+j) 顺序处理，每个非镜格子向右/向下移动，解析实际落点并累加路径数。
3. 镜链沿对角线前进，i+j 严格递增，不会回环。

时间复杂度：O(m×n)，空间 O(m×n)。

## Solution

[SourceCode](./solution.js)
