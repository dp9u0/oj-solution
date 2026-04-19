# [2586] Count the Number of Vowel Strings in Range

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/description/)

* algorithms
* Easy (74.22%)
* Likes:    382
* Dislikes: 33
* Testcase Example:  '["are","amy","u"]\n0\n2'

```md
You are given a 0-indexed array of string words and two integers left and right.
A string is called a vowel string if it starts with a vowel character and ends with a vowel character where vowel characters are &#39;a&#39;, &#39;e&#39;, &#39;i&#39;, &#39;o&#39;, and &#39;u&#39;.
Return the number of vowel strings words[i] where i belongs to the inclusive range [left, right].

Example 1:

Input: words = ['are','amy','u'], left = 0, right = 2
Output: 2
Explanation:
- 'are' is a vowel string because it starts with &#39;a&#39; and ends with &#39;e&#39;.
- 'amy' is not a vowel string because it does not end with a vowel.
- 'u' is a vowel string because it starts with &#39;u&#39; and ends with &#39;u&#39;.
The number of vowel strings in the mentioned range is 2.

Example 2:

Input: words = ['hey','aeo','mu','ooo','artro'], left = 1, right = 4
Output: 3
Explanation:
- 'aeo' is a vowel string because it starts with &#39;a&#39; and ends with &#39;o&#39;.
- 'mu' is not a vowel string because it does not start with a vowel.
- 'ooo' is a vowel string because it starts with &#39;o&#39; and ends with &#39;o&#39;.
- 'artro' is a vowel string because it starts with &#39;a&#39; and ends with &#39;o&#39;.
The number of vowel strings in the mentioned range is 3.


Constraints:

1 <= words.length <= 1000
1 <= words[i].length <= 10
words[i] consists of only lowercase English letters.
0 <= left <= right < words.length


```

## 中文翻译

统计 words[left..right] 中以元音开头且以元音结尾的字符串数量。

## 解题思路

遍历 [left, right]，检查每个字符串首尾是否为元音。

## Solution

[SourceCode](./solution.js)
