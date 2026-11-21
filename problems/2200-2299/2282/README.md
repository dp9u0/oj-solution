# [2282] 在一个网格中可以看到的人数

## Description


```md
https://leetcode.cn/problems/number-of-people-that-can-be-seen-in-a-grid/description/
* algorithms
* Medium (41.18%)
* Likes:    7
* Dislikes: -
* Testcase Example:  '[[3,1,4,2,5]]'
给定一个 m x n 下标从 0 开始的二维正整数数组 heights，其中 heights[i][j] 是站在位置 (i, j) 上的人的高度。
站在 (row1, col1) 位置的人可以看到站在 (row2, col2) 位置的人，前提是:
(row2, col2) 的人在 (row1, col1) 的人的右边 或 下面。更正式地说，要么 row1 == row2 时 col1 < col2，要么 row1 < row2 时 col1 == col2。
他们中间的人 都 比他们两个矮。
返回一个 m x n 的二维整数数组answer，其中 answer[i][j] 是位于 (i, j) 位置的人可以看到的人数。

示例 1:
输入: heights = [[3,1,4,2,5]]
输出: [[2,1,2,1,0]]
解释:
- (0,0) 上的人可以看到 (0,1) 和 (0,2) 的人。
注意，他看不到 (0,4) 上的人，因为 (0,2) 上的人比他高。
- (0,1) 上的人可以看到 (0,2) 上的人。
- (0,2) 上的人可以看到 (0,3) 和 (0,4) 的人。
- (0,3) 上的人可以看到 (0,4) 上的人。
- (0,4) 上的人看不到任何人。
示例 2:
输入: heights = [[5,1],[3,1],[4,1]]
输出: [[3,1],[2,1],[1,0]]
解释:
- (0,0) 上的人可以看到 (0,1)、(1,0) 和 (2,0) 的人。
- (0,1) 上的人可以看到 (1,1) 上的人。
- (1,0) 上的人可以看到 (1,1) 和 (2,0) 的人。
- (1,1) 上的人可以看到 (2,1) 上的人。
- (2,0) 上的人可以看到 (2,1) 上的人。
- (2,1) 上的人看不到任何人。

提示:
1 <= heights.length <= 400
1 <= heights[i].length <= 400
1 <= heights[i][j] <= 105
Hint 1: Imagine you are looking to the right. The heights of the people you see form an ascending sequence.
Hint 2: Iterate through the row from right to left. Use a decreasing monotonic stack to keep track of the people that you can see.
Hint 3: Use binary search to find the number of people in the stack that are shorter than the current person.
Hint 4: Repeat this process for each column.

```

## Solution

[SourceCode](./solution.js)

## English Translation

In an m x n grid of heights, person (i, j) sees person (i2, j2) if the latter is strictly right in the same row or strictly below in the same column, and everyone between is shorter than both. Return the grid of visible-person counts.

Example 1:
Input: heights = [[3,1,4,2,5]]
Output: [[2,1,2,1,0]]

Example 2:
Input: heights = [[5,1],[3,1],[4,1]]
Output: [[3,1],[2,1],[1,0]]

Constraints: 1 <= m, n <= 400, 1 <= heights[i][j] <= 10^5.

## Approach

For each row scanned right-to-left (and each column bottom-to-top) keep a monotonic stack of the visible record chain (nearest smallest on top). For height h at the current cell: every popped entry (< h) is visible; if the stack is non-empty afterwards, its top (first entry >= h) is also visible (the blocker). Then push h. Amortized O(n) per line; runs once for all rows and once for all columns.
