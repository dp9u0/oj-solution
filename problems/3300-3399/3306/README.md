# [3306] Count of Substrings Containing Every Vowel and K Consonants II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/description/)

* algorithms
* Medium (40.64%)
* Likes:    996
* Dislikes: 149
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

5 <= word.length <= 2 * 105
word consists only of lowercase English letters.
0 <= k <= word.length - 5


```

## 中文翻译

给定字符串 word 和非负整数 k，返回包含所有五个元音（a/e/i/o/u 各至少一次）且恰好 k 个辅音的子串数量。

## 解题思路

滑动窗口 + "至少 k" 减 "至少 k+1" 得到 "恰好 k"。

定义 countAtLeast(t)：包含所有元音且至少 t 个辅音的子串数。用双指针，对每个 left 找到最小的 right 使得窗口满足条件，则从 left 出发的合法子串数为 n - right + 1。

最终答案 = countAtLeast(k) - countAtLeast(k+1)。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
