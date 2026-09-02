# [LCR 107] 01 矩阵

## Description


```md
https://leetcode.cn/problems/2bCMpM/description/
* algorithms
* Medium (50.03%)
* Likes:    69
* Dislikes: -
* Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
给定一个由 0 和 1 组成的矩阵 mat ，请输出一个大小相同的矩阵，其中每一个格子是 mat 中对应位置元素到最近的 0 的距离。
两个相邻元素间的距离为 1。

示例 1：
输入：mat = [[0,0,0],[0,1,0],[0,0,0]]
输出：[[0,0,0],[0,1,0],[0,0,0]]
示例 2：
输入：mat = [[0,0,0],[0,1,0],[1,1,1]]
输出：[[0,0,0],[0,1,0],[1,2,1]]

提示：
m == mat.length
n == mat[i].length
1 <= m, n <= 104
1 <= m * n <= 104
mat[i][j] is either 0 or 1.
mat 中至少有一个 0

注意：本题与主站 542 题相同：https://leetcode.cn/problems/01-matrix/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given an `m×n` matrix of `0`/`1`, return a matrix where each cell holds the distance to the **nearest 0**.

**Example:** `[[0,0,0],[0,1,0],[1,1,1]]` → `[[0,0,0],[0,1,0],[1,2,1]]`

**Constraints:** up to 10^4 cells, at least one 0. Note: same as LeetCode 542.

---

## Approach

**Multi-source BFS** from all `0` cells (distance 0). Expand to 4 neighbors setting distance = current+1. Cells not reached stay as-is (all reachable since at least one 0).

Complexity: `O(m·n)`.
