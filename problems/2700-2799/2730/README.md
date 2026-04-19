# [2730] Find the Longest Semi-Repetitive Substring

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-longest-semi-repetitive-substring/description/)

* algorithms
* Medium (38.81%)
* Likes:    318
* Dislikes: 89
* Testcase Example:  '"52233"'

```md
You are given a digit string s that consists of digits from 0 to 9.
A string is called semi-repetitive if there is at most one adjacent pair of the same digit. For example, '0010', '002020', '0123', '2002', and '54944' are semi-repetitive while the following are not: '00101022' (adjacent same digit pairs are 00 and 22), and '1101234883' (adjacent same digit pairs are 11 and 88).
Return the length of the longest semi-repetitive substring of s.

Example 1:

Input: s = '52233'
Output: 4
Explanation:
The longest semi-repetitive substring is '5223'. Picking the whole string '52233' has two adjacent same digit pairs 22 and 33, but at most one is allowed.

Example 2:

Input: s = '5494'
Output: 4
Explanation:
s is a semi-repetitive string.

Example 3:

Input: s = '1111111'
Output: 2
Explanation:
The longest semi-repetitive substring is '11'. Picking the substring '111' has two adjacent same digit pairs, but at most one is allowed.


Constraints:

1 <= s.length <= 50
&#39;0&#39; <= s[i] <= &#39;9&#39;


```

## 中文翻译

给定一个数字字符串 s，如果字符串中至多有一对相邻相同数字，则称为半重复字符串。求 s 的最长半重复子串的长度。

## 解题思路

滑动窗口，维护窗口内相邻相同数字对的数量 <= 1，记录最大窗口长度。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
