# [1839] Longest Substring Of All Vowels in Order

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/description/)

* algorithms
* Medium (51.74%)
* Likes:    852
* Dislikes: 31
* Testcase Example:  '"aeiaaioaaaaeiiiiouuuooaauuaeiu"'

```md
A string is considered beautiful if it satisfies the following conditions:

Each of the 5 English vowels (&#39;a&#39;, &#39;e&#39;, &#39;i&#39;, &#39;o&#39;, &#39;u&#39;) must appear at least once in it.
The letters must be sorted in alphabetical order (i.e. all &#39;a&#39;s before &#39;e&#39;s, all &#39;e&#39;s before &#39;i&#39;s, etc.).

For example, strings 'aeiou' and 'aaaaaaeiiiioou' are considered beautiful, but 'uaeio', 'aeoiu', and 'aaaeeeooo' are not beautiful.
Given a string word consisting of English vowels, return the length of the longest beautiful substring of word. If no such substring exists, return 0.
A substring is a contiguous sequence of characters in a string.

Example 1:

Input: word = 'aeiaaioaaaaeiiiiouuuooaauuaeiu'
Output: 13
Explanation: The longest beautiful substring in word is 'aaaaeiiiiouuu' of length 13.
Example 2:

Input: word = 'aeeeiiiioooauuuaeiou'
Output: 5
Explanation: The longest beautiful substring in word is 'aeiou' of length 5.

Example 3:

Input: word = 'a'
Output: 0
Explanation: There is no beautiful substring, so return 0.


Constraints:

1 <= word.length <= 5 * 105
word consists of characters &#39;a&#39;, &#39;e&#39;, &#39;i&#39;, &#39;o&#39;, and &#39;u&#39;.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定只含元音字母的字符串，找出最长的"美丽"子串长度。美丽子串：按 a→e→i→o→u 字典序排列，且 5 个元音各出现至少一次。

## 解题思路

**Approach: 滑动窗口/双指针**

1. 遍历字符串，维护当前窗口的起点和已出现的元音种类数
2. 若当前字符 ≥ 前一个字符（字典序不降），扩展窗口
3. 否则重置窗口：若上一个字符是 'u' 且种类=5，更新答案
4. 用 Set 或计数器跟踪当前窗口中的元音种类
5. 复杂度 O(n)
