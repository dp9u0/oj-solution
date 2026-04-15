# [729] My Calendar I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/my-calendar-i/description/)

* algorithms
* Medium (58.27%)
* Likes:    4824
* Dislikes: 140
* Testcase Example:  '["MyCalendar","book","book","book"]\n[[],[10,20],[15,25],[20,30]]'

```md
You are implementing a program to use as your calendar. We can add a new event if adding the event will not cause a double booking.
A double booking happens when two events have some non-empty intersection (i.e., some moment is common to both events.).
The event can be represented as a pair of integers startTime and endTime that represents a booking on the half-open interval [startTime, endTime), the range of real numbers x such that startTime <= x < endTime.
Implement the MyCalendar class:

MyCalendar() Initializes the calendar object.
boolean book(int startTime, int endTime) Returns true if the event can be added to the calendar successfully without causing a double booking. Otherwise, return false and do not add the event to the calendar.


Example 1:

Input
['MyCalendar', 'book', 'book', 'book']
[[], [10, 20], [15, 25], [20, 30]]
Output
[null, true, false, true]
Explanation
MyCalendar myCalendar = new MyCalendar();
myCalendar.book(10, 20); // return True
myCalendar.book(15, 25); // return False, It can not be booked because time 15 is already booked by another event.
myCalendar.book(20, 30); // return True, The event can be booked, as the first event takes every time less than 20, but not including 20.

Constraints:

0 <= start < end <= 109
At most 1000 calls will be made to book.


```

## 题目翻译

实现日历类，支持 `book(start, end)` 在半开区间 [start, end) 预订。如果与已有预订冲突返回 false，否则预订并返回 true。

## 解题思路

维护已预订区间列表。每次预订时检查新区间是否与所有已有区间冲突（新区间 start < 已有 end 且新区间 end > 已有 start）。不冲突则加入列表。

时间复杂度：O(n) 每次 book，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
