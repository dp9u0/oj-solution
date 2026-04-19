# [1499] Max Value of Equation

## Description

[LeetCode Problem Description](https://leetcode.com/problems/max-value-of-equation/description/)

* algorithms
* Hard (44.99%)
* Likes:    1417
* Dislikes: 62
* Testcase Example:  '[[1,3],[2,0],[5,10],[6,-10]]\n1'

```md
You are given an array points containing the coordinates of points on a 2D plane, sorted by the x-values, where points[i] = [xi, yi] such that xi < xj for all 1 <= i < j <= points.length. You are also given an integer k.
Return the maximum value of the equation yi + yj +
xi - xj
where
xi - xj
<= k and 1 <= i < j <= points.length.
It is guaranteed that there exists at least one pair of points that satisfy the constraint
xi - xj
<= k.

Example 1:

Input: points = [[1,3],[2,0],[5,10],[6,-10]], k = 1
Output: 4
Explanation: The first two points satisfy the condition
xi - xj
<= 1 and if we calculate the equation we get 3 + 0 +
1 - 2
= 4. Third and fourth points also satisfy the condition and give a value of 10 + -10 +
5 - 6
= 1.
No other pairs satisfy the condition, so we return the max of 4 and 1.

Example 2:

Input: points = [[0,0],[3,0],[9,2]], k = 3
Output: 3
Explanation: Only the first two points have an absolute difference of 3 or less in the x-values, and give the value of 0 + 0 +
0 - 3
= 3.


Constraints:

2 <= points.length <= 105
points[i].length == 2
-108 <= xi, yi <= 108
0 <= k <= 2 * 108
xi < xj for all 1 <= i < j <= points.length
xi form a strictly increasing sequence.


```

## 翻译

给定按 x 排序的点集 points 和整数 k，求 yi + yj + |xi - xj| 的最大值，其中 i < j 且 |xi - xj| <= k。

由于 xi < xj（严格递增），|xi - xj| = xj - xi，方程变为 yi + yj + xj - xi = (yi - xi) + (yj + xj)。

## 解题思路

对每个 j，在窗口 [xj-k, xj) 内找最大的 (yi - xi)。用单调双端队列维护候选值，队首为最大值。

对每个点 j：
1. 弹出队首 xi < xj - k 的过期元素
2. 队首的 (yi - xi) 即为最优，更新答案
3. 将 (yj - xj) 入队，从队尾弹出所有更小值

时间 O(n)，空间 O(n)。

## Solution

[SourceCode](./solution.js)
