# [2276] Count Integers in Intervals

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-integers-in-intervals/description/)

* algorithms
* Hard (35.84%)
* Likes:    626
* Dislikes: 64
* Testcase Example:  '["CountIntervals","add","add","count","add","count"]\n' +

```md
'[[],[2,3],[7,10],[],[5,8],[]]'
Given an empty set of intervals, implement a data structure that can:

Add an interval to the set of intervals.
Count the number of integers that are present in at least one interval.

Implement the CountIntervals class:

CountIntervals() Initializes the object with an empty set of intervals.
void add(int left, int right) Adds the interval [left, right] to the set of intervals.
int count() Returns the number of integers that are present in at least one interval.

Note that an interval [left, right] denotes all the integers x where left <= x <= right.

Example 1:

Input
['CountIntervals', 'add', 'add', 'count', 'add', 'count']
[[], [2, 3], [7, 10], [], [5, 8], []]
Output
[null, null, null, 6, null, 8]
Explanation
CountIntervals countIntervals = new CountIntervals(); // initialize the object with an empty set of intervals.
countIntervals.add(2, 3);  // add [2, 3] to the set of intervals.
countIntervals.add(7, 10); // add [7, 10] to the set of intervals.
countIntervals.count();    // return 6
// the integers 2 and 3 are present in the interval [2, 3].
// the integers 7, 8, 9, and 10 are present in the interval [7, 10].
countIntervals.add(5, 8);  // add [5, 8] to the set of intervals.
countIntervals.count();    // return 8
// the integers 2 and 3 are present in the interval [2, 3].
// the integers 5 and 6 are present in the interval [5, 8].
// the integers 7 and 8 are present in the intervals [5, 8] and [7, 10].
// the integers 9 and 10 are present in the interval [7, 10].


Constraints:

1 <= left <= right <= 109
At most 105 calls in total will be made to add and count.
At least one call will be made to count.


```

## 翻译

实现数据结构：支持 add(left,right) 添加区间，count() 返回被至少一个区间覆盖的整数个数。

## 解题思路

维护有序不重叠区间列表。add 时用二分找所有重叠/相邻区间，合并后替换。用 cnt 变量实时维护总数，count() O(1)。合并相邻区间简化结构。总体 O(n log n) 摊还。

## Solution

[SourceCode](./solution.js)
