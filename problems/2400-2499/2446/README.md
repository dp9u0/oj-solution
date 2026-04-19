# [2446] Determine if Two Events Have Conflict

## Description

[LeetCode Problem Description](https://leetcode.com/problems/determine-if-two-events-have-conflict/description/)

* algorithms
* Easy (53.15%)
* Likes:    536
* Dislikes: 72
* Testcase Example:  '["01:15","02:00"]\n["02:00","03:00"]'

```md
You are given two arrays of strings that represent two inclusive events that happened on the same day, event1 and event2, where:

event1 = [startTime1, endTime1] and
event2 = [startTime2, endTime2].

Event times are valid 24 hours format in the form of HH:MM.
A conflict happens when two events have some non-empty intersection (i.e., some moment is common to both events).
Return true if there is a conflict between two events. Otherwise, return false.

Example 1:

Input: event1 = ['01:15','02:00'], event2 = ['02:00','03:00']
Output: true
Explanation: The two events intersect at time 2:00.

Example 2:

Input: event1 = ['01:00','02:00'], event2 = ['01:20','03:00']
Output: true
Explanation: The two events intersect starting from 01:20 to 02:00.

Example 3:

Input: event1 = ['10:00','11:00'], event2 = ['14:00','15:00']
Output: false
Explanation: The two events do not intersect.


Constraints:

event1.length == event2.length == 2
event1[i].length == event2[i].length == 5
startTime1 <= endTime1
startTime2 <= endTime2
All the event times follow the HH:MM format.


```

## 中文翻译

给定两个事件的时间区间 [start, end]（HH:MM 格式，闭区间），判断是否有冲突（有交集）。

## 解题思路

字符串直接比较即可（HH:MM 格式天然有序）。两个区间有交集 <=> max(s1,s2) <= min(e1,e2)。

## Solution

[SourceCode](./solution.js)
