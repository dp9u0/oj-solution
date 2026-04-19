# [3873] Maximum Points Activated with One Addition

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-points-activated-with-one-addition/description/)

* algorithms
* Hard (43.71%)
* Likes:    68
* Dislikes: 1
* Testcase Example:  '[[1,1],[1,2],[2,2]]'

```md
You are given a 2D integer array points, where points[i] = [xi, yi] represents the coordinates of the ith point. All coordinates in points are distinct.
If a point is activated, then all points that have the same x-coordinate or y-coordinate become activated as well.
Activation continues until no additional points can be activated.
You may add one additional point at any integer coordinate (x, y) not already present in points. Activation begins by activating this newly added point.
Return an integer denoting the maximum number of points that can be activated, including the newly added point.

Example 1:

Input: points = [[1,1],[1,2],[2,2]]
Output: 4
Explanation:
Adding and activating a point such as (1, 3) causes activations:

(1, 3) shares x = 1 with (1, 1) and (1, 2) -> (1, 1) and (1, 2) become activated.
(1, 2) shares y = 2 with (2, 2) -> (2, 2) becomes activated.

Thus, the activated points are (1, 3), (1, 1), (1, 2), (2, 2), so 4 points in total. We can show this is the maximum activated.

Example 2:

Input: points = [[2,2],[1,1],[3,3]]
Output: 3
Explanation:
Adding and activating a point such as (1, 2) causes activations:

(1, 2) shares x = 1 with (1, 1) -> (1, 1) becomes activated.
(1, 2) shares y = 2 with (2, 2) -> (2, 2) becomes activated.

Thus, the activated points are (1, 2), (1, 1), (2, 2), so 3 points in total. We can show this is the maximum activated.

Example 3:

Input: points = [[2,3],[2,2],[1,1],[4,5]]
Output: 4
Explanation:
Adding and activating a point such as (2, 1) causes activations:

(2, 1) shares x = 2 with (2, 3) and (2, 2) -> (2, 3) and (2, 2) become activated.
(2, 1) shares y = 1 with (1, 1) -> (1, 1) becomes activated.

Thus, the activated points are (2, 1), (2, 3), (2, 2), (1, 1), so 4 points in total.


Constraints:

1 <= points.length <= 105
points[i] = [xi, yi]
-109 <= xi, yi <= 109
points contains all distinct coordinates.


```

## 题目翻译

给定二维整数数组 points，若一个点被激活，则所有与之共享 x 或 y 坐标的点也被激活（传递）。可以添加一个不在原集合中的新点作为起始激活点。求最大激活点数（含新点）。

## 解题思路

**二分图 + 并查集**

将问题建模为二分图：x 坐标和 y 坐标分别在两侧，每个点 (x, y) 是一条边。用并查集求连通分量，每个分量的"大小"= 该分量中的边数（即原始点数）。

添加新点 (x, y) 相当于添加一条边连接 x 节点和 y 节点：
- 若 x 在分量 A、y 在分量 B（A ≠ B）：合并 A 和 B，激活数 = size(A) + size(B) + 1
- 若只有一个分量：激活数 = size + 1（添加到已有 x 或 y）

由于不同分量间没有边，任取 A 中 x 和 B 中 y 即可合并，故答案 = 最大两个分量大小之和 + 1。

时间 O(n α(n))，空间 O(n)。

## Solution

[SourceCode](./solution.js)
