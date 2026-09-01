# [715] Range Module

## Description

[LeetCode Problem Description](https://leetcode.com/problems/range-module/description/)

* algorithms
* Hard (45.46%)
* Likes:    1610
* Dislikes: 144
* Testcase Example:  '["RangeModule","addRange","removeRange","queryRange","queryRange","queryRange"]\n' +

```md
'[[],[10,20],[14,16],[10,14],[13,15],[16,17]]'
A Range Module is a module that tracks ranges of numbers. Design a data structure to track the ranges represented as half-open intervals and query about them.
A half-open interval [left, right) denotes all the real numbers x where left <= x < right.
Implement the RangeModule class:

RangeModule() Initializes the object of the data structure.
void addRange(int left, int right) Adds the half-open interval [left, right), tracking every real number in that interval. Adding an interval that partially overlaps with currently tracked numbers should add any numbers in the interval [left, right) that are not already tracked.
boolean queryRange(int left, int right) Returns true if every real number in the interval [left, right) is currently being tracked, and false otherwise.
void removeRange(int left, int right) Stops tracking every real number currently being tracked in the half-open interval [left, right).


Example 1:

Input
['RangeModule', 'addRange', 'removeRange', 'queryRange', 'queryRange', 'queryRange']
[[], [10, 20], [14, 16], [10, 14], [13, 15], [16, 17]]
Output
[null, null, null, true, false, true]
Explanation
RangeModule rangeModule = new RangeModule();
rangeModule.addRange(10, 20);
rangeModule.removeRange(14, 16);
rangeModule.queryRange(10, 14); // return True,(Every number in [10, 14) is being tracked)
rangeModule.queryRange(13, 15); // return False,(Numbers like 14, 14.03, 14.17 in [13, 15) are not being tracked)
rangeModule.queryRange(16, 17); // return True, (The number 16 in [16, 17) is still being tracked, despite the remove operation)


Constraints:

1 <= left < right <= 109
At most 104 calls will be made to addRange, queryRange, and removeRange.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

设计 RangeModule：`addRange(left, right)` 追踪半开区间 [left, right)（并上已追踪集合）；`queryRange(left, right)` 判断 [left, right) 是否全部被追踪；`removeRange(left, right)` 移除该范围内的追踪。

示例：add(10,20) → remove(14,16) → query(10,14)=true, query(13,15)=false, query(16,17)=true

## 解题思路

维护**有序不相交区间数组**（平行的 l/r 数组）：

- add：把与 [left,right) 相交的区间全部吸收合并成一个大区间后重新插入（保持有序）；
- remove：相交区间被切成左/右残余片段保留；
- query：二分找第一个 right > left 的区间，检查它是否完整覆盖 [left, right)。

各操作 O(n)（合并线性重建）或 O(log n)（查询）。