# [2371] 最小化网格中的最大值

## Description


```md
https://leetcode.cn/problems/minimize-maximum-value-in-a-grid/description/
* algorithms
* Hard (62.74%)
* Likes:    5
* Dislikes: -
* Testcase Example:  '[[3,1],[2,5]]'
给定一个包含 不同 正整数的 m × n 整数矩阵 grid。
必须将矩阵中的每一个整数替换为正整数，且满足以下条件:
在替换之后，同行或同列中的每两个元素的 相对 顺序应该保持 不变。
替换后矩阵中的 最大 值应尽可能 小。
如果对于原始矩阵中的所有元素对，使 grid[r1][c1] > grid[r2][c2]，其中要么 r1 == r2 ，要么 c1 == c2，则相对顺序保持不变。那么在替换之后一定满足 grid[r1][c1] > grid[r2][c2]。
例如，如果 grid = [[2, 4, 5], [7, 3, 9]]，那么一个好的替换可以是 grid = [[1, 2, 3], [2, 1, 4]] 或 grid = [[1, 2, 3], [3, 1, 4]]。
返回 结果 矩阵。如果有多个答案，则返回其中 任何 一个。

示例 1:
输入: grid = [[3,1],[2,5]]
输出: [[2,1],[1,2]]
解释: 上面的图显示了一个有效的替换。
矩阵中的最大值是 2。可以证明，不能得到更小的值。
示例 2:
输入: grid = [[10]]
输出: [[1]]
解释: 我们将矩阵中唯一的数字替换为 1。

提示:
m == grid.length
n == grid[i].length
1 <= m, n <= 1000
1 <= m * n <= 105
1 <= grid[i][j] <= 109
grid 由不同的整数组成。
Hint 1: Can you think of which element in the grid you should replace first?
Hint 2: Replace the elements in the matrix from the smallest number to the largest. Replace each element with the smallest possible number so far.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Replace every distinct positive integer in the grid with positive integers so that relative order within each row and column is preserved (any pair sharing a row or column keeps its > relation), minimizing the maximum value. Return any optimal grid.

Example 1:
Input: grid = [[3,1],[2,5]]
Output: [[2,1],[1,2]]

Example 2:
Input: grid = [[10]]
Output: [[1]]

Constraints: 1 <= m, n <= 1000, 1 <= m*n <= 10^5, all values distinct.

## Approach

Process cells in increasing order of their original value. Each cell gets the smallest value consistent with its row and column neighbors already assigned: val = max(rowBest[r], colBest[c]) + 1; then update rowBest[r] = colBest[c] = val. Greedy is optimal since raising any earlier assignment never helps later ones.

O(mn log(mn)) for the sort.
