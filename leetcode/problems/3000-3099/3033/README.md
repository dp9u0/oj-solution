# [3033] Modify the Matrix

## Description

[LeetCode Problem Description](https://leetcode.com/problems/modify-the-matrix/description/)

* algorithms
* Easy (69.05%)
* Likes:    154
* Dislikes: 9
* Testcase Example:  '[[1,2,-1],[4,-1,6],[7,8,9]]'

```md
Given a 0-indexed m x n integer matrix matrix, create a new 0-indexed matrix called answer. Make answer equal to matrix, then replace each element with the value -1 with the maximum element in its respective column.
Return the matrix answer.

Example 1:


Input: matrix = [[1,2,-1],[4,-1,6],[7,8,9]]
Output: [[1,2,9],[4,8,6],[7,8,9]]
Explanation: The diagram above shows the elements that are changed (in blue).
- We replace the value in the cell [1][1] with the maximum value in the column 1, that is 8.
- We replace the value in the cell [0][2] with the maximum value in the column 2, that is 9.

Example 2:


Input: matrix = [[3,-1],[5,2]]
Output: [[3,2],[5,2]]
Explanation: The diagram above shows the elements that are changed (in blue).


Constraints:

m == matrix.length
n == matrix[i].length
2 <= m, n <= 50
-1 <= matrix[i][j] <= 100
The input is generated such that each column contains at least one non-negative integer.


```

## Solution

[SourceCode](./solution.js)

---

### 题目翻译

给定一个 0-indexed 的 m x n 整数矩阵 `matrix`，创建一个新的 0-indexed 矩阵 `answer`。令 `answer` 等于 `matrix`，然后将每个值为 -1 的元素替换为其所在列的最大值。返回矩阵 `answer`。

### 解题思路

1. 预计算每列的最大值
2. 遍历矩阵，将 -1 替换为对应列的最大值
3. 返回修改后的矩阵
