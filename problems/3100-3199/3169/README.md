# [3169] Count Days Without Meetings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-days-without-meetings/description/)

* algorithms
* Medium (48.11%)
* Likes:    786
* Dislikes: 19
* Testcase Example:  '10\n[[5,7],[1,3],[9,10]]'

```md
You are given a positive integer days representing the total number of days an employee is available for work (starting from day 1). You are also given a 2D array meetings of size n where, meetings[i] = [start_i, end_i] represents the starting and ending days of meeting i (inclusive).
Return the count of days when the employee is available for work but no meetings are scheduled.
Note: The meetings may overlap.

Example 1:

Input: days = 10, meetings = [[5,7],[1,3],[9,10]]
Output: 2
Explanation:
There is no meeting scheduled on the 4th and 8th days.

Example 2:

Input: days = 5, meetings = [[2,4],[1,3]]
Output: 1
Explanation:
There is no meeting scheduled on the 5th day.

Example 3:

Input: days = 6, meetings = [[1,6]]
Output: 0
Explanation:
Meetings are scheduled for all working days.


Constraints:

1 <= days <= 109
1 <= meetings.length <= 105
meetings[i].length == 2
1 <= meetings[i][0] <= meetings[i][1] <= days


```

## 中文翻译

给定正整数 `days` 表示员工可工作的总天数（从第1天开始），以及一个二维数组 `meetings`，`meetings[i] = [start_i, end_i]` 表示第 i 个会议的起止天数（包含两端）。

返回员工可工作但没有会议安排的天数。注意会议可能重叠。

## 解题思路

**区间合并：**

1. 按起始时间排序所有会议区间
2. 合并重叠或相邻的区间
3. 用总天数减去合并后的区间总长度即为空闲天数
4. 注意最后一段到 days 之间的空隙也要计算

时间复杂度：O(n log n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
