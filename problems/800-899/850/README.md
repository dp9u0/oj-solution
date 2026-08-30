# [850] Rectangle Area II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/rectangle-area-ii/description/)

* algorithms
* Hard (56.64%)
* Likes:    1057
* Dislikes: 66
* Testcase Example:  '[[0,0,2,2],[1,0,2,3],[1,0,3,1]]'

```md
You are given a 2D array of axis-aligned rectangles. Each rectangle[i] = [xi1, yi1, xi2, yi2] denotes the ith rectangle where (xi1, yi1) are the coordinates of the bottom-left corner, and (xi2, yi2) are the coordinates of the top-right corner.
Calculate the total area covered by all rectangles in the plane. Any area covered by two or more rectangles should only be counted once.
Return the total area. Since the answer may be too large, return it modulo 109 + 7.

Example 1:
Input: rectangles = [[0,0,2,2],[1,0,2,3],[1,0,3,1]]
Output: 6
Explanation: A total area of 6 is covered by all three rectangles, as illustrated in the picture.
From (1,1) to (2,2), the green and red rectangles overlap.
From (1,0) to (2,3), all three rectangles overlap.
Example 2:
Input: rectangles = [[0,0,1000000000,1000000000]]
Output: 49
Explanation: The answer is 1018 modulo (109 + 7), which is 49.

Constraints:
1 <= rectangles.length <= 200
rectanges[i].length == 4
0 <= xi1, yi1, xi2, yi2 <= 109
xi1 <= xi2
yi1 <= yi2
All rectangles have non zero area.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个二维数组表示的轴对齐矩形列表。每个 `rectangle[i] = [xi1, yi1, xi2, yi2]` 表示第 i 个矩形，其中 `(xi1, yi1)` 是左下角坐标，`(xi2, yi2)` 是右上角坐标。

计算平面内所有矩形覆盖的总面积。被两个或以上矩形覆盖的区域只计算一次。

返回总面积。由于答案可能很大，返回对 10^9 + 7 取模后的结果。

示例 1：
输入：`rectangles = [[0,0,2,2],[1,0,2,3],[1,0,3,1]]`
输出：6
解释：三个矩形覆盖的总面积为 6。从 (1,1) 到 (2,2) 的区域被绿色和红色矩形重叠覆盖；从 (1,0) 到 (2,3) 的区域被三个矩形共同覆盖。

示例 2：
输入：`rectangles = [[0,0,1000000000,1000000000]]`
输出：49
解释：答案为 10^18 对 (10^9 + 7) 取模，即 49。

约束：
- 1 <= rectangles.length <= 200
- rectangles[i].length == 4
- 0 <= xi1, yi1, xi2, yi2 <= 10^9
- xi1 <= xi2，yi1 <= yi2
- 所有矩形面积非零

## 解题思路

坐标离散化（坐标压缩）+ 网格标记：

1. 收集所有矩形的 x 坐标和 y 坐标，分别去重、排序，得到压缩后的坐标轴 `ux`、`uy`（各最多 400 个）。
2. 相邻坐标构成最多 399×399 个网格单元，每个单元要么完全被某矩形覆盖、要么完全不覆盖（因为矩形边界都在坐标集合中）。
3. 用 `xIdx`/`yIdx` 哈希表把原始坐标映射到压缩下标，对每个矩形将其覆盖的单元格标记为 1。
4. 遍历所有被标记的单元格，累加面积 `(ux[i+1]-ux[i]) * (uy[j+1]-uy[j])`。单个单元格面积可达 10^18，超出 Number 安全整数范围，用 BigInt 累加，最后对 10^9+7 取模返回。

复杂度：标记 O(n·X·Y) ≈ 200×400×400 = 32M 次（Uint8Array 写入，足够快），求和 O(X·Y)。空间 O(X·Y)。
