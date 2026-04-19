# [1450] Number of Students Doing Homework at a Given Time

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/description/)

* algorithms
* Easy (75.82%)
* Likes:    935
* Dislikes: 157
* Testcase Example:  '[1,2,3]\n[3,2,7]\n4'

```md
Given two integer arrays startTime and endTime and given an integer queryTime.
The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].
Return the number of students doing their homework at time queryTime. More formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.

Example 1:

Input: startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
Output: 1
Explanation: We have 3 students where:
The first student started doing homework at time 1 and finished at time 3 and wasn&#39;t doing anything at time 4.
The second student started doing homework at time 2 and finished at time 2 and also wasn&#39;t doing anything at time 4.
The third student started doing homework at time 3 and finished at time 7 and was the only student doing homework at time 4.

Example 2:

Input: startTime = [4], endTime = [4], queryTime = 4
Output: 1
Explanation: The only student was doing their homework at the queryTime.


Constraints:

startTime.length == endTime.length
1 <= startTime.length <= 100
1 <= startTime[i] <= endTime[i] <= 1000
1 <= queryTime <= 1000


```

## 题目翻译

给定 startTime 和 endTime 数组以及 queryTime，求在 queryTime 时刻正在做作业的学生数量（queryTime 在 [startTime[i], endTime[i]] 区间内）。

## 解题思路

遍历每个学生，检查 queryTime 是否在 startTime[i] 和 endTime[i] 之间。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
