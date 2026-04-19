# [1584] Min Cost to Connect All Points

## Description

[LeetCode Problem Description](https://leetcode.com/problems/min-cost-to-connect-all-points/description/)

* algorithms
* Medium (70.64%)
* Likes:    5636
* Dislikes: 148
* Testcase Example:  '[[0,0],[2,2],[3,10],[5,2],[7,0]]'

```md
You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].
The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them:
xi - xj
+
yi - yj
, where
val
denotes the absolute value of val.
Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.

Example 1:


Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
Output: 20
Explanation:

We can connect the points as shown above to get the minimum cost of 20.
Notice that there is a unique path between every pair of points.

Example 2:

Input: points = [[3,12],[-2,5],[-4,1]]
Output: 18


Constraints:

1 <= points.length <= 1000
-106 <= xi, yi <= 106
All pairs (xi, yi) are distinct.


```

## 翻译

给定二维平面上点的坐标数组 `points`，连接两点的代价为曼哈顿距离。求使所有点连通的最小代价（即最小生成树）。

## Approach

**Prim 算法（最小生成树）。** 从节点 0 开始，维护 `minDist` 数组表示每个未加入节点到当前 MST 的最小距离。每轮选择距离最小的节点加入 MST，并更新其余节点的距离。

时间复杂度：O(n^2)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
