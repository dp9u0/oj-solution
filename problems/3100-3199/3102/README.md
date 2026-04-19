# [3102] Minimize Manhattan Distances

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimize-manhattan-distances/description/)

* algorithms
* Hard (32.85%)
* Likes:    187
* Dislikes: 15
* Testcase Example:  '[[3,10],[5,15],[10,2],[4,4]]'

```md
You are given an array points representing integer coordinates of some points on a 2D plane, where points[i] = [xi, yi].
The distance between two points is defined as their Manhattan distance.
Return the minimum possible value for maximum distance between any two points by removing exactly one point.

Example 1:

Input: points = [[3,10],[5,15],[10,2],[4,4]]
Output: 12
Explanation:
The maximum distance after removing each point is the following:

After removing the 0th point the maximum distance is between points (5, 15) and (10, 2), which is
5 - 10
+
15 - 2
= 18.
After removing the 1st point the maximum distance is between points (3, 10) and (10, 2), which is
3 - 10
+
10 - 2
= 15.
After removing the 2nd point the maximum distance is between points (5, 15) and (4, 4), which is
5 - 4
+
15 - 4
= 12.
After removing the 3rd point the maximum distance is between points (5, 15) and (10, 2), which is
5 - 10
+
15 - 2
= 18.

12 is the minimum possible maximum distance between any two points after removing exactly one point.

Example 2:

Input: points = [[1,1],[1,1],[1,1]]
Output: 0
Explanation:
Removing any of the points results in the maximum distance between any two points of 0.


Constraints:

3 <= points.length <= 105
points[i].length == 2
1 <= points[i][0], points[i][1] <= 108


```

## 中文翻译

给定平面上 n 个点 points[i] = [xi, yi]，定义两点间距离为曼哈顿距离。必须恰好移除一个点，使剩余点之间的最大距离最小化。返回该最小值。

约束：3 <= n <= 10^5

## 解题思路

**坐标变换 + 枚举极值点**

曼哈顿距离 |x1-x2| + |y1-y2| = max(|s1-s2|, |d1-d2|)，其中 s=x+y, d=x-y。

最大曼哈顿距离 = max(rangeS, rangeD)。移除非极值点不会缩小任何range，因此只需枚举 max_s, min_s, max_d, min_d 对应的点（至多4个），对每个计算移除后的 max(newRangeS, newRangeD)，取最小值。

排序后可通过第二极值 O(1) 计算每个候选的答案。

## Solution

[SourceCode](./solution.js)
