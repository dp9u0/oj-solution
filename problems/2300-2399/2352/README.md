# [2352] Equal Row and Column Pairs

## Description

[LeetCode Problem Description](https://leetcode.com/problems/equal-row-and-column-pairs/description/)

* algorithms
* Medium (70.88%)
* Likes:    2496
* Dislikes: 192
* Testcase Example:  '[[3,2,1],[1,7,6],[2,7,7]]'

```md
Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.
A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

Example 1:


Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
Output: 1
Explanation: There is 1 equal row and column pair:
- (Row 2, Column 1): [2,7,7]

Example 2:


Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
Output: 3
Explanation: There are 3 equal row and column pairs:
- (Row 0, Column 0): [3,1,2,2]
- (Row 2, Column 2): [2,4,2,2]
- (Row 3, Column 2): [2,4,2,2]


Constraints:

n == grid.length == grid[i].length
1 <= n <= 200
1 <= grid[i][j] <= 105


```

## 翻译

给定一个 n x n 的整数矩阵 `grid`，返回满足行 `ri` 和列 `cj` 相等的数对 `(ri, cj)` 的个数。

行和列相等指它们包含相同的元素且顺序相同。

## Approach

**哈希表。** 将每行序列化为字符串，用 Map 统计每行出现的次数。然后遍历每列，同样序列化后在 Map 中查找匹配的行数，累加到结果中。

时间复杂度：O(n^2)，空间复杂度：O(n^2)

## Solution

[SourceCode](./solution.js)
