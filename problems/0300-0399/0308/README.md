# [308] 二维区域和检索 - 矩阵可修改

## Description


```md
https://leetcode.cn/problems/range-sum-query-2d-mutable/description/
* algorithms
* Medium (60.28%)
* Likes:    101
* Dislikes: -
* Testcase Example:  '["NumMatrix","sumRegion","update","sumRegion"]\n' +
'[[[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]],[2,1,4,3],[3,2,2],[2,1,4,3]]'
给你一个二维矩阵 matrix ，处理以下类型的多个查询:
更新 matrix 中单元格的值。
计算由 左上角 (row1, col1) 和 右下角 (row2, col2) 定义的 matrix 内矩阵元素的 和。
实现 NumMatrix 类：
NumMatrix(int[][] matrix) 用整数矩阵 matrix 初始化对象。
void update(int row, int col, int val) 更新 matrix[row][col] 的值到 val 。
int sumRegion(int row1, int col1, int row2, int col2) 返回矩阵 matrix 中指定矩形区域元素的 和 ，该区域由 左上角 (row1, col1) 和 右下角 (row2, col2) 界定。

示例 1：
输入
["NumMatrix", "sumRegion", "update", "sumRegion"]
[[[[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]], [2, 1, 4, 3], [3, 2, 2], [2, 1, 4, 3]]
输出
[null, 8, null, 10]
解释
NumMatrix numMatrix = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);
numMatrix.sumRegion(2, 1, 4, 3); // 返回 8 (即, 左侧红色矩形的和)
numMatrix.update(3, 2, 2);       // 矩阵从左图变为右图
numMatrix.sumRegion(2, 1, 4, 3); // 返回 10 (即，右侧红色矩形的和)

提示：
m == matrix.length
n == matrix[i].length
1 <= m, n <= 200
-1000 <= matrix[i][j] <= 1000
0 <= row < m
0 <= col < n
-1000 <= val <= 1000
0 <= row1 <= row2 < m
0 <= col1 <= col2 < n
最多调用5000 次 sumRegion 和 update 方法

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Design `NumMatrix` over a matrix supporting `update(row, col, val)` (sets the cell) and `sumRegion(row1, col1, row2, col2)`, both efficient.

**Constraints:**
- 1 <= m, n <= 200, up to 10^4 calls

## Approach

二维树状数组(Fenwick):更新与前缀和均 O(log m × log n)。update 语义是"赋值",需维护当前值副本,加 delta;sumRegion 用四个前缀和容斥。

时间:构造 O(mn·log),更新/查询 O(log m·log n);空间 O(mn)。
