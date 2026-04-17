# [2063] Vowels of All Substrings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/vowels-of-all-substrings/description/)

* algorithms
* Medium (55.34%)
* Likes:    912
* Dislikes: 36
* Testcase Example:  '"aba"'

```md
Given a string word, return the sum of the number of vowels (&#39;a&#39;, &#39;e&#39;, &#39;i&#39;, &#39;o&#39;, and &#39;u&#39;) in every substring of word.
A substring is a contiguous (non-empty) sequence of characters within a string.
Note: Due to the large constraints, the answer may not fit in a signed 32-bit integer. Please be careful during the calculations.

Example 1:

Input: word = 'aba'
Output: 6
Explanation:
All possible substrings are: 'a', 'ab', 'aba', 'b', 'ba', and 'a'.
- 'b' has 0 vowels in it
- 'a', 'ab', 'ba', and 'a' have 1 vowel each
- 'aba' has 2 vowels in it
Hence, the total sum of vowels = 0 + 1 + 1 + 1 + 1 + 2 = 6.

Example 2:

Input: word = 'abc'
Output: 3
Explanation:
All possible substrings are: 'a', 'ab', 'abc', 'b', 'bc', and 'c'.
- 'a', 'ab', and 'abc' have 1 vowel each
- 'b', 'bc', and 'c' have 0 vowels each
Hence, the total sum of vowels = 1 + 1 + 1 + 0 + 0 + 0 = 3.

Example 3:

Input: word = 'ltcd'
Output: 0
Explanation: There are no vowels in any substring of 'ltcd'.


Constraints:

1 <= word.length <= 105
word consists of lowercase English letters.


```

## 题目翻译

给定字符串 word，返回所有子串中元音字母的总数。

## 解题思路

**贡献法**

对每个元音位置 i，它出现在 (i+1) * (n-i) 个子串中。遍历求和即可。O(n)。

## Solution

[SourceCode](./solution.js)
