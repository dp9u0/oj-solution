# [3184] Count Pairs That Form a Complete Day I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i/description/)

* algorithms
* Easy (78.12%)
* Likes:    166
* Dislikes: 12
* Testcase Example:  '[12,12,30,24,24]'

```md
Given an integer array hours representing times in hours, return an integer denoting the number of pairs i, j where i < j and hours[i] + hours[j] forms a complete day.
A complete day is defined as a time duration that is an exact multiple of 24 hours.
For example, 1 day is 24 hours, 2 days is 48 hours, 3 days is 72 hours, and so on.

Example 1:

Input: hours = [12,12,30,24,24]
Output: 2
Explanation:
The pairs of indices that form a complete day are (0, 1) and (3, 4).

Example 2:

Input: hours = [72,48,24,3]
Output: 3
Explanation:
The pairs of indices that form a complete day are (0, 1), (0, 2), and (1, 2).


Constraints:

1 <= hours.length <= 100
1 <= hours[i] <= 109


```

## 题目翻译

给定整数数组 hours，返回满足 i < j 且 hours[i]+hours[j] 是 24 的倍数的数对个数。

## 解题思路

用 cnt 数组统计每个 hours[i]%24 的出现次数，然后匹配余数 r 和 (24-r)%24 的配对数。

## Solution

[SourceCode](./solution.js)
