# [LCR 013] 二维区域和检索 - 矩阵不可变

## Description


```md
https://leetcode.cn/problems/O4NDxx/description/
* algorithms
* Medium (69.04%)
* Likes:    98
* Dislikes: -
* Testcase Example:  '["NumMatrix","sumRegion","sumRegion","sumRegion"]\n' +
'[[[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]],[2,1,4,3],[1,1,2,2],[1,2,2,4]]'
给定一个二维矩阵 matrix，以下类型的多个请求：
计算其子矩形范围内元素的总和，该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2) 。
实现 NumMatrix 类：
NumMatrix(int[][] matrix) 给定整数矩阵 matrix 进行初始化
int sumRegion(int row1, int col1, int row2, int col2) 返回左上角 (row1, col1) 、右下角 (row2, col2) 的子矩阵的元素总和。

示例 1：
输入:
["NumMatrix","sumRegion","sumRegion","sumRegion"]
[[[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]],[2,1,4,3],[1,1,2,2],[1,2,2,4]]
输出:
[null, 8, 11, 12]
解释:
NumMatrix numMatrix = new NumMatrix([[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]]);
numMatrix.sumRegion(2, 1, 4, 3); // return 8 (红色矩形框的元素总和)
numMatrix.sumRegion(1, 1, 2, 2); // return 11 (绿色矩形框的元素总和)
numMatrix.sumRegion(1, 2, 2, 4); // return 12 (蓝色矩形框的元素总和)

提示：
m == matrix.length
n == matrix[i].length
1 <= m, n <= 200
-105 <= matrix[i][j] <= 105
0 <= row1 <= row2 < m
0 <= col1 <= col2 < n
最多调用 104 次 sumRegion 方法

注意：本题与主站 304 题相同： https://leetcode.cn/problems/range-sum-query-2d-immutable/

```

## Solution

[SourceCode](./solution.js)

## English Description

Given a 2D matrix `matrix`, handle multiple queries of the following type:
Calculate the sum of the elements of a submatrix inside the matrix whose upper left corner is `(row1, col1)` and lower right corner is `(row2, col2)`.

Implement the `NumMatrix` class:
- `NumMatrix(int[][] matrix)` — Initializes the object with the integer matrix `matrix`.
- `int sumRegion(int row1, int col1, int row2, int col2)` — Returns the sum of the elements of the submatrix with upper left corner `(row1, col1)` and lower right corner `(row2, col2)`.

**Example 1:**
```
Input:
["NumMatrix","sumRegion","sumRegion","sumRegion"]
[[[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]],[2,1,4,3],[1,1,2,2],[1,2,2,4]]
Output: [null, 8, 11, 12]
```
**Explanation:** See problem description above for the colored submatrices.

**Constraints:**
- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 200`
- `-10^5 <= matrix[i][j] <= 10^5`
- `0 <= row1 <= row2 < m`
- `0 <= col1 <= col2 < n`
- At most `10^4` calls will be made to `sumRegion`.

**Note:** This problem is the same as LeetCode 304 (Range Sum Query 2D - Immutable).

## Approach

Use a **2D prefix sum** (also called 2D integral image):

1. Build `pre` of size `(m+1) x (n+1)` where `pre[i+1][j+1]` stores the sum of all elements in the rectangle from `(0,0)` to `(i,j)`.
2. Fill it with the inclusion–exclusion formula:
   `pre[i+1][j+1] = pre[i][j+1] + pre[i+1][j] - pre[i][j] + matrix[i][j]`
3. For a query `(row1, col1, row2, col2)`, the submatrix sum is:
   `pre[row2+1][col2+1] - pre[row1][col2+1] - pre[row2+1][col1] + pre[row1][col1]`

- Constructor: `O(m·n)` time and space.
- `sumRegion`: `O(1)` per query.

No result clipping is needed because the matrix is immutable and negative numbers are handled directly by the prefix sum arithmetic.
