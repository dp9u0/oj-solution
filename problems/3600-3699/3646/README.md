# [3646] Next Special Palindrome Number

## Description

[LeetCode Problem Description](https://leetcode.com/problems/next-special-palindrome-number/description/)

* algorithms
* Hard (27.98%)
* Likes:    65
* Dislikes: 5
* Testcase Example:  '2'

```md
You are given an integer n.
A number is called special if:

It is a palindrome.
Every digit k in the number appears exactly k times.

Return the smallest special number strictly greater than n.

Example 1:

Input: n = 2
Output: 22
Explanation:
22 is the smallest special number greater than 2, as it is a palindrome and the digit 2 appears exactly 2 times.

Example 2:

Input: n = 33
Output: 212
Explanation:
212 is the smallest special number greater than 33, as it is a palindrome and the digits 1 and 2 appear exactly 1 and 2 times respectively.



Constraints:

0 <= n <= 1015


```

## 翻译

给定整数 n，返回严格大于 n 的最小"特殊数"。特殊数满足：1) 是回文数；2) 每个数字 k 在数中恰好出现 k 次。

## 解题思路

枚举所有合法的数字子集。数字 k（1-9）要么出现 0 次要么恰好 k 次。回文数要求：至多一个奇数频次的数字（放在中间），其余数字频次为偶数。奇数频次数字即 k 为奇数。对每个合法子集，构造前半部分的多重集，生成所有唯一排列，拼接成回文数。收集所有特殊数排序，二分查找第一个 > n 的。

## Solution

[SourceCode](./solution.js)
