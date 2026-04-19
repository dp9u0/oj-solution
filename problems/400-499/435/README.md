# [435] Non-overlapping Intervals

## Description

[LeetCode Problem Description](https://leetcode.com/problems/non-overlapping-intervals/description/)

* algorithms
* Medium (56.95%)
* Likes:    9135
* Dislikes: 260
* Testcase Example:  '[[1,2],[2,3],[3,4],[1,3]]'

```md
Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
Note that intervals which only touch at a point are non-overlapping. For example, [1, 2] and [2, 3] are non-overlapping.

Example 1:

Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

Example 2:

Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.

Example 3:

Input: intervals = [[1,2],[2,3]]
Output: 0
Explanation: You don&#39;t need to remove any of the intervals since they&#39;re already non-overlapping.


Constraints:

1 <= intervals.length <= 105
intervals[i].length == 2
-5 * 104 <= starti < endi <= 5 * 104


```

## 翻译

给定一个区间数组 `intervals`，其中 `intervals[i] = [starti, endi]`，返回需要移除的最小区间数，使得剩余区间不重叠。

注意：仅在端点处接触的区间不算重叠。例如 `[1,2]` 和 `[2,3]` 不重叠。

## Approach

**贪心。** 按区间右端点排序，贪心地选择右端点最小的区间，这样留给后续区间的空间最大。

- 按右端点升序排序
- 遍历区间，如果当前区间左端点 >= 上一个选中区间的右端点，则保留（不重叠）
- 否则需要移除，计数加一

等价于：求最大不重叠区间数，再用总数减去它。

时间复杂度：O(n log n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
