# [539] Minimum Time Difference

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-time-difference/description/)

* algorithms
* Medium (62.58%)
* Likes:    2608
* Dislikes: 320
* Testcase Example:  '["23:59","00:00"]'

```md
Given a list of 24-hour clock time points in 'HH:MM' format, return the minimum minutes difference between any two time-points in the list.

Example 1:
Input: timePoints = ["23:59","00:00"]
Output: 1
Example 2:
Input: timePoints = ["00:00","23:59","00:00"]
Output: 0


Constraints:

2 <= timePoints.length <= 2 * 104
timePoints[i] is in the format 'HH:MM'.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定 24 小时制时间点列表（HH:MM 格式），返回任意两个时间点之间的最小分钟差。

## 解题思路

将时间转为分钟数，排序后比较相邻差。注意环形：最后一个和第一个的跨天差也要比较（1440 - last + first）。如果有重复时间直接返回 0。O(n log n)。
