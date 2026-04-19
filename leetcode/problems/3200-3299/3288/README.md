# [3288] Length of the Longest Increasing Path

## Description

[LeetCode Problem Description](https://leetcode.com/problems/length-of-the-longest-increasing-path/description/)

* algorithms
* Hard (19.36%)
* Likes:    103
* Dislikes: 2
* Testcase Example:  '[[3,1],[2,2],[4,1],[0,0],[5,3]]\n1'

```md
You are given a 2D array of integers coordinates of length n and an integer k, where 0 <= k < n.
coordinates[i] = [xi, yi] indicates the point (xi, yi) in a 2D plane.
An increasing path of length m is defined as a list of points (x1, y1), (x2, y2), (x3, y3), ..., (xm, ym) such that:

xi < xi + 1 and yi < yi + 1 for all i where 1 <= i < m.
(xi, yi) is in the given coordinates for all i where 1 <= i <= m.

Return the maximum length of an increasing path that contains coordinates[k].

Example 1:

Input: coordinates = [[3,1],[2,2],[4,1],[0,0],[5,3]], k = 1
Output: 3
Explanation:
(0, 0), (2, 2), (5, 3) is the longest increasing path that contains (2, 2).

Example 2:

Input: coordinates = [[2,1],[7,0],[5,6]], k = 2
Output: 2
Explanation:
(2, 1), (5, 6) is the longest increasing path that contains (5, 6).


Constraints:

1 <= n == coordinates.length <= 105
coordinates[i].length == 2
0 <= coordinates[i][0], coordinates[i][1] <= 109
All elements in coordinates are distinct.
0 <= k <= n - 1


```

## 翻译

给定二维平面上的 n 个点 coordinates 和一个整数 k，找到包含 coordinates[k] 的最长递增路径长度。递增路径要求相邻点的 x 和 y 均严格递增。

## 解题思路

将路径拆为 k 左右两部分。左部分：x < xk 且 y < yk 的点中，求 LIS（按 x 升序排，相同 x 按 y 降序排，再对 y 做严格递增子序列）。右部分同理（x > xk 且 y > yk）。答案 = leftLIS + 1 + rightLIS。O(n log n)。

## Solution

[SourceCode](./solution.js)
