# [LCR 040] 最大矩形

## Description


```md
https://leetcode.cn/problems/PLYXKQ/description/
* algorithms
* Hard (59.22%)
* Likes:    104
* Dislikes: -
* Testcase Example:  '["10100","10111","11111","10010"]'
给定一个由 0 和 1 组成的矩阵 matrix ，找出只包含 1 的最大矩形，并返回其面积。
注意：此题 matrix 输入格式为一维 01 字符串数组。

示例 1：
输入：matrix = ["10100","10111","11111","10010"]
输出：6
解释：最大矩形如上图所示。
示例 2：
输入：matrix = []
输出：0
示例 3：
输入：matrix = ["0"]
输出：0
示例 4：
输入：matrix = ["1"]
输出：1
示例 5：
输入：matrix = ["00"]
输出：0

提示：
rows == matrix.length
cols == matrix[0].length
0 <= row, cols <= 200
matrix[i][j] 为 '0' 或 '1'

注意：本题与主站 85 题相同（输入参数格式不同）： https://leetcode.cn/problems/maximal-rectangle/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given a matrix `matrix` consisting of `0` and `1`, find the largest rectangle containing only `1` and return its area.

Note: The `matrix` input here is given as a 1-D array of `0/1` strings.

Example 1:
```
Input: matrix = ["10100","10111","11111","10010"]
Output: 6
```

Example 2:
```
Input: matrix = []
Output: 0
```

Example 3:
```
Input: matrix = ["0"]
Output: 0
```

Example 4:
```
Input: matrix = ["1"]
Output: 1
```

Example 5:
```
Input: matrix = ["00"]
Output: 0
```

Constraints:
- `rows == matrix.length`
- `cols == matrix[0].length`
- `0 <= rows, cols <= 200`
- `matrix[i][j]` is `'0'` or `'1'`

Note: This problem is the same as LeetCode 85 (different input format).

---

## Approach

Classic **histogram + monotonic stack** solution.

Treat each row as the bottom of a histogram. For column `j`, `heights[j]` = the number of consecutive `1`s going upward from the current row (reset to `0` when the cell is `'0'`).

For each row:
1. Update `heights[j]`: `heights[j] = (matrix[i][j] === '1') ? heights[j] + 1 : 0`.
2. Compute the largest rectangle area in this histogram using a monotonic increasing stack:
   - Iterate columns, maintaining a stack of column indices with strictly increasing heights.
   - When `heights[j] < heights[stackTop]`, pop; for each popped `h`, the width is `j - stack[topAfterPop] - 1` (bounded by the next smaller bar on the left).
   - Update the global max.

Track the maximum over all rows.

Time: O(rows × cols), Space: O(cols).
