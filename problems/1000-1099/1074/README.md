# [1074] Number of Submatrices That Sum to Target

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/description/)

* algorithms
* Hard (74.59%)
* Likes:    3903
* Dislikes: 108
* Testcase Example:  '[[0,1,0],[1,1,1],[0,1,0]]\n0'

```md
Given a matrixand a target, return the number of non-empty submatrices that sum to target.
A submatrix x1, y1, x2, y2 is the set of all cells matrix[x][y] with x1 <= x <= x2 and y1 <= y <= y2.
Two submatrices (x1, y1, x2, y2) and (x1&#39;, y1&#39;, x2&#39;, y2&#39;) are different if they have some coordinatethat is different: for example, if x1 != x1&#39;.

Example 1:


Input: matrix = [[0,1,0],[1,1,1],[0,1,0]], target = 0
Output: 4
Explanation: The four 1x1 submatrices that only contain 0.

Example 2:

Input: matrix = [[1,-1],[-1,1]], target = 0
Output: 5
Explanation: The two 1x2 submatrices, plus the two 2x1 submatrices, plus the 2x2 submatrix.

Example 3:

Input: matrix = [[904]], target = 0
Output: 0


Constraints:

1 <= matrix.length <= 100
1 <= matrix[0].length <= 100
-1000 <= matrix[i][j] <= 1000
-10^8 <= target <= 10^8


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个矩阵和一个目标值 target，返回和为 target 的非空子矩阵的数量。子矩阵由矩形区域 (x1, y1, x2, y2) 定义。

## 解题思路

**前缀和 + Hash Map**

经典二维子数组和问题。固定上下边界 (top, bottom)，将每一列从 top 到 bottom 的元素累加成一维数组，问题转化为「一维数组中和为 target 的子数组个数」。

具体步骤：
1. 枚举上边界 top（0 到 m-1）
2. 对于每个 top，枚举下边界 bottom（top 到 m-1），维护一个列前缀和数组 colSum
3. 对 colSum 求一维前缀和，用 HashMap 记录前缀和出现次数
4. 对于每个位置 j，查找 prefixSum - target 在 map 中出现的次数

时间复杂度 O(m² * n)，空间复杂度 O(n)。
