# [2767] Partition String Into Minimum Beautiful Substrings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/description/)

* algorithms
* Medium (53.98%)
* Likes:    383
* Dislikes: 19
* Testcase Example:  '"1011"'

```md
Given a binary string s, partition the string into one or more substrings such that each substring is beautiful.
A string is beautiful if:

It doesn&#39;t contain leading zeros.
It&#39;s the binary representation of a number that is a power of 5.

Return the minimum number of substrings in such partition. If it is impossible to partition the string s into beautiful substrings,return -1.
A substring is a contiguous sequence of characters in a string.

Example 1:

Input: s = '1011'
Output: 2
Explanation: We can paritition the given string into ['101', '1'].
- The string '101' does not contain leading zeros and is the binary representation of integer 51 = 5.
- The string '1' does not contain leading zeros and is the binary representation of integer 50 = 1.
It can be shown that 2 is the minimum number of beautiful substrings that s can be partitioned into.

Example 2:

Input: s = '111'
Output: 3
Explanation: We can paritition the given string into ['1', '1', '1'].
- The string '1' does not contain leading zeros and is the binary representation of integer 50 = 1.
It can be shown that 3 is the minimum number of beautiful substrings that s can be partitioned into.

Example 3:

Input: s = '0'
Output: -1
Explanation: We can not partition the given string into beautiful substrings.


Constraints:

1 <= s.length <= 15
s[i] is either &#39;0&#39; or &#39;1&#39;.


```

## 题目翻译

给定二进制字符串 s，将其分割为若干子串，每个子串无前导零且是 5 的幂的二进制表示。返回最少分割数，不可能则返回 -1。

## 解题思路

预处理所有 5 的幂的二进制串（5^0=1, 5^1=101, 5^2=11001, ...，最多到 5^6=111101000001，15位以内）。然后 DP：dp[i] 表示前 i 个字符的最少分割数，枚举所有以 i 结尾的子串，若为 5 的幂则 dp[i] = min(dp[j-1] + 1)。

## Solution

[SourceCode](./solution.js)
