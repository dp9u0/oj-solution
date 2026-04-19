# [304] Range Sum Query 2D - Immutable (二维区域和检索 - 矩阵不可变)

## Description

[LeetCode Problem Description](https://leetcode.com/problems/range-sum-query-2d-immutable/description/)

* algorithms
* Medium (55.61%)
* Likes:    5075
* Dislikes: 351
* Testcase Example:  '["NumMatrix","sumRegion","sumRegion","sumRegion"]\n' +

```md
'[[[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]],[2,1,4,3],[1,1,2,2],[1,2,2,4]]'
Given a 2D matrix matrix, handle multiple queries of the following type:

Calculate the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

Implement the NumMatrix class:

NumMatrix(int[][] matrix) Initializes the object with the integer matrix matrix.
int sumRegion(int row1, int col1, int row2, int col2) Returns the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

You must design an algorithm where sumRegion works on O(1) time complexity.

Example 1:


Input
['NumMatrix', 'sumRegion', 'sumRegion', 'sumRegion']
[[[[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]], [2, 1, 4, 3], [1, 1, 2, 2], [1, 2, 2, 4]]
Output
[null, 8, 11, 12]
Explanation
NumMatrix numMatrix = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);
numMatrix.sumRegion(2, 1, 4, 3); // return 8 (i.e sum of the red rectangle)
numMatrix.sumRegion(1, 1, 2, 2); // return 11 (i.e sum of the green rectangle)
numMatrix.sumRegion(1, 2, 2, 4); // return 12 (i.e sum of the blue rectangle)


Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 200
-104 <= matrix[i][j] <= 104
0 <= row1 <= row2 < m
0 <= col1 <= col2 < n
At most 104 calls will be made to sumRegion.


```

## 中文题目描述

给定一个二维矩阵 matrix，处理以下类型的多个查询：

- 计算其子矩形范围内元素的总和，该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2) 。

实现 NumMatrix 类：

- NumMatrix(int[][] matrix) 给定整数矩阵 matrix 进行初始化
- int sumRegion(int row1, int col1, int row2, int col2) 返回左上角 (row1, col1) 、右下角 (row2, col2) 所描述的子矩阵的元素总和

你必须设计并实现一个时间复杂度为 O(1) 的算法来解决此问题。

示例：

输入：
['NumMatrix', 'sumRegion', 'sumRegion', 'sumRegion']
[[[[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]], [2, 1, 4, 3], [1, 1, 2, 2], [1, 2, 2, 4]]
输出：
[null, 8, 11, 12]

解释：
NumMatrix numMatrix = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);
numMatrix.sumRegion(2, 1, 4, 3); // 返回 8 (即红色矩形框的和)
numMatrix.sumRegion(1, 1, 2, 2); // 返回 11 (即绿色矩形框的和)
numMatrix.sumRegion(1, 2, 2, 4); // 返回 12 (即蓝色矩形框的和)

提示：
- m == matrix.length
- n == matrix[i].length
- 1 <= m, n <= 200
- -104 <= matrix[i][j] <= 104
- 0 <= row1 <= row2 < m
- 0 <= col1 <= col2 < n
- 最多调用 104 次 sumRegion 方法

## Solution Explanation

这道题的最优解法是使用二维前缀和（2D Prefix Sum）。基本思路如下：

1. 在构造函数中，我们预计算一个累积和矩阵 prefixSum，其中 prefixSum[i][j] 表示从 matrix[0][0] 到 matrix[i-1][j-1] 的矩形区域和
2. 使用公式：prefixSum[i+1][j+1] = matrix[i][j] + prefixSum[i+1][j] + prefixSum[i][j+1] - prefixSum[i][j]
3. 查询时使用容斥原理计算指定区域的和

时间复杂度：
- 构造：O(m*n)
- 查询：O(1)

空间复杂度：O(m*n)

## Solution

[SourceCode](./solution.js)
