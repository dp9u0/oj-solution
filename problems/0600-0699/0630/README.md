# [630] Course Schedule III

## Description

[LeetCode Problem Description](https://leetcode.com/problems/course-schedule-iii/description/)

* algorithms
* Hard (41.55%)
* Likes:    4011
* Dislikes: 103
* Testcase Example:  '[[100,200],[200,1300],[1000,1250],[2000,3200]]'

```md
There are n different online courses numbered from 1 to n. You are given an array courses where courses[i] = [durationi, lastDayi] indicate that the ith course should be taken continuously for durationi days and must be finished before or on lastDayi.
You will start on the 1st day and you cannot take two or more courses simultaneously.
Return the maximum number of courses that you can take.

Example 1:

Input: courses = [[100,200],[200,1300],[1000,1250],[2000,3200]]
Output: 3
Explanation:
There are totally 4 courses, but you can take 3 courses at most:
First, take the 1st course, it costs 100 days so you will finish it on the 100th day, and ready to take the next course on the 101st day.
Second, take the 3rd course, it costs 1000 days so you will finish it on the 1100th day, and ready to take the next course on the 1101st day.
Third, take the 2nd course, it costs 200 days so you will finish it on the 1300th day.
The 4th course cannot be taken now, since you will finish it on the 3300th day, which exceeds the closed date.

Example 2:

Input: courses = [[1,2]]
Output: 1

Example 3:

Input: courses = [[3,2],[4,3]]
Output: 0


Constraints:

1 <= courses.length <= 104
1 <= durationi, lastDayi <= 104


```

## 中文翻译

有 n 门课程，courses[i] = [duration, lastDay] 表示第 i 门课需要持续 duration 天且必须在 lastDay 天之前完成。从第 1 天开始，不能同时上两门课。求最多能上多少门课。

## 解题思路

经典贪心 + 大顶堆。按截止时间排序，依次尝试加入每门课。用最大堆维护已选课程的时长。如果当前总时间 + 新课程时长 <= 截止时间，直接加入。否则，如果新课程时长 < 堆顶（最长课程），替换堆顶，总时间减少差值，使后续更有空间。这样保证选课数量不变但总时间更优。

## Solution

[SourceCode](./solution.js)
