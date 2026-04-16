# [1992] Find All Groups of Farmland

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-all-groups-of-farmland/description/)

* algorithms
* Medium (75.48%)
* Likes:    1444
* Dislikes: 92
* Testcase Example:  '[[1,0,0],[0,1,1],[0,1,1]]'

```md
You are given a 0-indexed m x n binary matrix land where a 0 represents a hectare of forested land and a 1 represents a hectare of farmland.
To keep the land organized, there are designated rectangular areas of hectares that consist entirely of farmland. These rectangular areas are called groups. No two groups are adjacent, meaning farmland in one group is not four-directionally adjacent to another farmland in a different group.
land can be represented by a coordinate system where the top left corner of land is (0, 0) and the bottom right corner of land is (m-1, n-1). Find the coordinates of the top left and bottom right corner of each group of farmland. A group of farmland with a top left corner at (r1, c1) and a bottom right corner at (r2, c2) is represented by the 4-length array [r1, c1, r2, c2].
Return a 2D array containing the 4-length arrays described above for each group of farmland in land. If there are no groups of farmland, return an empty array. You may return the answer in any order.

Example 1:


Input: land = [[1,0,0],[0,1,1],[0,1,1]]
Output: [[0,0,0,0],[1,1,2,2]]
Explanation:
The first group has a top left corner at land[0][0] and a bottom right corner at land[0][0].
The second group has a top left corner at land[1][1] and a bottom right corner at land[2][2].

Example 2:


Input: land = [[1,1],[1,1]]
Output: [[0,0,1,1]]
Explanation:
The first group has a top left corner at land[0][0] and a bottom right corner at land[1][1].

Example 3:


Input: land = [[0]]
Output: []
Explanation:
There are no groups of farmland.


Constraints:

m == land.length
n == land[i].length
1 <= m, n <= 300
land consists of only 0&#39;s and 1&#39;s.
Groups of farmland are rectangular in shape.


```

## 翻译

给定一个 m x n 的二进制矩阵 land，0 表示森林，1 表示农田。农田以矩形区域（组）的形式出现，且任意两组农田不相邻（四方向）。找到每个农田组的左上角和右下角坐标，返回 [r1, c1, r2, c2] 的列表。

## 解题思路

遍历矩阵，遇到 land[i][j] == 1 且不是已有农田组的内部点时（即上方和左方都不是1），它是一个新组的左上角。然后向右下扩展找到右下角坐标。

## Solution

[SourceCode](./solution.js)
