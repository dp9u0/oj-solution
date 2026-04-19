# [3541] Find Most Frequent Vowel and Consonant

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/description/)

* algorithms
* Easy (89.32%)
* Likes:    427
* Dislikes: 15
* Testcase Example:  '"successes"'

```md
You are given a string s consisting of lowercase English letters (&#39;a&#39; to &#39;z&#39;).
Your task is to:

Find the vowel (one of &#39;a&#39;, &#39;e&#39;, &#39;i&#39;, &#39;o&#39;, or &#39;u&#39;) with the maximum frequency.
Find the consonant (all other letters excluding vowels) with the maximum frequency.

Return the sum of the two frequencies.
Note: If multiple vowels or consonants have the same maximum frequency, you may choose any one of them. If there are no vowels or no consonants in the string, consider their frequency as 0.
The frequency of a letter x is the number of times it occurs in the string.

Example 1:

Input: s = 'successes'
Output: 6
Explanation:

The vowels are: &#39;u&#39; (frequency 1), &#39;e&#39; (frequency 2). The maximum frequency is 2.
The consonants are: &#39;s&#39; (frequency 4), &#39;c&#39; (frequency 2). The maximum frequency is 4.
The output is 2 + 4 = 6.


Example 2:

Input: s = 'aeiaeia'
Output: 3
Explanation:

The vowels are: &#39;a&#39; (frequency 3), &#39;e&#39; ( frequency 2), &#39;i&#39; (frequency 2). The maximum frequency is 3.
There are no consonants in s. Hence, maximum consonant frequency = 0.
The output is 3 + 0 = 3.



Constraints:

1 <= s.length <= 100
s consists of lowercase English letters only.


```

## 中文翻译

给定小写字母字符串 s，找出现次数最多的元音和最多的辅音，返回两者频率之和。无元音或辅音则对应频率为0。

## 解题思路

统计频率，分元音辅音两组取最大值相加。

## Solution

[SourceCode](./solution.js)
