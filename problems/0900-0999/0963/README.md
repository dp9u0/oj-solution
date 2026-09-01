# [963] Minimum Area Rectangle II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-area-rectangle-ii/description/)

* algorithms
* Medium (55.89%)
* Likes:    413
* Dislikes: 487
* Testcase Example:  '[[1,2],[2,1],[1,0],[0,1]]'

```md
You are given an array of points in the X-Y plane points where points[i] = [xi, yi].
Return the minimum area of any rectangle formed from these points, with sides not necessarily parallel to the X and Y axes. If there is not any such rectangle, return 0.
Answers within 10-5 of the actual answer will be accepted.

Example 1:


Input: points = [[1,2],[2,1],[1,0],[0,1]]
Output: 2.00000
Explanation: The minimum area rectangle occurs at [1,2],[2,1],[1,0],[0,1], with an area of 2.

Example 2:


Input: points = [[0,1],[2,1],[1,1],[1,0],[2,0]]
Output: 1.00000
Explanation: The minimum area rectangle occurs at [1,0],[1,1],[2,1],[2,0], with an area of 1.

Example 3:


Input: points = [[0,3],[1,2],[3,1],[1,3],[2,1]]
Output: 0
Explanation: There is no possible rectangle to form from these points.


Constraints:

1 <= points.length <= 50
points[i].length == 2
0 <= xi, yi <= 4 * 104
All the given points are unique.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定 X-Y 平面上的一组点，找出由这些点能组成的任意矩形（边不要求平行于坐标轴）的最小面积。如果不存在任何矩形，返回 0。

**约束：** 1 <= points.length <= 50，所有点唯一

## 解题思路

**Approach: 枚举三个点 + 点积判断垂直**

1. 将所有点存入 Set 用于 O(1) 查找
2. 枚举三个点 i, j, k，判断向量 ij 和 ik 是否垂直（点积为0）
3. 若垂直，计算第四个点 l = j + k - i，检查是否在点集中
4. 面积 = |向量ij × 向量ik|（叉积的绝对值）
5. 取所有矩形面积的最小值
6. 时间复杂度 O(n³)，空间复杂度 O(n)
