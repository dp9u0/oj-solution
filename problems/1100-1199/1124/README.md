# [1124] Longest Well-Performing Interval

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-well-performing-interval/description/)

* algorithms
* Medium (37.47%)
* Likes:    1542
* Dislikes: 123
* Testcase Example:  '[9,9,6,0,6,6,9]'

```md
We are given hours, a list of the number of hours worked per day for a given employee.
A day is considered to be a tiring day if and only if the number of hours worked is (strictly) greater than 8.
A well-performing interval is an interval of days for which the number of tiring days is strictly larger than the number of non-tiring days.
Return the length of the longest well-performing interval.

Example 1:

Input: hours = [9,9,6,0,6,6,9]
Output: 3
Explanation: The longest well-performing interval is [9,9,6].

Example 2:

Input: hours = [6,6,6]
Output: 0


Constraints:

1 <= hours.length <= 104
0 <= hours[i] <= 16


```

## 翻译

给定每天工作小时数数组 `hours`，工作超过 8 小时为"劳累天"。找到最长的区间，使得劳累天数严格大于非劳累天数，返回该区间长度。

## Approach

**前缀和 + 哈希表。** 将 >8 的天记为 +1，<=8 的天记为 -1。问题转化为：找最长的子数组，其前缀和之差 > 0（即 prefix[j] - prefix[i] > 0，等价于 prefix[i] < prefix[j]）。

用哈希表记录每个前缀和值第一次出现的位置。遍历时：
- 若当前前缀和 > 0，从开头到当前位置就是合法区间，直接更新
- 否则查找 prefix - 1 是否出现过（若 prefix[i] = prefix[j] - 1，则差为 1 > 0）

只记录每个前缀和值的最早出现位置，保证区间最长。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
