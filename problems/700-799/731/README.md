# [731] My Calendar II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/my-calendar-ii/description/)

* algorithms
* Medium (63.02%)
* Likes:    2282
* Dislikes: 189
* Testcase Example:  '["MyCalendarTwo","book","book","book","book","book","book"]\n' +

```md
'[[],[10,20],[50,60],[10,40],[5,15],[5,10],[25,55]]'
You are implementing a program to use as your calendar. We can add a new event if adding the event will not cause a triple booking.
A triple booking happens when three events have some non-empty intersection (i.e., some moment is common to all the three events.).
The event can be represented as a pair of integers startTime and endTime that represents a booking on the half-open interval [startTime, endTime), the range of real numbers x such that startTime <= x < endTime.
Implement the MyCalendarTwo class:

MyCalendarTwo() Initializes the calendar object.
boolean book(int startTime, int endTime) Returns true if the event can be added to the calendar successfully without causing a triple booking. Otherwise, return false and do not add the event to the calendar.


Example 1:

Input
['MyCalendarTwo', 'book', 'book', 'book', 'book', 'book', 'book']
[[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]]
Output
[null, true, true, true, false, true, true]
Explanation
MyCalendarTwo myCalendarTwo = new MyCalendarTwo();
myCalendarTwo.book(10, 20); // return True, The event can be booked.
myCalendarTwo.book(50, 60); // return True, The event can be booked.
myCalendarTwo.book(10, 40); // return True, The event can be double booked.
myCalendarTwo.book(5, 15);  // return False, The event cannot be booked, because it would result in a triple booking.
myCalendarTwo.book(5, 10); // return True, The event can be booked, as it does not use time 10 which is already double booked.
myCalendarTwo.book(25, 55); // return True, The event can be booked, as the time in [25, 40) will be double booked with the third event, the time [40, 50) will be single booked, and the time [50, 55) will be double booked with the second event.


Constraints:

0 <= start < end <= 109
At most 1000 calls will be made to book.


```

## 翻译

实现日历类，支持预订事件 [start, end)。如果添加事件不会导致三重预订（三个事件有交集），则返回 true 并添加；否则返回 false 不添加。

## Approach

维护两个列表：bookings（所有已预订区间）和 overlaps（所有双重预订区间）。

预订新事件 [start, end) 时：
1. 先检查是否与 overlaps 中任何区间有交集 → 有则导致三重预订，返回 false
2. 否则加入 bookings，并计算与每个已有 booking 的交集加入 overlaps

时间复杂度 O(n) 每次 book，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
