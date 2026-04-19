# [1156] Swap For Longest Repeated Character Substring

## Description

[LeetCode Problem Description](https://leetcode.com/problems/swap-for-longest-repeated-character-substring/description/)

* algorithms
* Medium (44.24%)
* Likes:    1108
* Dislikes: 104
* Testcase Example:  '"ababa"'

```md
You are given a string text. You can swap two of the characters in the text.
Return the length of the longest substring with repeated characters.

Example 1:

Input: text = 'ababa'
Output: 3
Explanation: We can swap the first &#39;b&#39; with the last &#39;a&#39;, or the last &#39;b&#39; with the first &#39;a&#39;. Then, the longest repeated character substring is 'aaa' with length 3.

Example 2:

Input: text = 'aaabaaa'
Output: 6
Explanation: Swap &#39;b&#39; with the last &#39;a&#39; (or the first &#39;a&#39;), and we get longest repeated character substring 'aaaaaa' with length 6.

Example 3:

Input: text = 'aaaaa'
Output: 5
Explanation: No need to swap, longest repeated character substring is 'aaaaa' with length is 5.


Constraints:

1 <= text.length <= 2 * 104
text consist of lowercase English characters only.


```

## 中文翻译

给定字符串 text，可以交换其中两个字符一次，求最长连续重复字符子串的长度。

## 解题思路

先统计每个字符的总频率。然后找出所有连续段 (char, start, length)。对每个段：
1. 如果该字符总频率 > 段长度，可以从别处借一个字符放在段末尾，长度+1。
2. 如果相邻的下一个段（间隔恰好1个字符）也是同字符，可以合并两段。若总频率 > 两段长度之和则 +1。

## Solution

[SourceCode](./solution.js)
