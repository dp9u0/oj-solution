# [749] Contain Virus

## Description

[LeetCode Problem Description](https://leetcode.com/problems/contain-virus/description/)

* algorithms
* Hard (54.67%)
* Likes:    442
* Dislikes: 466
* Testcase Example:  '[[0,1,0,0,0,0,0,1],[0,1,0,0,0,0,0,1],[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0]]'

```md
A virus is spreading rapidly, and your task is to quarantine the infected area by installing walls.
The world is modeled as an m x n binary grid isInfected, where isInfected[i][j] == 0 represents uninfected cells, and isInfected[i][j] == 1 represents cells contaminated with the virus. A wall (and only one wall) can be installed between any two 4-directionally adjacent cells, on the shared boundary.
Every night, the virus spreads to all neighboring cells in all four directions unless blocked by a wall. Resources are limited. Each day, you can install walls around only one region (i.e., the affected area (continuous block of infected cells) that threatens the most uninfected cells the following night). There will never be a tie.
Return the number of walls used to quarantine all the infected regions. If the world will become fully infected, return the number of walls used.

Example 1:


Input: isInfected = [[0,1,0,0,0,0,0,1],[0,1,0,0,0,0,0,1],[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0]]
Output: 10
Explanation: There are 2 contaminated regions.
On the first day, add 5 walls to quarantine the viral region on the left. The board after the virus spreads is:

On the second day, add 5 walls to quarantine the viral region on the right. The virus is fully contained.


Example 2:


Input: isInfected = [[1,1,1],[1,0,1],[1,1,1]]
Output: 4
Explanation: Even though there is only one cell saved, there are 4 walls built.
Notice that walls are only built on the shared boundary of two different cells.

Example 3:

Input: isInfected = [[1,1,1,0,0,0,0,0,0],[1,0,1,0,1,1,1,1,1],[1,1,1,0,0,0,0,0,0]]
Output: 13
Explanation: The region on the left only builds two new walls.


Constraints:

m ==isInfected.length
n ==isInfected[i].length
1 <= m, n <= 50
isInfected[i][j] is either 0 or 1.
There is always a contiguous viral region throughout the described process that will infect strictly more uncontaminated squares in the next round.


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

m×n 二维网格，1 表示感染，0 表示未感染。每天可以选一个感染区域（连通块）建墙隔离，墙建在该区域与非区域格子的共享边上。每晚所有未隔离区域向四邻蔓延。每天选威胁（相邻未感染格子数）最大的区域隔离，返回总墙数。

## 解题思路

模拟。每轮：BFS 找所有值为 1 的连通块；对每个连通块计算威胁的 0 格子数和需要的墙数（与非本区域且非 -1 的相邻边数）；选威胁最大的区域隔离（标 -1 并累加墙数）；其余区域向相邻 0 格子蔓延。重复直到无新威胁。
