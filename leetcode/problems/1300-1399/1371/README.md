# [1371] Find the Longest Substring Containing Vowels in Even Counts

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/description/)

* algorithms
* Medium (75.63%)
* Likes:    2564
* Dislikes: 142
* Testcase Example:  '"eleetminicoworoep"'

```md
Given the string s, return the size of the longest substring containing each vowel an even number of times. That is, &#39;a&#39;, &#39;e&#39;, &#39;i&#39;, &#39;o&#39;, and &#39;u&#39; must appear an even number of times.

Example 1:

Input: s = 'eleetminicoworoep'
Output: 13
Explanation: The longest substring is 'leetminicowor' which contains two each of the vowels: e, i and o and zero of the vowels: a and u.

Example 2:

Input: s = 'leetcodeisgreat'
Output: 5
Explanation: The longest substring is 'leetc' which contains two e&#39;s.

Example 3:

Input: s = 'bcbcbc'
Output: 6
Explanation: In this case, the given string 'bcbcbc' is the longest because all vowels: a, e, i, o and u appear zero times.


Constraints:

1 <= s.length <= 5 x 10^5
scontains only lowercase English letters.


```

## 中文翻译

给定字符串 s，求最长子串长度，使得每个元音字母（a, e, i, o, u）在该子串中出现偶数次。

## 解题思路

状态压缩 + 前缀异或：用 5 位掩码表示每个元音出现次数的奇偶性。遍历字符串，维护当前掩码。若当前掩码之前出现过（位置 first[mask]），则子串 (first[mask], i] 中所有元音都是偶数次。用 Map 记录每个掩码首次出现的位置。

时间复杂度：O(n)，空间复杂度：O(32)

## Solution

[SourceCode](./solution.js)
