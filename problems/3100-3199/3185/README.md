# [3185] Count Pairs That Form a Complete Day II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-pairs-that-form-a-complete-day-ii/description/)

* algorithms
* Medium (43.70%)
* Likes:    197
* Dislikes: 12
* Testcase Example:  '[12,12,30,24,24]'

```md
Given an integer array hours representing times in hours, return an integer denoting the number of pairs i, j where i < j and hours[i] + hours[j] forms a complete day.
A complete day is defined as a time duration that is an exact multiple of 24 hours.
For example, 1 day is 24 hours, 2 days is 48 hours, 3 days is 72 hours, and so on.

Example 1:

Input: hours = [12,12,30,24,24]
Output: 2
Explanation: The pairs of indices that form a complete day are (0, 1) and (3, 4).

Example 2:

Input: hours = [72,48,24,3]
Output: 3
Explanation: The pairs of indices that form a complete day are (0, 1), (0, 2), and (1, 2).


Constraints:

1 <= hours.length <= 5 * 105
1 <= hours[i] <= 109


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数数组 hours，返回满足 i < j 且 hours[i] + hours[j] 是 24 的倍数的数对 (i, j) 的个数。

## 解题思路

**取模 + 计数**

hours[i] + hours[j] 是 24 的倍数 等价于 (hours[i] % 24 + hours[j] % 24) % 24 == 0。

将每个 hours[i] 对 24 取模得到余数 r（0~23），问题转化为：统计有多少对 (i, j) 满足 (r[i] + r[j]) % 24 == 0。

用长度 24 的数组统计每个余数出现的次数，遍历时对于当前余数 r，找配对余数 (24 - r) % 24 的计数累加。

时间复杂度 O(n)，空间复杂度 O(24) = O(1)。
