# [1523] Count Odd Numbers in an Interval Range

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/description/)

* algorithms
* Easy (54.47%)
* Likes:    3131
* Dislikes: 182
* Testcase Example:  '3\n7'

```md
Given two non-negative integers low and high. Return the count of odd numbers between low and high(inclusive).

Example 1:

Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].
Example 2:

Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9].

Constraints:

0 <= low <= high<= 10^9


```

## 翻译

给定两个非负整数 low 和 high，返回 [low, high] 范围内的奇数个数。

## Approach

区间长度为 high - low + 1。如果 low 和 high 都是奇数，奇数个数为 (high - low) / 2 + 1，否则为 Math.ceil((high - low + 1) / 2)。统一公式：((high - low) >> 1) + (low & 1 | high & 1) 或简单的 Math.floor((high + 1) / 2) - Math.floor(low / 2)。

时间复杂度 O(1)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
