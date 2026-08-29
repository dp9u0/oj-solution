# [3975] Filter Occupied Intervals

## Description

[LeetCode Problem Description](https://leetcode.com/problems/filter-occupied-intervals/description/)

* algorithms
* Medium (45.85%)
* Likes:    77
* Dislikes: 9
* Testcase Example:  '[[2,6],[4,8],[10,10],[10,12],[14,16]]\n7\n11'

```md
You are given a 2D integer array occupiedIntervals, where occupiedIntervals[i] = [starti, endi] represents a time interval during which you are occupied. Each interval starts at starti and ends at endi, inclusive. These intervals may overlap.
You are also given two integers freeStart and freeEnd, which define a free time interval from freeStart to freeEnd, inclusive.
Your task is to merge all occupied intervals that overlap or touch, then remove all integer points in the free interval from the merged occupied intervals.
Two intervals touch if the second interval starts immediately after the first one ends. For example, [1, 1] and [2, 2] touch and should be merged into [1, 2].
Return the remaining occupied intervals in sorted order. The returned intervals must be non-overlapping and must contain the minimum number of intervals possible. If there are no remaining occupied points, return an empty list.

Example 1:

Input: occupiedIntervals = [[2,6],[4,8],[10,10],[10,12],[14,16]], freeStart = 7, freeEnd = 11
Output: [[2,6],[12,12],[14,16]]
Explanation:

After merging, the occupied intervals are [2, 8], [10, 12], and [14, 16].
Excluding the free interval [7, 11] results in [2, 6], [12, 12], and [14, 16].


Example 2:

Input: occupiedIntervals = [[1,5],[2,3]], freeStart = 3, freeEnd = 8
Output: [[1,2]]
Explanation:

After merging, the occupied interval is [1, 5].
Excluding the free interval [3, 8] results in [1, 2].



Constraints:

1 <= occupiedIntervals.length <= 5 * 104
occupiedIntervals[i].length == 2
1 <= starti <= endi <= 109
1 <= freeStart <= freeEnd <= 109


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定占用区间 `occupiedIntervals`（闭区间，可重叠）与空闲区间 `[freeStart, freeEnd]`。先把**重叠或相触**（后者起点 = 前者终点+1）的占用区间合并，再从合并结果中去掉落在空闲区间内的整数点。返回剩余占用区间（有序、最少段数）；空则返回 `[]`。

示例 1：`[[2,6],[4,8],[10,10],[10,12],[14,16]], 7, 11` → `[[2,6],[12,12],[14,16]]`
示例 2：`[[1,5],[2,3]], 3, 8` → `[[1,2]]`

## 解题思路

排序后线性合并（相触条件 `s <= last.end + 1`），再对每段与 `[freeStart, freeEnd]` 做区间减法：完全在外保留；相交则保留左余量 `[s, freeStart−1]` 与右余量 `[freeEnd+1, e]`（存在才留）。O(n log n)。
