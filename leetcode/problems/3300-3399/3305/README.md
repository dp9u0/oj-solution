# [3305] Count of Substrings Containing Every Vowel and K Consonants I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-i/description/)

* algorithms
* Medium (41.79%)
* Likes:    144
* Dislikes: 14
* Testcase Example:  '"aeioqq"\n1'

```md
You are given a string word and a non-negative integer k.
Return the total number of substrings of word that contain every vowel (&#39;a&#39;, &#39;e&#39;, &#39;i&#39;, &#39;o&#39;, and &#39;u&#39;) at least once and exactly k consonants.

Example 1:

Input: word = 'aeioqq', k = 1
Output: 0
Explanation:
There is no substring with every vowel.

Example 2:

Input: word = 'aeiou', k = 0
Output: 1
Explanation:
The only substring with every vowel and zero consonants is word[0..4], which is 'aeiou'.

Example 3:

Input: word = 'ieaouqqieaouqq', k = 1
Output: 3
Explanation:
The substrings with every vowel and one consonant are:

word[0..5], which is 'ieaouq'.
word[6..11], which is 'qieaou'.
word[7..12], which is 'ieaouq'.



Constraints:

5 <= word.length <= 250
word consists only of lowercase English letters.
0 <= k <= word.length - 5


```

## 翻译

给定一个字符串 word 和非负整数 k，返回 word 中包含所有五个元音（a, e, i, o, u）各至少一次且恰好有 k 个辅音的子串总数。

## 解题思路

滑动窗口 + 差值计数。求"恰好 k 个辅音"等价于"至少 k 个辅音"减去"至少 k+1 个辅音"。

对于 countAtLeast(K)：用双指针维护窗口，当窗口满足辅音数 ≥ K 且包含所有元音时，扩展右边界到末尾的所有子串都满足条件（增加字符只会增加辅音和元音），计数 n - r，然后收缩左边界继续。

## Solution

[SourceCode](./solution.js)
