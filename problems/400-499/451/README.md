# [451] Sort Characters By Frequency

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sort-characters-by-frequency/description/)

* algorithms
* Medium (75.23%)
* Likes:    9256
* Dislikes: 336
* Testcase Example:  '"tree"'

```md
Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.
Return the sorted string. If there are multiple answers, return any of them.

Example 1:

Input: s = 'tree'
Output: 'eert'
Explanation: &#39;e&#39; appears twice while &#39;r&#39; and &#39;t&#39; both appear once.
So &#39;e&#39; must appear before both &#39;r&#39; and &#39;t&#39;. Therefore 'eetr' is also a valid answer.

Example 2:

Input: s = 'cccaaa'
Output: 'aaaccc'
Explanation: Both &#39;c&#39; and &#39;a&#39; appear three times, so both 'cccaaa' and 'aaaccc' are valid answers.
Note that 'cacaca' is incorrect, as the same characters must be together.

Example 3:

Input: s = 'Aabb'
Output: 'bbAa'
Explanation: 'bbaA' is also a valid answer, but 'Aabb' is incorrect.
Note that &#39;A&#39; and &#39;a&#39; are treated as two different characters.


Constraints:

1 <= s.length <= 5 * 105
s consists of uppercase and lowercase English letters and digits.


```

## 中文翻译

给定字符串 s，按字符出现频率降序排列，相同字符需连续。返回排序后的字符串。

## 解题思路

统计频率，按频率降序排序，每个字符重复其频率次拼接。

## Solution

[SourceCode](./solution.js)
