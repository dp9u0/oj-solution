# [3394] Check if Grid can be Cut into Sections

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-grid-can-be-cut-into-sections/description/)

* algorithms
* Medium (68.26%)
* Likes:    625
* Dislikes: 38
* Testcase Example:  '5\n[[1,0,5,2],[0,2,2,4],[3,2,5,3],[0,4,4,5]]'

```md
You are given an integer n representing the dimensions of an n x n grid, with the origin at the bottom-left corner of the grid. You are also given a 2D array of coordinates rectangles, where rectangles[i] is in the form [startx, starty, endx, endy], representing a rectangle on the grid. Each rectangle is defined as follows:

(startx, starty): The bottom-left corner of the rectangle.
(endx, endy): The top-right corner of the rectangle.

Note that the rectangles do not overlap. Your task is to determine if it is possible to make either two horizontal or two vertical cuts on the grid such that:

Each of the three resulting sections formed by the cuts contains at least one rectangle.
Every rectangle belongs to exactly one section.

Return true if such cuts can be made; otherwise, return false.

Example 1:

Input: n = 5, rectangles = [[1,0,5,2],[0,2,2,4],[3,2,5,3],[0,4,4,5]]
Output: true
Explanation:

The grid is shown in the diagram. We can make horizontal cuts at y = 2 and y = 4. Hence, output is true.

Example 2:

Input: n = 4, rectangles = [[0,0,1,1],[2,0,3,4],[0,2,2,3],[3,0,4,3]]
Output: true
Explanation:

We can make vertical cuts at x = 2 and x = 3. Hence, output is true.

Example 3:

Input: n = 4, rectangles = [[0,2,2,4],[1,0,3,2],[2,2,3,4],[3,0,4,2],[3,2,4,4]]
Output: false
Explanation:
We cannot make two horizontal or two vertical cuts that satisfy the conditions. Hence, output is false.


Constraints:

3 <= n <= 109
3 <= rectangles.length <= 105
0 <= rectangles[i][0] < rectangles[i][2] <= n
0 <= rectangles[i][1] < rectangles[i][3] <= n
No two rectangles overlap.


```

## 中文翻译

n×n 网格上有多个不重叠矩形，判断能否做两条水平或两条垂直切割，将网格分成三段，每段至少一个矩形且矩形不跨段。

## 解题思路

**区间合并**

分别检查 x 轴和 y 轴方向。将矩形投影到 x 轴（[startx, endx]）或 y 轴（[starty, endy]），排序后合并区间。若合并后区间数 >= 3，则可以在这两段间隔处做切割。

时间复杂度：O(m log m)，空间复杂度：O(m)

## Solution

[SourceCode](./solution.js)
