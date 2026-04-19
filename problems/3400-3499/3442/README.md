# [3442] Maximum Difference Between Even and Odd Frequency I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-difference-between-even-and-odd-frequency-i/description/)

* algorithms
* Easy (60.73%)
* Likes:    396
* Dislikes: 71
* Testcase Example:  '"aaaaabbc"'

```md
You are given a string s consisting of lowercase English letters.
Your task is to find the maximum difference diff = freq(a1) - freq(a2) between the frequency of characters a1 and a2 in the string such that:

a1 has an odd frequency in the string.
a2 has an even frequency in the string.

Return this maximum difference.

Example 1:

Input: s = 'aaaaabbc'
Output: 3
Explanation:

The character &#39;a&#39; has an odd frequency of 5, and &#39;b&#39; has an even frequency of 2.
The maximum difference is 5 - 2 = 3.


Example 2:

Input: s = 'abcabcab'
Output: 1
Explanation:

The character &#39;a&#39; has an odd frequency of 3, and &#39;c&#39; has an even frequency of 2.
The maximum difference is 3 - 2 = 1.



Constraints:

3 <= s.length <= 100
s consists only of lowercase English letters.
s contains at least one character with an odd frequency and one with an even frequency.


```

## 题目翻译

给定字符串 s，找到最大差值 freq(a1) - freq(a2)，其中 a1 的频率为奇数，a2 的频率为偶数。

## 解题思路

统计每个字符频率，找出奇数频率的最大值和偶数频率的最小值，返回它们的差。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
