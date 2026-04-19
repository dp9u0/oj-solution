# [1893] Check if All the Integers in a Range Are Covered

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/description/)

* algorithms
* Easy (50.91%)
* Likes:    676
* Dislikes: 127
* Testcase Example:  '[[1,2],[3,4],[5,6]]\n2\n5'

```md
You are given a 2D integer array ranges and two integers left and right. Each ranges[i] = [starti, endi] represents an inclusive interval between starti and endi.
Return true if each integer in the inclusive range [left, right] is covered by at least one interval in ranges. Return false otherwise.
An integer x is covered by an interval ranges[i] = [starti, endi] if starti <= x <= endi.

Example 1:

Input: ranges = [[1,2],[3,4],[5,6]], left = 2, right = 5
Output: true
Explanation: Every integer between 2 and 5 is covered:
- 2 is covered by the first range.
- 3 and 4 are covered by the second range.
- 5 is covered by the third range.

Example 2:

Input: ranges = [[1,10],[10,20]], left = 21, right = 21
Output: false
Explanation: 21 is not covered by any range.


Constraints:

1 <= ranges.length <= 50
1 <= starti <= endi <= 50
1 <= left <= right <= 50


```

## 中文翻译

给定区间数组 ranges 和整数 left、right，判断 [left, right] 中的每个整数是否都被至少一个区间覆盖。

## 解题思路

用差分数组标记区间覆盖，统计前缀和判断每个点是否被覆盖。

时间复杂度：O(n + maxVal)，空间复杂度：O(maxVal)

## Solution

[SourceCode](./solution.js)
