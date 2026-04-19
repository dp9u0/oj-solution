# [1987] Number of Unique Good Subsequences

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-unique-good-subsequences/description/)

* algorithms
* Hard (52.50%)
* Likes:    749
* Dislikes: 17
* Testcase Example:  '"001"'

```md
You are given a binary string binary. A subsequence of binary is considered good if it is not empty and has no leading zeros (with the exception of '0').
Find the number of unique good subsequences of binary.

For example, if binary = '001', then all the good subsequences are ['0', '0', '1'], so the unique good subsequences are '0' and '1'. Note that subsequences '00', '01', and '001' are not good because they have leading zeros.

Return the number of unique good subsequences of binary. Since the answer may be very large, return it modulo 109 + 7.
A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

Example 1:

Input: binary = '001'
Output: 2
Explanation: The good subsequences of binary are ['0', '0', '1'].
The unique good subsequences are '0' and '1'.

Example 2:

Input: binary = '11'
Output: 2
Explanation: The good subsequences of binary are ['1', '1', '11'].
The unique good subsequences are '1' and '11'.
Example 3:

Input: binary = '101'
Output: 5
Explanation: The good subsequences of binary are ['1', '0', '1', '10', '11', '101'].
The unique good subsequences are '0', '1', '10', '11', and '101'.


Constraints:

1 <= binary.length <= 105
binary consists of only &#39;0&#39;s and &#39;1&#39;s.


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定一个二进制字符串 binary。一个好的子序列是非空的且没有前导零（除了单独的 '0'）。求 binary 的唯一好子序列数量，结果对 10^9+7 取模。

## 解题思路

DP + 去重。维护 endsWith[0] 和 endsWith[1] 表示以 0 或 1 结尾的唯一子序列数量。遍历字符串，对于当前字符 c：
- newEnds = endsWith[0] + endsWith[1] + 1（新开始的子序列）
- 但要减去上次遇到 c 时已有的 endsWith[c]（去重）
- 最后如果有 '0'，再加 1（单独的 '0'）
