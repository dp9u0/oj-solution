# [436] Find Right Interval

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-right-interval/description/)

* algorithms
* Medium (55.64%)
* Likes:    2362
* Dislikes: 398
* Testcase Example:  '[[1,2]]'

```md
You are given an array of intervals, where intervals[i] = [starti, endi] and each starti is unique.
The right interval for an interval i is an interval j such that startj >= endi and startj is minimized. Note that i may equal j.
Return an array of right interval indices for each interval i. If no right interval exists for interval i, then put -1 at index i.

Example 1:

Input: intervals = [[1,2]]
Output: [-1]
Explanation: There is only one interval in the collection, so it outputs -1.

Example 2:

Input: intervals = [[3,4],[2,3],[1,2]]
Output: [-1,0,1]
Explanation: There is no right interval for [3,4].
The right interval for [2,3] is [3,4] since start0 = 3 is the smallest start that is >= end1 = 3.
The right interval for [1,2] is [2,3] since start1 = 2 is the smallest start that is >= end2 = 2.

Example 3:

Input: intervals = [[1,4],[2,3],[3,4]]
Output: [-1,2,-1]
Explanation: There is no right interval for [1,4] and [3,4].
The right interval for [2,3] is [3,4] since start2 = 3 is the smallest start that is >= end1 = 3.


Constraints:

1 <= intervals.length <= 2 * 104
intervals[i].length == 2
-106 <= starti <= endi <= 106
The start point of each interval is unique.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一组区间 intervals，每个区间的起点唯一。区间 i 的"右区间"是满足 startj >= endi 且 startj 最小的区间 j。返回每个区间对应的右区间索引，不存在则为 -1。

## 解题思路

将所有区间按 start 排序（保留原始索引），然后对每个区间的 endi 在排序后的 start 数组中二分查找最小的 >= endi 的值。

时间复杂度 O(n log n)。
