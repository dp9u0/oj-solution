# [732] My Calendar III

## Description

[LeetCode Problem Description](https://leetcode.com/problems/my-calendar-iii/description/)

* algorithms
* Hard (71.60%)
* Likes:    2090
* Dislikes: 275
* Testcase Example:  '["MyCalendarThree","book","book","book","book","book","book"]\n' +

```md
'[[],[10,20],[50,60],[10,40],[5,15],[5,10],[25,55]]'
A k-booking happens when k events have some non-empty intersection (i.e., there is some time that is common to all k events.)
You are given some events [startTime, endTime), after each given event, return an integer k representing the maximum k-booking between all the previous events.
Implement the MyCalendarThree class:

MyCalendarThree() Initializes the object.
int book(int startTime, int endTime) Returns an integer k representing the largest integer such that there exists a k-booking in the calendar.


Example 1:

Input
['MyCalendarThree', 'book', 'book', 'book', 'book', 'book', 'book']
[[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]]
Output
[null, 1, 1, 2, 3, 3, 3]
Explanation
MyCalendarThree myCalendarThree = new MyCalendarThree();
myCalendarThree.book(10, 20); // return 1
myCalendarThree.book(50, 60); // return 1
myCalendarThree.book(10, 40); // return 2
myCalendarThree.book(5, 15); // return 3
myCalendarThree.book(5, 10); // return 3
myCalendarThree.book(25, 55); // return 3


Constraints:

0 <= startTime < endTime <= 109
At most 400 calls will be made to book.


```

## 中文翻译

每次添加一个区间 [start, end)，返回当前所有区间中最大的重叠次数（k-booking）。

## 解题思路

**扫描线 + 差分计数**

用 Map 维护每个时间点的变化量：start 处 +1，end 处 -1。每次 book 后扫描排序后的关键点，求前缀和的最大值即为最大重叠数。

由于最多 400 次调用，每次排序 O(800 log 800) 足够快。

时间复杂度：O(n^2 log n)（n 为调用次数），空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
