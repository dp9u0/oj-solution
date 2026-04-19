# [2217] Find Palindrome With Fixed Length

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-palindrome-with-fixed-length/description/)

* algorithms
* Medium (38.01%)
* Likes:    664
* Dislikes: 297
* Testcase Example:  '[1,2,3,4,5,90]\n3'

```md
Given an integer array queries and a positive integer intLength, return an array answer where answer[i] is either the queries[i]th smallest positive palindrome of length intLength or -1 if no such palindrome exists.
A palindrome is a number that reads the same backwards and forwards. Palindromes cannot have leading zeros.

Example 1:

Input: queries = [1,2,3,4,5,90], intLength = 3
Output: [101,111,121,131,141,999]
Explanation:
The first few palindromes of length 3 are:
101, 111, 121, 131, 141, 151, 161, 171, 181, 191, 202, ...
The 90th palindrome of length 3 is 999.

Example 2:

Input: queries = [2,4,6], intLength = 4
Output: [1111,1331,1551]
Explanation:
The first six palindromes of length 4 are:
1001, 1111, 1221, 1331, 1441, and 1551.


Constraints:

1 <= queries.length <= 5 * 104
1 <= queries[i] <= 109
1 <= intLength<= 15


```

## 题目翻译

给定queries数组和整数intLength，返回每个query对应的第query个长度为intLength的回文数，不存在则返回-1。回文数不能有前导零。

## 解题思路

长度为n的回文数由前半部分决定。前半部分长度为`half = ceil(n/2)`，第k个回文数的前半部分是`10^(half-1) + k - 1`。将前半部分拼上其反转（奇数长度去掉最后一位）即可。如果前半部分超过`10^half - 1`则返回-1。

## Solution

[SourceCode](./solution.js)
