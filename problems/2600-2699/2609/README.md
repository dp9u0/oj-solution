# [2609] Find the Longest Balanced Substring of a Binary String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/description/)

* algorithms
* Easy (46.42%)
* Likes:    395
* Dislikes: 32
* Testcase Example:  '"01000111"'

```md
You are given a binary string s consisting only of zeroes and ones.
A substring of s is considered balanced if all zeroes are before ones and the number of zeroes is equal to the number of ones inside the substring. Notice that the empty substring is considered a balanced substring.
Return the length of the longest balanced substring of s.
A substring is a contiguous sequence of characters within a string.

Example 1:

Input: s = '01000111'
Output: 6
Explanation: The longest balanced substring is '000111', which has length 6.

Example 2:

Input: s = '00111'
Output: 4
Explanation: The longest balanced substring is '0011', which has length 4.

Example 3:

Input: s = '111'
Output: 0
Explanation: There is no balanced substring except the empty substring, so the answer is 0.


Constraints:

1 <= s.length <= 50
&#39;0&#39; <= s[i] <= &#39;1&#39;


```

## 翻译

给定二进制字符串s，找最长平衡子串的长度。平衡子串：所有0在所有1之前，且0和1的数量相等。

## 解题思路

遍历字符串，统计连续0和1的段。对每对相邻的"0段+1段"，平衡长度为2*min(零的个数, 一的个数)，取最大值。

## Solution

[SourceCode](./solution.js)
