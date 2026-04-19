# [1404] Number of Steps to Reduce a Number in Binary Representation to One

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/description/)

* algorithms
* Medium (63.73%)
* Likes:    1744
* Dislikes: 101
* Testcase Example:  '"1101"'

```md
Given the binary representation of an integer as a string s, return the number of steps to reduce it to 1 under the following rules:


If the current number is even, you have to divide it by 2.


If the current number is odd, you have to add 1 to it.


It is guaranteed that you can always reach one for all test cases.

Example 1:

Input: s = '1101'
Output: 6
Explanation: '1101' corressponds to number 13 in their decimal representation.
Step 1) 13 is odd, add 1 and obtain 14.
Step 2) 14 is even, divide by 2 and obtain 7.
Step 3) 7 is odd, add 1 and obtain 8.
Step 4) 8 is even, divide by 2 and obtain 4.
Step 5) 4 is even, divide by 2 and obtain 2.
Step 6) 2 is even, divide by 2 and obtain 1.

Example 2:

Input: s = '10'
Output: 1
Explanation: '10' corresponds to number 2 in their decimal representation.
Step 1) 2 is even, divide by 2 and obtain 1.

Example 3:

Input: s = '1'
Output: 0


Constraints:

1 <= s.length<= 500
s consists of characters &#39;0&#39; or &#39;1&#39;
s[0] == &#39;1&#39;


```

## 中文翻译

给定整数的二进制字符串表示 s，按规则将其减到 1：偶数除以 2，奇数加 1。返回步数。

## 解题思路

从右往左遍历二进制字符串。维护 carry 位。末尾为 0（偶数）：右移一步。末尾为 1 且非 '1'（奇数且 >1）：加 1 变偶数再右移，共两步，carry=1。最后只剩 '1' 时结束。从后往前扫描，遇到 '0'+carry → 1 步；'1'+无carry → 2 步，carry=1；'0'+carry → 2 步，carry 传播；'1'+carry → 1 步，carry 继续。

## Solution

[SourceCode](./solution.js)
