# [1039] Minimum Score Triangulation of Polygon

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-score-triangulation-of-polygon/description/)

* algorithms
* Medium (67.41%)
* Likes:    2323
* Dislikes: 304
* Testcase Example:  '[1,2,3]'

```md
You have a convex n-sided polygon where each vertex has an integer value. You are given an integer array values where values[i] is the value of the ith vertex in clockwise order.
Polygon triangulation is a process where you divide a polygon into a set of triangles and the vertices of each triangle must also be vertices of the original polygon. Note that no other shapes other than triangles are allowed in the division. This process will result in n - 2 triangles.
You will triangulate the polygon. For each triangle, the weight of that triangle is the product of the values at its vertices. The total score of the triangulation is the sum of these weights over all n - 2 triangles.
Return the minimum possible score that you can achieve with some triangulation of the polygon.

Example 1:


Input: values = [1,2,3]
Output: 6
Explanation: The polygon is already triangulated, and the score of the only triangle is 6.

Example 2:


Input: values = [3,7,4,5]
Output: 144
Explanation: There are two triangulations, with possible scores: 3*7*5 + 4*5*7 = 245, or 3*4*5 + 3*4*7 = 144.
The minimum score is 144.

Example 3:
​​​​​​​

Input: values = [1,3,1,4,1,5]
Output: 13
Explanation: The minimum score triangulation is 1*1*3 + 1*1*4 + 1*1*5 + 1*1*1 = 13.


Constraints:

n == values.length
3 <= n <= 50
1 <= values[i] <= 100


```

## 中文翻译

给定凸多边形各顶点的值，将其三角剖分，每个三角形的权重为顶点值之积，总分等于所有三角形权重之和。求最小总分。

## 解题思路

区间 DP：dp[i][j] 表示顶点 i 到 j 构成的多边形的最小三角剖分分数。枚举中间顶点 k（i < k < j），dp[i][j] = min(dp[i][k] + dp[k][j] + values[i]*values[k]*values[j])。

按区间长度从小到大枚举。

时间复杂度：O(n^3)，空间复杂度：O(n^2)

## Solution

[SourceCode](./solution.js)
