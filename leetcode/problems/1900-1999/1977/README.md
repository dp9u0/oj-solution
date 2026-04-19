# [1977] Number of Ways to Separate Numbers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-ways-to-separate-numbers/description/)

* algorithms
* Hard (21.62%)
* Likes:    538
* Dislikes: 61
* Testcase Example:  '"327"'

```md
You wrote down many positive integers in a string called num. However, you realized that you forgot to add commas to seperate the different numbers. You remember that the list of integers was non-decreasing and that no integer had leading zeros.
Return the number of possible lists of integers that you could have written down to get the string num. Since the answer may be large, return it modulo 109 + 7.

Example 1:

Input: num = '327'
Output: 2
Explanation: You could have written down the numbers:
3, 27
327

Example 2:

Input: num = '094'
Output: 0
Explanation: No numbers can have leading zeros and all numbers must be positive.

Example 3:

Input: num = '0'
Output: 0
Explanation: No numbers can have leading zeros and all numbers must be positive.


Constraints:

1 <= num.length <= 3500
num consists of digits &#39;0&#39; through &#39;9&#39;.


```

## 题目翻译

将一个由数字字符组成的字符串 num 拆分成一个非递减的正整数序列（无前导零），求有多少种拆分方式，结果对 10^9+7 取模。

## 解题思路

**DP + LCP 预处理**

1. 预处理 LCP 数组：lcp[i][j] = num[i..] 和 num[j..] 的最长公共前缀长度，用于 O(1) 比较等长子串大小
2. 定义 dp[i][j] = 拆分 num[0..i-1] 且最后一段长度为 j 的方案数
3. 转移：dp[i][j] = S[i-j][j-1] + (前一段 <= 后一段 ? dp[i-j][j] : 0)
   - 前一段更短：一定 <= 后一段
   - 前一段等长：用 LCP 比较
4. S[i][j] = dp[i][1] + ... + dp[i][j] 前缀和优化

时间 O(n²)，空间 O(n²)。

## Solution

[SourceCode](./solution.js)
