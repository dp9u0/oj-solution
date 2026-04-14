# [2048] Next Greater Numerically Balanced Number

## Description

[LeetCode Problem Description](https://leetcode.com/problems/next-greater-numerically-balanced-number/description/)

* algorithms
* Medium (63.10%)
* Likes:    555
* Dislikes: 376
* Testcase Example:  '1'

```md
An integer x is numerically balanced if for every digit d in the number x, there are exactly d occurrences of that digit in x.
Given an integer n, return the smallest numerically balanced number strictly greater than n.

Example 1:

Input: n = 1
Output: 22
Explanation:
22 is numerically balanced since:
- The digit 2 occurs 2 times.
It is also the smallest numerically balanced number strictly greater than 1.

Example 2:

Input: n = 1000
Output: 1333
Explanation:
1333 is numerically balanced since:
- The digit 1 occurs 1 time.
- The digit 3 occurs 3 times.
It is also the smallest numerically balanced number strictly greater than 1000.
Note that 1022 cannot be the answer because 0 appeared more than 0 times.

Example 3:

Input: n = 3000
Output: 3133
Explanation:
3133 is numerically balanced since:
- The digit 1 occurs 1 time.
- The digit 3 occurs 3 times.
It is also the smallest numerically balanced number strictly greater than 3000.


Constraints:

0 <= n <= 106


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

一个整数 x 是"数值平衡"的，当且仅当对于 x 中的每个数字 d，d 在 x 中恰好出现 d 次（如 22 中 2 出现 2 次，1333 中 1 出现 1 次且 3 出现 3 次）。给定 n，返回严格大于 n 的最小数值平衡数。

## 解题思路

由于 n <= 10^6，数值平衡数的位数最多 7 位。预处理所有合法的数值平衡数（通过枚举数字的计数组合），然后二分查找第一个大于 n 的。
或者直接从 n+1 开始逐个检查，因为合法数的密度不低。
更优做法：预生成所有合法排列。每个合法数的结构是若干组数字，每组数字 d 恰好出现 d 次（d 从 1 到 6）。用回溯枚举所有可能的组合并排列，排序后二分查找。
