# [957] Prison Cells After N Days

## Description

[LeetCode Problem Description](https://leetcode.com/problems/prison-cells-after-n-days/description/)

* algorithms
* Medium (39.16%)
* Likes:    1564
* Dislikes: 1781
* Testcase Example:  '[0,1,0,1,1,0,0,1]\n7'

```md
There are 8 prison cells in a row and each cell is either occupied or vacant.
Each day, whether the cell is occupied or vacant changes according to the following rules:

If a cell has two adjacent neighbors that are both occupied or both vacant, then the cell becomes occupied.
Otherwise, it becomes vacant.

Note that because the prison is a row, the first and the last cells in the row can&#39;t have two adjacent neighbors.
You are given an integer array cells where cells[i] == 1 if the ith cell is occupied and cells[i] == 0 if the ith cell is vacant, and you are given an integer n.
Return the state of the prison after n days (i.e., n such changes described above).

Example 1:

Input: cells = [0,1,0,1,1,0,0,1], n = 7
Output: [0,0,1,1,0,0,0,0]
Explanation: The following table summarizes the state of the prison on each day:
Day 0: [0, 1, 0, 1, 1, 0, 0, 1]
Day 1: [0, 1, 1, 0, 0, 0, 0, 0]
Day 2: [0, 0, 0, 0, 1, 1, 1, 0]
Day 3: [0, 1, 1, 0, 0, 1, 0, 0]
Day 4: [0, 0, 0, 0, 0, 1, 0, 0]
Day 5: [0, 1, 1, 1, 0, 1, 0, 0]
Day 6: [0, 0, 1, 0, 1, 1, 0, 0]
Day 7: [0, 0, 1, 1, 0, 0, 0, 0]

Example 2:

Input: cells = [1,0,0,1,0,0,1,0], n = 1000000000
Output: [0,0,1,1,1,1,1,0]


Constraints:

cells.length == 8
cells[i]is either 0 or 1.
1 <= n <= 109


```

## 中文翻译

8 个牢房排成一行，每天按规则变化：首尾必为 0，中间位置若两邻居相同则为 1，否则为 0。给定初始状态和 n，返回 n 天后的状态。n 可达 10^9。

## 解题思路

状态循环节。8 个格子最多 2^8=256 种状态，必然出现循环。用 Map 记录每种状态出现的步数，发现重复后计算周期，直接跳到第 n 天。

时间复杂度：O(周期长度)，空间复杂度：O(周期长度)

## Solution

[SourceCode](./solution.js)
