# [1353] Maximum Number of Events That Can Be Attended

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/description/)

* algorithms
* Medium (38.94%)
* Likes:    4008
* Dislikes: 635
* Testcase Example:  '[[1,2],[2,3],[3,4]]'

```md
You are given an array of events where events[i] = [startDayi, endDayi]. Every event i starts at startDayi and ends at endDayi.
You can attend an event i at any day d where startDayi <= d <= endDayi. You can only attend one event at any time d.
Return the maximum number of events you can attend.

Example 1:


Input: events = [[1,2],[2,3],[3,4]]
Output: 3
Explanation: You can attend all the three events.
One way to attend them all is as shown.
Attend the first event on day 1.
Attend the second event on day 2.
Attend the third event on day 3.

Example 2:

Input: events= [[1,2],[2,3],[3,4],[1,2]]
Output: 4


Constraints:

1 <= events.length <= 105
events[i].length == 2
1 <= startDayi <= endDayi <= 105


```

## 翻译

给定事件数组events[i]=[startDay,endDay]，每天只能参加一个事件，返回最多能参加多少个事件。

## 解题思路

贪心+最小堆。按startDay排序，逐天扫描：将当天开始的事件加入最小堆（按endDay），移除已过期事件，每次参加endDay最小的事件。

## Solution

[SourceCode](./solution.js)
