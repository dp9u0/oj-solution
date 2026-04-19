# [2406] Divide Intervals Into Minimum Number of Groups

## Description

[LeetCode Problem Description](https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/description/)

* algorithms
* Medium (63.56%)
* Likes:    1468
* Dislikes: 43
* Testcase Example:  '[[5,10],[6,8],[1,5],[2,3],[1,10]]'

```md
You are given a 2D integer array intervals where intervals[i] = [lefti, righti] represents the inclusive interval [lefti, righti].
You have to divide the intervals into one or more groups such that each interval is in exactly one group, and no two intervals that are in the same group intersect each other.
Return the minimum number of groups you need to make.
Two intervals intersect if there is at least one common number between them. For example, the intervals [1, 5] and [5, 8] intersect.

Example 1:

Input: intervals = [[5,10],[6,8],[1,5],[2,3],[1,10]]
Output: 3
Explanation: We can divide the intervals into the following groups:
- Group 1: [1, 5], [6, 8].
- Group 2: [2, 3], [5, 10].
- Group 3: [1, 10].
It can be proven that it is not possible to divide the intervals into fewer than 3 groups.

Example 2:

Input: intervals = [[1,3],[5,6],[8,10],[11,13]]
Output: 1
Explanation: None of the intervals overlap, so we can put all of them in one group.


Constraints:

1 <= intervals.length <= 105
intervals[i].length == 2
1 <= lefti <= righti <= 106


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一组区间 intervals，将它们分成若干组，每组内的区间互不相交。返回所需的最小组数。

## 解题思路

**差分数组 / 扫描线**

问题等价于：求任意时刻同时存在的最大区间数（最大重叠数）。

方法：将每个区间 [l, r] 拆成两个事件：l 处 +1，r+1 处 -1。按位置排序后扫描，维护当前重叠数，取最大值即为答案。

时间复杂度 O(n log n)，空间复杂度 O(n)。
