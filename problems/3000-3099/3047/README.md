# [3047] Find the Largest Area of Square Inside Two Rectangles

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles/description/)

* algorithms
* Medium (66.90%)
* Likes:    438
* Dislikes: 86
* Testcase Example:  '[[1,1],[2,2],[3,1]]\n[[3,3],[4,4],[6,6]]'

```md
There exist n rectangles in a 2D plane with edges parallel to the x and y axis. You are given two 2D integer arraysbottomLeft and topRightwhere bottomLeft[i] = [a_i, b_i] and topRight[i] = [c_i, d_i] representthe bottom-left and top-right coordinates of the ith rectangle, respectively.
You need to find the maximum area of a square that can fit inside the intersecting region of at least two rectangles. Return 0 if such a square does not exist.

Example 1:

Input: bottomLeft = [[1,1],[2,2],[3,1]], topRight = [[3,3],[4,4],[6,6]]
Output: 1
Explanation:
A square with side length 1 can fit inside either the intersecting region of rectangles 0 and 1 or the intersecting region of rectangles 1 and 2. Hence the maximum area is 1. It can be shown that a square with a greater side length can not fit inside any intersecting region of two rectangles.
Example 2:

Input: bottomLeft = [[1,1],[1,3],[1,5]], topRight = [[5,5],[5,7],[5,9]]
Output: 4
Explanation:
A square with side length 2 can fit inside either the intersecting region of rectangles 0 and 1 or the intersecting region of rectangles 1 and 2. Hence the maximum area is 2 * 2 = 4. It can be shown that a square with a greater side length can not fit inside any intersecting region of two rectangles.
Example 3:

Input: bottomLeft = [[1,1],[2,2],[1,2]], topRight = [[3,3],[4,4],[3,4]]
Output: 1
Explanation:
A square with side length 1 can fit inside the intersecting region of any two rectangles. Also, no larger square can, so the maximum area is 1. Note that the region can be formed by the intersection of more than 2 rectangles.
Example 4:

Input:bottomLeft = [[1,1],[3,3],[3,1]], topRight = [[2,2],[4,4],[4,2]]
Output: 0
Explanation:
No pair of rectangles intersect, hence, the answer is 0.

Constraints:

n == bottomLeft.length == topRight.length
2 <= n <= 103
bottomLeft[i].length == topRight[i].length == 2
1 <= bottomLeft[i][0], bottomLeft[i][1] <= 107
1 <= topRight[i][0], topRight[i][1] <= 107
bottomLeft[i][0] < topRight[i][0]
bottomLeft[i][1] < topRight[i][1]


```

## 翻译

n 个轴对齐矩形，找至少两个矩形交集中能放入的最大正方形面积。

## 解题思路

枚举所有矩形对，计算交集区域（取左下角 max、右上角 min），正方形边长 = min(宽, 高)，取最大面积。O(n²)。

## Solution

[SourceCode](./solution.js)
