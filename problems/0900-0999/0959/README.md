# [959] Regions Cut By Slashes

## Description

[LeetCode Problem Description](https://leetcode.com/problems/regions-cut-by-slashes/description/)

* algorithms
* Medium (77.52%)
* Likes:    3991
* Dislikes: 874
* Testcase Example:  '[" /","/ "]'

```md
An n x n grid is composed of 1 x 1 squares where each 1 x 1 square consists of a &#39;/&#39;, &#39;\&#39;, or blank space &#39; &#39;. These characters divide the square into contiguous regions.
Given the grid grid represented as a string array, return the number of regions.
Note that backslash characters are escaped, so a &#39;\&#39; is represented as &#39;\\&#39;.

Example 1:


Input: grid = [' /','/ ']
Output: 2

Example 2:


Input: grid = [' /','  ']
Output: 1

Example 3:


Input: grid = ['/\\','\\/']
Output: 5
Explanation: Recall that because \ characters are escaped, '\\/' refers to \/, and '/\\' refers to /\.


Constraints:

n == grid.length == grid[i].length
1 <= n <= 30
grid[i][j] is either &#39;/&#39;, &#39;\&#39;, or &#39; &#39;.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

一个 n×n 网格由 1×1 的方格组成，每个方格包含 '/'、'\' 或空格。这些字符将方格划分为连续的区域。返回区域的数量。

## 解题思路

将每个 1×1 方格放大为 3×3 像素：
- 空格：全部 9 个像素为空
- '/'：对角线像素 (0,2), (1,1), (2,0) 为墙
- '\'：对角线像素 (0,0), (1,1), (2,2) 为墙

然后用 BFS/DFS 计算空白区域的连通分量数。n ≤ 30，放大后 90×90，完全可行。
