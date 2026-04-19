# [3195] Find the Minimum Area to Cover All Ones I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/description/)

* algorithms
* Medium (78.15%)
* Likes:    495
* Dislikes: 32
* Testcase Example:  '[[0,1,0],[1,0,1]]'

```md
You are given a 2D binary array grid. Find a rectangle with horizontal and vertical sides with the smallest area, such that all the 1&#39;s in grid lie inside this rectangle.
Return the minimum possible area of the rectangle.

Example 1:

Input: grid = [[0,1,0],[1,0,1]]
Output: 6
Explanation:

The smallest rectangle has a height of 2 and a width of 3, so it has an area of 2 * 3 = 6.

Example 2:

Input: grid = [[1,0],[0,0]]
Output: 1
Explanation:

The smallest rectangle has both height and width 1, so its area is 1 * 1 = 1.


Constraints:

1 <= grid.length, grid[i].length <= 1000
grid[i][j] is either 0 or 1.
The input is generated such that there is at least one 1 in grid.


```

## 中文翻译

给定二维二进制数组 grid，找到能覆盖所有 1 的最小矩形面积。

## 解题思路

遍历矩阵，记录所有 1 出现的最小/最大行号和最小/最大列号，面积 = (maxRow - minRow + 1) * (maxCol - minCol + 1)。

时间复杂度：O(m*n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
