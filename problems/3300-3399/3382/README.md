# [3382] Maximum Area Rectangle With Point Constraints II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-area-rectangle-with-point-constraints-ii/description/)

* algorithms
* Hard (23.97%)
* Likes:    48
* Dislikes: 9
* Testcase Example:  '[1,1,3,3]\n[1,3,1,3]'

```md
There are n points on an infinite plane. You are given two integer arrays xCoord and yCoord where (xCoord[i], yCoord[i]) represents the coordinates of the ith point.
Your task is to find the maximum area of a rectangle that:

Can be formed using four of these points as its corners.
Does not contain any other point inside or on its border.
Has its edgesparallel to the axes.

Return the maximum area that you can obtain or -1 if no such rectangle is possible.

Example 1:

Input: xCoord = [1,1,3,3], yCoord = [1,3,1,3]
Output: 4
Explanation:

We can make a rectangle with these 4 points as corners and there is no other point that lies inside or on the border. Hence, the maximum possible area would be 4.

Example 2:

Input: xCoord = [1,1,3,3,2], yCoord = [1,3,1,3,2]
Output: -1
Explanation:

There is only one rectangle possible is with points [1,1], [1,3], [3,1] and [3,3] but [2,2] will always lie inside it. Hence, returning -1.

Example 3:

Input: xCoord = [1,1,3,3,1,3], yCoord = [1,3,1,3,2,2]
Output: 2
Explanation:

The maximum area rectangle is formed by the points [1,3], [1,2], [3,2], [3,3], which has an area of 2. Additionally, the points [1,1], [1,2], [3,1], [3,2] also form a valid rectangle with the same area.


Constraints:

1 <= xCoord.length == yCoord.length <= 2 * 105
0 <= xCoord[i], yCoord[i]<= 8 * 107
All the given points are unique.


```

## 翻译

给定 n 个点的坐标，找最大面积的轴对齐矩形，满足：四个角都是给定点、矩形内部和边界上没有其他点。不存在则返回 -1。

## 解题思路

按 x 坐标排序后，对同一 x 列上的相邻 y 对，用哈希表记录上一次出现该 y 对的 x 位置。每次遇到重复的 y 对，说明可以构成矩形，面积为 (x2 - x1) * (y2 - y1)。关键问题是如何判断矩形内无其他点。

用扫描线 + 线段树/树状数组：按 x 从左到右扫描，对每个 x 列上的所有 y 坐标在对应位置标记。对于候选矩形 (x1, y1)-(x2, y2)，需要检查 (x1, x2) 区间内的 y 标记数量是否恰好为 4（即只有四个角的点）。具体实现：对 y 坐标离散化，用 BIT 维护每个 y 位置最近被标记的 x 值。对于 y 对 (a,b)，查询区间 [a+1, b-1] 内的最大 x 值是否 < x1，若是则矩形内无点。

O(n log n)。

## Solution

[SourceCode](./solution.js)
