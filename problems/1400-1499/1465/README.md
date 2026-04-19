# [1465] Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/description/)

* algorithms
* Medium (41.42%)
* Likes:    2644
* Dislikes: 353
* Testcase Example:  '5\n4\n[1,2,4]\n[1,3]'

```md
You are given a rectangular cake of size h x w and two arrays of integers horizontalCuts and verticalCuts where:

horizontalCuts[i] is the distance from the top of the rectangular cake to the ith horizontal cut and similarly, and
verticalCuts[j] is the distance from the left of the rectangular cake to the jth vertical cut.

Return the maximum area of a piece of cake after you cut at each horizontal and vertical position provided in the arrays horizontalCuts and verticalCuts. Since the answer can be a large number, return this modulo 109 + 7.

Example 1:


Input: h = 5, w = 4, horizontalCuts = [1,2,4], verticalCuts = [1,3]
Output: 4
Explanation: The figure above represents the given rectangular cake. Red lines are the horizontal and vertical cuts. After you cut the cake, the green piece of cake has the maximum area.

Example 2:


Input: h = 5, w = 4, horizontalCuts = [3,1], verticalCuts = [1]
Output: 6
Explanation: The figure above represents the given rectangular cake. Red lines are the horizontal and vertical cuts. After you cut the cake, the green and yellow pieces of cake have the maximum area.

Example 3:

Input: h = 5, w = 4, horizontalCuts = [3], verticalCuts = [3]
Output: 9


Constraints:

2 <= h, w <= 109
1 <= horizontalCuts.length <= min(h - 1, 105)
1 <= verticalCuts.length <= min(w - 1, 105)
1 <= horizontalCuts[i] < h
1 <= verticalCuts[i] < w
All the elements in horizontalCuts are distinct.
All the elements in verticalCuts are distinct.


```

## 题目翻译

给定 h x w 的矩形蛋糕和水平/垂直切割位置数组。horizontalCuts[i] 是从顶部到第 i 条水平切线的距离，verticalCuts[j] 是从左边到第 j 条垂直切线的距离。返回切割后最大蛋糕块的面积，对 10^9+7 取模。

**示例 1：** h=5, w=4, horizontalCuts=[1,2,4], verticalCuts=[1,3] → 4
**示例 2：** h=5, w=4, horizontalCuts=[3,1], verticalCuts=[1] → 6
**示例 3：** h=5, w=4, horizontalCuts=[3], verticalCuts=[3] → 9

**约束：**
- 2 <= h, w <= 10^9
- 1 <= cuts.length <= 10^5

## 解题思路 (Approach)

排序后，分别求水平方向和垂直方向相邻切割线之间的最大间距（包括 0 和 h/w 边界）。最大面积 = maxHGap * maxVGap，对 10^9+7 取模。

时间复杂度：O(m log m + n log n)，空间复杂度：O(1)。

## Solution

[SourceCode](./solution.js)
