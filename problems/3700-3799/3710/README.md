# [3710] Maximum Partition Factor

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-partition-factor/description/)

* algorithms
* Hard (31.33%)
* Likes:    80
* Dislikes: 7
* Testcase Example:  '[[0,0],[0,2],[2,0],[2,2]]'

```md
You are given a 2D integer array points, where points[i] = [xi, yi] represents the coordinates of the ith point on the Cartesian plane.
The Manhattan distance between two points points[i] = [xi, yi] and points[j] = [xj, yj] is
xi - xj
+
yi - yj
.
Split the n points into exactly two non-empty groups. The partition factor of a split is the minimum Manhattan distance among all unordered pairs of points that lie in the same group.
Return the maximum possible partition factor over all valid splits.
Note: A group of size 1 contributes no intra-group pairs. When n = 2 (both groups size 1), there are no intra-group pairs, so define the partition factor as 0.

Example 1:

Input: points = [[0,0],[0,2],[2,0],[2,2]]
Output: 4
Explanation:
We split the points into two groups: {[0, 0], [2, 2]} and {[0, 2], [2, 0]}.


In the first group, the only pair has Manhattan distance
0 - 2
+
0 - 2
= 4.


In the second group, the only pair also has Manhattan distance
0 - 2
+
2 - 0
= 4.


The partition factor of this split is min(4, 4) = 4, which is maximal.

Example 2:

Input: points = [[0,0],[0,1],[10,0]]
Output: 11
Explanation:​​​​​​​
We split the points into two groups: {[0, 1], [10, 0]} and {[0, 0]}.


In the first group, the only pair has Manhattan distance
0 - 10
+
1 - 0
= 11.


The second group is a singleton, so it contributes no pairs.


The partition factor of this split is 11, which is maximal.


Constraints:

2 <= points.length <= 500
points[i] = [xi, yi]
-108 <= xi, yi <= 108


```

## 题目翻译

给定 n 个二维点，分成两个非空组。分割因子 = 同组内所有点对曼哈顿距离的最小值（单元素组不贡献）。求最大分割因子。

## 解题思路

**二分答案 + 二分图判定**

答案满足单调性：若能保证所有组内距离 ≥ d，则也能保证 ≥ d-1。对候选答案 d，建图 G(d)：边 (i,j) 当且仅当 dist(i,j) < d（即 i、j 不能同组）。问题转化为 G(d) 是否为二分图（可 2-染色使冲突点对分到不同组）。

二分搜索排序去重后的所有点对距离，找到最大的 d 使 G(d) 为二分图。n ≤ 500，每次检查 O(n^2)，总复杂度 O(n^2 log n)。

n = 2 时两组各 1 点，无组内距离，答案为 0。

## Solution

[SourceCode](./solution.js)
