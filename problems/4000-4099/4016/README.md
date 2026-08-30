# [4016] Maximum Area of Two Non-Overlapping Square Submatrices

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-area-of-two-non-overlapping-square-submatrices/description/)

* algorithms
* Medium (40.71%)
* Likes:    85
* Dislikes: 5
* Testcase Example:  '[[1,1,1,0],[1,1,1,1],[0,0,1,1]]'

```md
You are given a 2D integer matrix mat of size m × n, where:
mat[r][c] == 1 means the cell at row r and column c is usable.
mat[r][c] == 0 means it is not usable.
Your task is to find two submatrices that satisfy the following conditions:
Both submatrices must be squares of the same side length k.
The two submatrices must not share any cell.
Each submatrix can only cover cells where mat[r][c] == 1.
Return the maximum possible area of each of the two squares. If it is not possible to choose two such squares, return 0.

Example 1:
Input: mat = [[1,1,1,0],[1,1,1,1],[0,0,1,1]]
Output: 4
Explanation:
The largest equal non-overlapping squares have side length k = 2 with area 4.
First square starts at top-left (0, 0) and covers cells (0, 0), (0, 1), (1, 0), and (1, 1).
Second square starts at top-left (1, 2) and covers cells (1, 2), (1, 3), (2, 2), and (2, 3).
Thus, the answer is 4.
Example 2:
Input: mat = [[0,1],[1,0]]
Output: 1
Explanation:
The largest equal non-overlapping squares have side length k = 1 with area 1.
First square starts at top-left (0, 1) and covers cell (0, 1).
Second square starts at top-left (1, 0) and covers cell (1, 0).
Thus, the answer is 1.
Example 3:
Input: mat = [[0,0],[0,1]]
Output: 0
Explanation:
There is only one usable cell, so it is impossible to choose two non-overlapping squares. Thus, the answer is 0.

Constraints:
mat.length == m
mat[i].length == n
1
mat[i][j] is either 0 or 1.
Hint 1: Binary search for the maximum side length k. If two valid squares of side length k exist, two valid squares of every smaller side length also exist.
Hint 2: Build a 2D prefix sum so that you can determine in constant time whether every cell in a given square is usable.
Hint 3: For a fixed k, record the minimum and maximum row and column among the top-left corners of all valid squares. Two of them can be disjoint if the difference between the maximum and minimum row is at least k, or the corresponding column difference is at least k.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个大小为 m × n 的二维整数矩阵 mat，其中：

- mat[r][c] == 1 表示第 r 行第 c 列的格子可用。
- mat[r][c] == 0 表示该格子不可用。

你的任务是找出两个满足以下条件的子矩阵：

- 两个子矩阵必须是边长相同（均为 k）的正方形。
- 两个子矩阵不能共享任何格子（不重叠）。
- 每个子矩阵只能覆盖 mat[r][c] == 1 的格子。

返回每个正方形的最大可能面积。如果无法选出两个这样的正方形，返回 0。

示例 1：
输入：mat = [[1,1,1,0],[1,1,1,1],[0,0,1,1]]
输出：4
解释：最大的一对等大不重叠正方形边长 k = 2，面积为 4。第一个正方形左上角在 (0, 0)，覆盖 (0,0)、(0,1)、(1,0)、(1,1)；第二个正方形左上角在 (1, 2)，覆盖 (1,2)、(1,3)、(2,2)、(2,3)。答案为 4。

示例 2：
输入：mat = [[0,1],[1,0]]
输出：1
解释：k = 1，两个 1×1 正方形分别在 (0,1) 和 (1,0)，答案为 1。

示例 3：
输入：mat = [[0,0],[0,1]]
输出：0
解释：只有一个可用格子，无法选出两个不重叠的正方形，答案为 0。

## 解题思路

**二分答案 + 二维前缀和**

1. **单调性**：若边长 k 可以找到两个不重叠的全 1 正方形，则 k-1 也可以（把两个正方形各自缩小一圈，仍不重叠且全 1）。因此可以对 k 二分答案。

2. **二维前缀和**：pre[r][c] 表示左上角 (0,0) 到 (r-1,c-1) 的元素和，可 O(1) 判断以 (r,c) 为左上角、边长 k 的正方形是否全 1（区域和等于 k²）。

3. **判定（关键）**：对固定 k，枚举所有合法左上角，记录其行的最小/最大值 minR/maxR 与列的最小/最大值 minC/maxC。两个 k×k 正方形不重叠 ⟺ 行区间不相交或列区间不相交 ⟺ |r1-r2| ≥ k 或 |c1-c2| ≥ k。因此：
   - 若 maxR - minR ≥ k：取左上角行号恰为 minR 的一个正方形和恰为 maxR 的一个正方形，它们行区间必然不相交，即不重叠；
   - 若 maxC - minC ≥ k：同理按列不相交。
   - 反之，若存在两个不重叠正方形，则 |r1-r2| ≥ k 或 |c1-c2| ≥ k，必然推出 maxR-minR ≥ k 或 maxC-minC ≥ k。
   所以判定条件为：存在合法左上角，且 maxR-minR ≥ k 或 maxC-minC ≥ k。

复杂度：O(mn · log(min(m,n)))，空间 O(mn)。
