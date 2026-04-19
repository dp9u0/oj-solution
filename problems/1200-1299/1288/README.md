# [1288] Remove Covered Intervals

## Description

[LeetCode Problem Description](https://leetcode.com/problems/remove-covered-intervals/description/)

* algorithms
* Medium (56.08%)
* Likes:    2314
* Dislikes: 61
* Testcase Example:  '[[1,4],[3,6],[2,8]]'

```md
Given an array intervals where intervals[i] = [li, ri] represent the interval [li, ri), remove all intervals that are covered by another interval in the list.
The interval [a, b) is covered by the interval [c, d) if and only if c <= a and b <= d.
Return the number of remaining intervals.

Example 1:

Input: intervals = [[1,4],[3,6],[2,8]]
Output: 2
Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.

Example 2:

Input: intervals = [[1,4],[2,3]]
Output: 1


Constraints:

1 <= intervals.length <= 1000
intervals[i].length == 2
0 <= li < ri <= 105
All the given intervals are unique.


```

## 题目翻译

给定区间数组，删除所有被其他区间覆盖的区间（[a,b) 被 [c,d) 覆盖当 c<=a 且 b<=d），返回剩余区间数。

## 解题思路

**排序 + 扫描**

按左端点升序、右端点降序排序。遍历时维护当前最大右端点，若当前右端点 <= 最大右端点则被覆盖。

## Solution

[SourceCode](./solution.js)
