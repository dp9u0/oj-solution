# [2719] Count of Integers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-of-integers/description/)

* algorithms
* Hard (38.42%)
* Likes:    576
* Dislikes: 12
* Testcase Example:  '"1"\n"12"\n1\n8'

```md
You are given two numeric strings num1 and num2 and two integers max_sum and min_sum. We denote an integer x to be good if:

num1 <= x <= num2
min_sum <= digit_sum(x) <= max_sum.

Return the number of good integers. Since the answer may be large, return it modulo 109 + 7.
Note that digit_sum(x) denotes the sum of the digits of x.

Example 1:

Input: num1 = '1', num2 = '12', min_sum = 1, max_sum = 8
Output: 11
Explanation: There are 11 integers whose sum of digits lies between 1 and 8 are 1,2,3,4,5,6,7,8,10,11, and 12. Thus, we return 11.

Example 2:

Input: num1 = '1', num2 = '5', min_sum = 1, max_sum = 5
Output: 5
Explanation: The 5 integers whose sum of digits lies between 1 and 5 are 1,2,3,4, and 5. Thus, we return 5.


Constraints:

1 <= num1 <= num2 <= 1022
1 <= min_sum <= max_sum <= 400


```

## 中文翻译

给定数字字符串 num1、num2 和整数 min_sum、max_sum。统计 num1 <= x <= num2 中数字和在 [min_sum, max_sum] 范围内的整数个数。结果对 10^9+7 取模。

约束：num2 长度 <= 22, max_sum <= 400

## 解题思路

**数位 DP**

1. 答案 = count(num2) - count(num1-1)，其中 count(n) 表示 [1, n] 中数字和在范围内的个数。
2. 数位 DP：dp[pos][sum][tight] = 处理到第 pos 位，当前数字和为 sum，是否受上界限制时的方案数。
3. 逐位枚举 0-9，累加和不超过 max_sum 的方案。
4. 最终统计 sum 在 [min_sum, max_sum] 范围内的方案数。

## Solution

[SourceCode](./solution.js)
