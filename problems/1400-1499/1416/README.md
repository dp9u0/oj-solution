# [1416] Restore The Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/restore-the-array/description/)

* algorithms
* Hard (46.76%)
* Likes:    1673
* Dislikes: 53
* Testcase Example:  '"1000"\n10000'

```md
A program was supposed to print an array of integers. The program forgot to print whitespaces and the array is printed as a string of digits s and all we know is that all integers in the array were in the range [1, k] and there are no leading zeros in the array.
Given the string s and the integer k, return the number of the possible arrays that can be printed as s using the mentioned program. Since the answer may be very large, return it modulo 109 + 7.

Example 1:

Input: s = '1000', k = 10000
Output: 1
Explanation: The only possible array is [1000]

Example 2:

Input: s = '1000', k = 10
Output: 0
Explanation: There cannot be an array that was printed this way and has all integer >= 1 and <= 10.

Example 3:

Input: s = '1317', k = 2000
Output: 8
Explanation: Possible arrays are [1317],[131,7],[13,17],[1,317],[13,1,7],[1,31,7],[1,3,17],[1,3,1,7]


Constraints:

1 <= s.length <= 105
s consists of only digits and does not contain leading zeros.
1 <= k <= 109


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

数字字符串 s 被去掉空格打印出来，已知原数组中每个整数在 [1, k] 范围内且无前导零。求有多少种合法的分割方案。答案 mod 10^9+7。

## 解题思路

DP。dp[i] = 分割 s[0..i-1] 的方案数。转移：枚举最后一段长度 j（1 到 min(i, k的位数)），若 s[i-j] ≠ '0' 且数值 ≤ k，则 dp[i] += dp[i-j]。k ≤ 10^9 所以 j 最多 10，总 O(10n)。
