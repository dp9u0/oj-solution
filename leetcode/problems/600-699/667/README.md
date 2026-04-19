# [667] Beautiful Arrangement II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/beautiful-arrangement-ii/description/)

* algorithms
* Medium (61.04%)
* Likes:    827
* Dislikes: 1060
* Testcase Example:  '3\n1'

```md
Given two integers n and k, construct a list answer that contains n different positive integers ranging from 1 to n and obeys the following requirement:

Suppose this list is answer =[a1, a2, a3, ... , an], then the list [
a1 - a2
,
a2 - a3
,
a3 - a4
, ... ,
an-1 - an
] has exactly k distinct integers.

Return the list answer. If there multiple valid answers, return any of them.

Example 1:

Input: n = 3, k = 1
Output: [1,2,3]
Explanation: The [1,2,3] has three different positive integers ranging from 1 to 3, and the [1,1] has exactly 1 distinct integer: 1

Example 2:

Input: n = 3, k = 2
Output: [1,3,2]
Explanation: The [1,3,2] has three different positive integers ranging from 1 to 3, and the [2,1] has exactly 2 distinct integers: 1 and 2.


Constraints:

1 <= k < n <= 104


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定 n 和 k，构造一个 1 到 n 的排列，使得相邻差恰好有 k 个不同的值。

## 解题思路

先放 1, 2, ..., n-k-1（差都是 1），然后对剩余的 [n-k, n] 交替取首尾来产生 k-1 个不同的差值。
